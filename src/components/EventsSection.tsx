import { Sparkles, Calendar, TrendingUp, Heart } from "lucide-react";

const events = [
  {
    emoji: "🎄",
    title: "Christmas",
    desc: "DIY decorations, ornaments & handmade gifts",
    gradient: "from-red-500/20 via-green-500/20 to-red-500/20",
    accent: "bg-red-500",
    season: "Dec",
  },
  {
    emoji: "🎉",
    title: "New Year",
    desc: "Party DIYs, countdown crafts & decor",
    gradient: "from-yellow-400/20 via-purple-500/20 to-pink-500/20",
    accent: "bg-purple-500",
    season: "Jan",
  },
  {
    emoji: "❄️",
    title: "Winter",
    desc: "Snowflake crafts & cozy home ideas",
    gradient: "from-blue-400/20 via-cyan-300/20 to-blue-500/20",
    accent: "bg-blue-500",
    season: "Feb",
  },
  {
    emoji: "🌸",
    title: "Easter",
    desc: "Egg decorating, pastel crafts & baskets",
    gradient: "from-pink-300/20 via-purple-300/20 to-yellow-300/20",
    accent: "bg-pink-400",
    season: "Apr",
  },
  {
    emoji: "🍁",
    title: "Fall",
    desc: "Pumpkin crafts & warm autumn DIYs",
    gradient: "from-orange-500/20 via-amber-500/20 to-red-500/20",
    accent: "bg-orange-500",
    season: "Oct",
  },
  {
    emoji: "🎃",
    title: "Halloween",
    desc: "Spooky crafts, costumes & props",
    gradient: "from-orange-600/20 via-purple-700/20 to-black/20",
    accent: "bg-orange-600",
    season: "Oct",
  },
];

const EventsSection = () => (
  <section id="events" className="py-16 md:py-24 relative overflow-hidden">
    {/* Decorative background blobs */}
    <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

    <div className="craft-container relative">
      {/* Header */}
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-body font-medium text-primary">Year-Round Inspiration</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Crafts for Every <span className="text-primary">Season</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg">
          From cozy winters to spooky nights — discover DIY magic tailored for every celebration of the year
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
        {events.map((e, idx) => (
          <div
            key={e.title}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 ${
              idx === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${e.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Season badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/80 backdrop-blur-sm border border-border">
              <Calendar className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] font-body font-semibold text-muted-foreground">{e.season}</span>
            </div>

            {/* Accent dot */}
            <div className={`absolute top-3 left-3 w-2 h-2 rounded-full ${e.accent} animate-pulse`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full pt-6">
              <div
                className={`text-5xl md:text-6xl mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                  idx === 0 ? "md:text-8xl" : ""
                }`}
              >
                {e.emoji}
              </div>
              <h3
                className={`font-heading font-bold text-foreground mb-1.5 ${
                  idx === 0 ? "text-2xl md:text-3xl" : "text-base md:text-lg"
                }`}
              >
                {e.title}
              </h3>
              <p
                className={`font-body text-muted-foreground leading-relaxed ${
                  idx === 0 ? "text-sm md:text-base" : "text-xs"
                }`}
              >
                {e.desc}
              </p>

              {/* Hover indicator */}
              <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-body font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explore</span>
                <TrendingUp className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-10 flex items-center justify-center gap-2 text-sm font-body text-muted-foreground">
        <Heart className="w-4 h-4 text-primary fill-primary/30" />
        <span>New seasonal crafts added every week</span>
      </div>
    </div>
  </section>
);

export default EventsSection;
