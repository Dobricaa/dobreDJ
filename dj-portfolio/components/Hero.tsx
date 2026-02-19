import DrumStickIntro from "@/components/DrumStickIntro";

export default function Hero() {
  return (
    <>
      <DrumStickIntro />
      <section
      className="relative min-h-[105vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Full-bleed background image: left to right, behind all content */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img2.png')" }}
        aria-hidden
      />
      {/* Dark overlay so text and buttons stay readable */}
      {/* <div
        className="absolute inset-0 z-[1] bg-dark-950/60"
        aria-hidden
      /> */}
      {/* Content on top of image */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative inline-block">
          {/* <span
            className="absolute -top-2 -left-1 w-6 h-6 border-l-2 border-t-2 border-primary rounded-tl"
            aria-hidden
          /> */}
          {/* <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            DOBRE
          </h1> */}
        </div>
        {/* <p
          className="mt-2 text-base sm:text-lg text-zinc-300 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          DJ & LIVE PERCUSSIONIST
        </p> */}
        <div
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-950 transition-all hover:opacity-90"
            style={{ backgroundColor: "rgb(0,173,166)" }}
          >
            Book Now
          </a>
          <a
            href="#latest-mix"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-950"
          >
            Listen Now
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
