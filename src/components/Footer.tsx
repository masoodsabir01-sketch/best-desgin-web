import { Facebook, Twitter, Instagram, Mail, ArrowUpRight, Send } from "lucide-react";

const Footer = () => {
  const links = {
    Explore: ["All Posts", "Crafts", "DIY", "Decor", "Blog"],
    Categories: ["Christmas", "Halloween", "Easter", "Winter", "Fall"],
    Company: ["About", "Contact", "Privacy", "Terms", "Sitemap"],
  };

  const socials = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background border-t border-foreground">
      {/* Top CTA strip */}
      <div className="border-b border-background/10">
        <div className="craft-container py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight tracking-tight">
              Get fresh craft ideas, <br />
              <span className="italic font-normal text-background/70">straight to your inbox.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base font-body text-background/60 max-w-md">
              Join 10,000+ makers receiving weekly DIY inspiration, Pinterest-ready prompts and seasonal craft guides.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 h-14 px-5 rounded-sm bg-background/5 border border-background/20 text-background placeholder:text-background/40 font-body text-sm focus:outline-none focus:border-background transition-colors"
            />
            <button
              type="submit"
              className="h-14 px-6 rounded-sm bg-background text-foreground font-body font-bold text-sm tracking-wider uppercase hover:bg-background/90 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="craft-container py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-5">
          <a href="#home" className="inline-block">
            <span className="text-3xl md:text-4xl font-heading font-bold lowercase tracking-tight text-background">
              getinbex
            </span>
          </a>
          <p className="text-sm font-body text-background/60 leading-relaxed max-w-sm">
            Character-inspired content, Pinterest pin prompts and creative strategies to grow your craft blog and audience.
          </p>
          <div className="flex gap-2 pt-2">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center border border-background/30 rounded-sm text-background hover:bg-background hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-background/50 mb-5">
              {title}
            </h3>
            <ul className="space-y-3">
              {items.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1 text-sm font-body text-background/80 hover:text-background transition-colors"
                  >
                    {l}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Big wordmark */}
      <div className="craft-container pb-8">
        <div className="border-t border-background/10 pt-10">
          <h2 className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-heading font-bold lowercase leading-none tracking-tighter text-background/10 select-none text-center">
            getinbex
          </h2>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="craft-container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-body text-background/50">
          <p>© {new Date().getFullYear()} getinbex — Crafted with love.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
