const EVENTS = [
  { date: "Mar 15, 2026", city: "Berlin", venue: "Watergate" },
  { date: "Apr 02, 2026", city: "Amsterdam", venue: "De Marktkantine" },
  { date: "May 20, 2026", city: "Barcelona", venue: "Pacha" },
];

export default function UpcomingEvents() {
  return (
    <section
      id="events"
      className="py-20 sm:py-28 px-6 bg-dark-900"
      aria-labelledby="events-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="events-heading"
          className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12"
        >
          Upcoming Events
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {EVENTS.map((event, i) => (
            <li key={i}>
              <article
                className="p-6 rounded-lg bg-dark-800 border border-dark-700 hover:border-zinc-600 transition-colors"
                aria-label={`${event.venue}, ${event.city} on ${event.date}`}
              >
                <time
                  className="block text-primary font-semibold text-sm uppercase tracking-wider"
                  dateTime={event.date.replace(/,\s/, "T")}
                >
                  {event.date}
                </time>
                <p className="mt-2 text-xl font-semibold text-white">
                  {event.city}
                </p>
                <p className="text-zinc-400">{event.venue}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
