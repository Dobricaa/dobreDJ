const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  { label: "SoundCloud", href: "https://soundcloud.com", icon: "SoundCloud" },
  { label: "YouTube", href: "https://youtube.com", icon: "YouTube" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6 bg-dark-950 border-t border-dark-800"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <nav aria-label="Social links">
          <ul className="flex gap-6 list-none p-0 m-0">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors focus:outline-none focus:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-zinc-500 text-sm">
          © {currentYear} DJ YOURNAME. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
