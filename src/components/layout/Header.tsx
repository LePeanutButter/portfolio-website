import { navigationItems, siteConfig } from "@/src/config/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-canvas/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-content items-center justify-between px-6 sm:px-8">
        <a
          className="font-sans text-base font-extrabold text-ink transition-opacity duration-500 ease-premium hover:opacity-60"
          href="#"
        >
          {siteConfig.handle}
        </a>
        <ul className="hidden gap-10 md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                className="text-sm text-ink-secondary transition-colors duration-500 ease-premium hover:text-ink"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
