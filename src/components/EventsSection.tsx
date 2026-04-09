const events = [
  { emoji: "🎄", title: "Christmas", desc: "DIY decorations, ornaments, handmade gifts" },
  { emoji: "🎉", title: "New Year", desc: "Party DIYs, countdown crafts, decor" },
  { emoji: "❄️", title: "Winter", desc: "Snowflake crafts, mantel decor, cozy home ideas" },
  { emoji: "🍁", title: "Fall", desc: "Pumpkin crafts, warm color decor, autumn DIYs" },
  { emoji: "🎃", title: "Halloween", desc: "Spooky crafts, costume ideas, props" },
  { emoji: "🌸", title: "Easter", desc: "Egg decorating, pastel crafts, baskets" },
];

const EventsSection = () => (
  <section id="events" className="py-16 md:py-24">
    <div className="craft-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          Events & Seasons We Cover
        </h2>
        <p className="text-muted-foreground font-body text-lg">
          Explore trending DIYs and craft ideas tailored for each festive season
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {events.map((e) => (
          <div
            key={e.title}
            className="bg-card rounded-xl p-5 text-center border border-border craft-card-hover cursor-pointer"
          >
            <div className="text-4xl mb-3">{e.emoji}</div>
            <h3 className="font-heading font-bold text-foreground mb-1.5">{e.title}</h3>
            <p className="text-xs font-body text-muted-foreground leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
