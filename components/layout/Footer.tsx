import Link from "next/link";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8 bg-gradient-to-t from-surface-container-lowest to-transparent">
      <div className="flex flex-col gap-2">
        <div className="font-display-lg text-headline-md text-primary">
          Srushti Dedaniya
        </div>
        <p className="font-label-md text-label-md text-on-surface-variant opacity-60">
          &copy; {new Date().getFullYear()} Srushti Dedaniya. Crafted in Liquid
          Light.
        </p>
      </div>
      <div className="flex gap-8">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary-container hover:-translate-y-1 transition-all duration-300 font-label-md text-label-md"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
