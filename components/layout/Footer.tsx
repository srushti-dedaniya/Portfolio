import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="font-display text-lg font-bold text-primary">
            Srushti Dedaniya
          </div>
          <p className="text-muted text-body-sm">
            &copy; {new Date().getFullYear()} Srushti Dedaniya. Built with
            passion.
          </p>
        </div>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300 text-body-sm font-medium flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-lg">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
