import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    Explore: ["All Posts", "Crafts", "DIY", "Decor"],
    Categories: ["Christmas", "Halloween", "Easter", "Winter"],
    Company: ["About", "Contact", "Privacy", "Terms"],
  };

  const socials = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-foreground/15">
      <div className="craft-container py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 space-y-3">
          <a href="#home" className="inline-block">
            <span className="text-2xl font-heading font-bold lowercase tracking-tight text-foreground">
              getinbex
            </span>
          </a>
          <p className="text-sm font-body text-foreground/60 leading-relaxed max-w-xs">
            Craft ideas, DIY inspiration and seasonal decor — straight to your feed.
          </p>
          <div className="flex gap-2 pt-1">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center border border-foreground/30 rounded-sm text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-xs font-body font-bold uppercase tracking-[0.18em] text-foreground/50 mb-3">
              {title}
            </h3>
            <ul className="space-y-2">
              {items.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm font-body text-foreground/75 hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/10">
        <div className="craft-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-foreground/50">
          <p>© {new Date().getFullYear()} getinbex. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
