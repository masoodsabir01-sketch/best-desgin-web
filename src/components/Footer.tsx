const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="craft-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1 */}
        <div>
          <span className="text-xl font-heading font-bold mb-4 block">✨ Crafted Wizard</span>
          <p className="text-sm font-body text-primary-foreground/70 leading-relaxed">
            CraftedWizard brings you character-inspired content ideas, Pinterest pin prompts, and creative strategies to grow your blog traffic.
          </p>
        </div>
        {/* Col 2 */}
        <div>
          <h3 className="font-heading font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Pinterest", "Contact"].map((l) => (
              <li key={l}>
                <a href="#home" className="text-sm font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Col 3 */}
        <div>
          <h3 className="font-heading font-bold mb-4">Connect</h3>
          <div className="flex gap-3">
            {["Pinterest", "Facebook", "Instagram", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-body font-bold"
                aria-label={s}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="craft-container py-4 text-center text-xs font-body text-primary-foreground/50">
        © {new Date().getFullYear()} CraftedWizard.com — All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
