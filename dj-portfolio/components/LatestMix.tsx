"use client";

import { useEffect, useRef, useState } from "react";

const SOUNDCLOUD_EMBED_URL =
  "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fqdobre%2Fdobre-ethos-society-rooftop-day-party-set&color=%2300ada6&auto_play=false&hide_related=true&show_comments=false";

export default function LatestMix() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "50px", threshold: 0.1 }
    );
    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => (el ? observer.unobserve(el) : undefined);
  }, []);

  return (
    <section
      id="latest-mix"
      ref={containerRef}
      className="py-20 sm:py-28 px-6 bg-dark-950"
      aria-labelledby="latest-mix-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="latest-mix-heading"
          className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10"
        >
          Latest Mix
        </h2>
        <div className="relative w-full rounded-lg overflow-hidden bg-dark-800 aspect-[4/1] min-h-[166px]">
          {isVisible && (
            <iframe
              title="Latest mix on SoundCloud"
              src={SOUNDCLOUD_EMBED_URL}
              width="100%"
              height="166"
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
