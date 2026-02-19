"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIntroScrollGuard } from "@/hooks/useIntroScrollGuard";

const COUNTDOWN_MS = 1000;
const DELAY_BETWEEN_STRIKES_MS = 700;
const STICK_ENTRY_DURATION = 0.6;
const STICK_STRIKE_DOWN_DURATION = 0.06;
const STICK_STRIKE_UP_DURATION = 0.25;
const STICK_EXIT_DURATION = 0.5;
const SCROLL_FRACTION = 0.32;
const STICK_BASE_ROTATION = -52;
const STICK_STRIKE_ROTATION = -5;
const STICK_STRIKE_Y = 180;
/** Fraction of viewport width: stick rests this far to the left (e.g. 0.25 = 25% from right edge). Increase to move stick more left. */
const STICK_REST_X_FRACTION = 0.25;
const STICK_REST_Y = -280;
const STICK_REST_Y_MOBILE = -100;
const SIZE_MULTIPLIER = 5;
const SIZE_MULTIPLIER_MOBILE = 3;
const MOBILE_BREAKPOINT = 640;

let introHasRun = false;

export default function DrumStickIntro() {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"countdown" | "running" | "cancelled" | "done">("countdown");
  const [mounted, setMounted] = useState(true);
  const countdownRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const strikeTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const stickControls = useAnimationControls();
  const shakeControls = useAnimationControls();
  const [isMobile, setIsMobile] = useState(false);

  const cancelIntro = useCallback(() => {
    setPhase("cancelled");
    if (countdownRef.current) {
      clearTimeout(countdownRef.current);
      countdownRef.current = null;
    }
    strikeTimeoutsRef.current.forEach((t) => clearTimeout(t));
    strikeTimeoutsRef.current = [];
  }, []);

  useIntroScrollGuard(phase === "countdown", cancelIntro);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion || introHasRun) {
      if (countdownRef.current) {
        clearTimeout(countdownRef.current);
        countdownRef.current = null;
      }
      setPhase("cancelled");
      return;
    }

    countdownRef.current = setTimeout(() => {
      countdownRef.current = null;
      introHasRun = true;
      setPhase("running");
    }, COUNTDOWN_MS);

    return () => {
      if (countdownRef.current) clearTimeout(countdownRef.current);
      strikeTimeoutsRef.current.forEach((t) => clearTimeout(t));
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (phase !== "running") return;

    let cancelled = false;

    const runSequence = async () => {
      const restX = -window.innerWidth * STICK_REST_X_FRACTION;
      const restY = window.innerWidth < MOBILE_BREAKPOINT ? STICK_REST_Y_MOBILE : STICK_REST_Y;
      try {
        await stickControls.start({
          x: 300,
          y: restY,
          rotate: STICK_BASE_ROTATION,
          transition: { duration: 0 },
        });

        if (cancelled) return;
        await stickControls.start({
          x: restX,
          y: restY,
          rotate: STICK_BASE_ROTATION,
          transition: {
            duration: STICK_ENTRY_DURATION,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        });

        for (let strike = 0; strike < 3 && !cancelled; strike++) {
          if (cancelled) return;
          await stickControls.start({
            x: restX,
            y: restY + STICK_STRIKE_Y,
            rotate: STICK_BASE_ROTATION + STICK_STRIKE_ROTATION,
            transition: {
              duration: STICK_STRIKE_DOWN_DURATION,
              ease: "easeOut",
            },
          });
          if (cancelled) return;
          const scrollTop = window.innerHeight * SCROLL_FRACTION * (strike + 1);
          window.scrollTo({ top: scrollTop, behavior: "smooth" });
          shakeControls.start({
            x: [0, -8, 8, -4, 4, 0],
            transition: { duration: 0.25, ease: "easeOut" },
          });
          shakeControls.set({ x: 0 });
          await stickControls.start({
            x: restX,
            y: restY,
            rotate: STICK_BASE_ROTATION,
            transition: {
              duration: STICK_STRIKE_UP_DURATION,
              type: "spring",
              stiffness: 380,
              damping: 14,
            },
          });

          if (strike < 2) {
            await new Promise<void>((resolve) => {
              const t = setTimeout(resolve, DELAY_BETWEEN_STRIKES_MS);
              strikeTimeoutsRef.current.push(t);
            });
          }
        }

        if (cancelled) return;
        await stickControls.start({
          y: "150vh",
          x: restX,
          rotate: STICK_BASE_ROTATION,
          transition: {
            duration: STICK_EXIT_DURATION,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        });

        setMounted(false);
        setPhase("done");
      } catch {
        setPhase("cancelled");
        setMounted(false);
      }
    };

    runSequence();
    return () => {
      cancelled = true;
    };
  }, [phase, stickControls, shakeControls]);

  if (prefersReducedMotion || phase === "cancelled" || !mounted) {
    return null;
  }

  const multiplier = isMobile ? SIZE_MULTIPLIER_MOBILE : SIZE_MULTIPLIER;
  const stickWidth = 48 * multiplier;
  const stickHeight = 128 * multiplier;

  return (
    <AnimatePresence mode="wait">
      {mounted && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none overflow-visible"
          initial={false}
          animate={shakeControls}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="fixed top-1/2"
            style={{
              width: stickWidth,
              height: stickHeight,
              right: 0,
              marginTop: -stickHeight / 2,
              transformOrigin: "90% 10%",
              willChange: "transform",
            }}
            initial={{ x: 300, y: STICK_REST_Y, rotate: STICK_BASE_ROTATION }}
            animate={stickControls}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/img4.png"
              alt=""
              className="w-full h-full object-contain select-none"
              aria-hidden
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "right center",
                transform: "scaleX(-1)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
