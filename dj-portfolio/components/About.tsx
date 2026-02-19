export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-6 bg-dark-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-bold text-primary mb-8"
        >
          About
        </h2>
        <p className="text-zinc-300 text-lg leading-relaxed">
          DŌBRE is a Romania-based DJ and percussionist specializing in high-energy Afro-Latin house. Fusing infectious Latin house grooves and high-energy Afro house, DŌBRE creates performances where rhythm is king and the mission is simple: non-stop dancing.
        </p>
        <p className="text-zinc-300 text-lg leading-relaxed mt-6">
          What makes DŌBRE different is the explosive energy live drums driving the rhythm, carefully selected tracks that keep momentum relentless.
        </p>
      </div>
    </section>
  );
}
