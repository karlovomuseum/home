import React from 'react'
/** @source footer11 */
import { Instagram, Linkedin, Twitter } from "lucide-react";

const sections = [
  {
    title: "Музей",
    links: [
      { name: "Колекции", href: "#gallery" },
      { name: "Експозиции", href: "#gallery" },
      { name: "Работно време", href: "#contact" },
      { name: "Цени", href: "#contact" },
    ],
  },
  {
    title: "Информация",
    links: [
      { name: "Контакти", href: "#contact" },
      { name: "За нас", href: "#about" },
      { name: "История", href: "#about" },
      { name: "Новини", href: "#" },
    ],
  },
  {
    title: "Услуги",
    links: [
      { name: "Екскурзии", href: "#contact" },
      { name: "Образователни програми", href: "#contact" },
    ],
  },
];

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Footer = ({
  logo = {
    url: "#",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23B91C1C' stroke='%23FFF' stroke-width='2'/%3E%3Ctext x='50' y='35' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EКМ%3C/text%3E%3Ctext x='50' y='65' text-anchor='middle' fill='white' font-size='8'%3EМУЗЕЙ%3C/text%3E%3C/svg%3E",
    alt: "Карловски Музей лого",
    title: "Карловски Музей",
  },
}: FooterProps) => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 py-4 md:flex-row lg:py-8">
          {/* Logo */}
          <div className="w-full md:w-auto">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-8"
              />
              <h2 className="text-lg font-semibold">{logo.title}</h2>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Съхраняваме и представяме богатото културно наследство на Карлово и региона.
            </p>
          </div>

          {/* Menu */}
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:flex md:gap-12 lg:gap-16">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="min-w-[120px]">
                  <h3 className="text-muted-foreground-subtle text-sm font-semibold">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3 className="text-muted-foreground-subtle text-sm font-semibold">
                  Социални мрежи
                </h3>

                <div className="text-muted-foreground-subtle mt-4 flex gap-4">
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="hover:text-primary"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="hover:text-primary"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="hover:text-primary"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Карловски Музей. Всички права запазени.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary">
                Условия за ползване
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Поверителност
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
