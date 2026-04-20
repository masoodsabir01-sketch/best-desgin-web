import { useState, useEffect } from "react";
import { Search, Menu, X, Facebook, Twitter, Instagram, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onSearchOpen: () => void;
}

const navItems = [
  { label: "ALL POST", href: "#articles" },
  { label: "CRAFTS", href: "#crafts" },
  { label: "DIY", href: "#articles" },
  { label: "DECOR", href: "#categories" },
  { label: "BLOG", href: "#articles" },
];

const Header = ({ onSearchOpen }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined" &&
    (localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches))
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const iconBtn =
    "w-9 h-9 flex items-center justify-center border border-foreground/80 rounded-sm text-foreground hover:bg-foreground hover:text-background transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="craft-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <span className="text-2xl md:text-3xl font-heading font-bold text-foreground lowercase tracking-tight">
            getinbex
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-body font-semibold tracking-wider text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a href="#" aria-label="Facebook" className={`${iconBtn} hidden sm:flex`}>
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" className={`${iconBtn} hidden sm:flex`}>
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Instagram" className={`${iconBtn} hidden sm:flex`}>
            <Instagram className="w-4 h-4" />
          </a>
          <button onClick={onSearchOpen} aria-label="Search" className={iconBtn}>
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={iconBtn}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${iconBtn} lg:hidden`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-down">
          <div className="craft-container py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-body font-semibold tracking-wider text-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
