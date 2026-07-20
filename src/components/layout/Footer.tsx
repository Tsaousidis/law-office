"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Logo } from "./Logo";

const NAV_ITEMS = ["about", "services", "team", "contact"] as const;

const SOCIALS = [
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
] as const;

export function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-5">
            <Logo variant="inverted" />
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              {dict.footer.tagline}
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
              {dict.footer.linksTitle}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {dict.nav.links[item]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-cream/70">
              <li>
                <span className="block text-xs uppercase tracking-wide text-cream/40">
                  {dict.footer.addressLabel}
                </span>
                {dict.footer.address}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-cream/40">
                  {dict.footer.phoneLabel}
                </span>
                <a href={`tel:${dict.footer.phone.replace(/\s/g, "")}`} className="hover:text-gold-light">
                  {dict.footer.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-cream/40">
                  {dict.footer.emailLabel}
                </span>
                <a href={`mailto:${dict.footer.email}`} className="hover:text-gold-light">
                  {dict.footer.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-cream/40">
                  {dict.footer.hoursLabel}
                </span>
                {dict.footer.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {dict.nav.brandFull}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8.03h2.7l.4-3.13h-3.1V7.86c0-.9.25-1.52 1.55-1.52h1.66V3.53C15.94 3.44 14.9 3.36 13.7 3.36c-2.5 0-4.2 1.53-4.2 4.34v2.44H6.8v3.13h2.7V21h4z" />
    </svg>
  );
}
