"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-6 bg-dark-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-xl mx-auto">
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10"
        >
          Contact / Booking
        </h2>
        <form
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
          noValidate
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-300 mb-2">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-300 mb-2">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-300 mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-y min-h-[120px]"
              placeholder="Booking request or message…"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 px-6 font-semibold text-white bg-primary hover:opacity-90 transition-opacity rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-900"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-zinc-500 text-sm mt-4">
          Form is UI only. Connect to your backend or a form service to handle submissions.
        </p>
      </div>
    </section>
  );
}
