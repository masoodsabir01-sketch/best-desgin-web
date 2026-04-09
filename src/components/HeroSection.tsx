import heroBg from "@/assets/hero-crafts.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Craft supplies flat lay with yarn, scissors and flowers" width={1920} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative craft-container py-20 md:py-32">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Crafted Wizard: DIY, Crafts, Costumes & Nails
          </h1>
          <p className="text-lg md:text-xl font-body text-primary-foreground/90 mb-8 leading-relaxed">
            Learn step-by-step tutorials, clever hacks, and aesthetic ideas for makers. From weekend crafts and handmade costumes to salon-worthy nail art, get Pinterest-ready inspiration — all in one magical place.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              ✨ Browse Tutorials
            </a>
            <a
              href="#articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/20 text-primary-foreground font-body font-bold rounded-full hover:bg-primary-foreground/30 transition-colors backdrop-blur-sm border border-primary-foreground/30"
            >
              See Latest Posts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
