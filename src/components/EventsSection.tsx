import { Lightbulb, Clock, Users, Award, Palette, Rocket } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Fresh Ideas Daily",
    desc: "Hand-picked creative tutorials added every single day to spark your imagination.",
    stat: "500+",
    label: "Tutorials",
  },
  {
    icon: Clock,
    title: "Quick & Easy Steps",
    desc: "Most projects take under an hour — perfect for busy makers and weekend warriors.",
    stat: "15 min",
    label: "Avg. Time",
  },
  {
    icon: Palette,
    title: "Beginner Friendly",
    desc: "Clear photos, simple language, and step-by-step guides anyone can follow.",
    stat: "100%",
    label: "Easy",
  },
  {
    icon: Users,
    title: "Loved by Makers",
    desc: "Join thousands of crafters sharing their finished projects and creative wins.",
    stat: "25K+",
    label: "Crafters",
  },
  {
    icon: Award,
    title: "Pinterest Ready",
    desc: "Aesthetic, share-worthy results that look stunning on every social feed.",
    stat: "★ 4.9",
    label: "Rated",
  },
  {
    icon: Rocket,
    title: "Always Trending",
    desc: "Stay ahead with viral DIYs, seasonal hits, and the latest craft trends.",
    stat: "24/7",
    label: "Updated",
  },
];

const EventsSection = () => (
  <section id="events" className="py-16 md:py-24 relative overflow-hidden bg-muted/30">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.08),transparent_50%)] pointer-events-none" />

    <div className="craft-container relative">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold mb-4 border border-primary/20">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Built for <span className="text-primary">Creative Minds</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg">
          Everything you need to turn ideas into beautiful handmade creations — from quick crafts to showstopping projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

              <div className="relative flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-heading font-bold text-foreground">{f.stat}</div>
                  <div className="text-[10px] uppercase tracking-wider font-body text-muted-foreground">{f.label}</div>
                </div>
              </div>

              <h3 className="relative font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="relative text-sm font-body text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default EventsSection;
