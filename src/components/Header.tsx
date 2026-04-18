import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onSearchOpen: () => void;
}

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Crafts", href: "#crafts", children: [
      { label: "Clay Crafts", href: "#crafts" },
      { label: "Recycled Crafts", href: "#crafts" },
      { label: "Crafts for Kids", href: "#crafts" },
    ]
  },
  {
    label: "DIY", href: "#articles", children: [
      { label: "Rainbow Dash", href: "#articles" },
      { label: "Bookmark Ideas", href: "#articles" },
      { label: "Crochet Ideas", href: "#articles" },
      { label: "Mehndi Design", href: "#articles" },
      { label: "Journal Ideas", href: "#articles" },
      { label: "Origami", href: "#articles" },
      { label: "Vision Board", href: "#articles" },
    ]
  },
  {
    label: "Events", href: "#events", children: [
      { label: "Valentine's Day", href: "#events" },
      { label: "Winter", href: "#events" },
      { label: "Christmas", href: "#events" },
      { label: "New Year", href: "#events" },
    ]
  },
  {
    label: "Decor", href: "#categories", children: [
      { label: "Kitchen Decor", href: "#categories" },
      { label: "Home Decor", href: "#categories" },
      { label: "Living Room", href: "#categories" },
      { label: "Laundry Room Ideas", href: "#categories" },
    ]
  },
  { label: "Blog", href: "#articles" },
];

const Header = ({ onSearchOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined" &&
    (localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches))
  );

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="craft-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-heading text-primary-foreground text-left font-extrabold">
            ✨ GETINBEX.COM
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-body font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card rounded-lg shadow-lg border border-border py-2 min-w-[180px] animate-slide-down">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm font-body text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-primary"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={onSearchOpen}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-primary"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors text-foreground/70"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-down">
          <div className="craft-container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-body font-medium text-foreground/80 hover:text-primary rounded-md"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-1.5 text-sm font-body text-muted-foreground hover:text-primary"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
