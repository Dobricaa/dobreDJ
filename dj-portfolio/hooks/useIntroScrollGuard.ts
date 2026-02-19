"use client";

import { useEffect, useRef, useCallback } from "react";

export function useIntroScrollGuard(
  countdownActive: boolean,
  onUserScroll: () => void
): void {
  const initialScrollY = useRef(0);
  const rafRef = useRef<number | null>(null);

  const checkScroll = useCallback(() => {
    if (!countdownActive) return;
    const current = window.scrollY ?? window.pageYOffset;
    if (Math.abs(current - initialScrollY.current) > 5) {
      onUserScroll();
    }
    rafRef.current = requestAnimationFrame(checkScroll);
  }, [countdownActive, onUserScroll]);

  useEffect(() => {
    if (!countdownActive) return;
    initialScrollY.current = window.scrollY ?? window.pageYOffset;
    rafRef.current = requestAnimationFrame(checkScroll);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [countdownActive, checkScroll]);
}
