import { memo } from "react";
import { ArrowRight } from "lucide-react";
import catDecor from "@/assets/cat-decor.jpg";
import catCrafts from "@/assets/cat-crafts.jpg";
import catCostumes from "@/assets/cat-costumes.jpg";
import catNails from "@/assets/cat-nails.jpg";

const cats = [
  {
    title: "DIY Home Decor",
    desc: "Wall art, mantels, centerpieces, and room glow-ups you can recreate with simple supplies.",
    link: "Browse Decor Ideas",
    image: catDecor,
  },
  {
    title: "Cute Crafts",
    desc: "Weekend projects, gifts, and kid-friendly crafts that look super Pinterest-y without stress.",
    link: "See Craft Projects",
    image: catCrafts,
  },
  {
    title: "DIY Costumes",
    desc: "Easy, budget-friendly costume ideas with clever hacks and photogenic finishing touches.",
    link: "Explore Costume Ideas",
    image: catCostumes,
  },
  {
    title: "Nail Art",
    desc: "Salon-worthy nail designs, step-by-step, using simple tools and dreamy color palettes.",
    link: "View Nail Tutorials",
    image: catNails,
  },
];

const CategoryCards = memo(() => (
  <section id="categories" className="py-16 md:py-24 bg-muted/50">
    <div className="craft-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          Explore Magical DIY Categories
        </h2>
        <p className="text-muted-foreground font-body text-lg">Pick a category to start crafting!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cats.map((c) => (
          <article key={c.title} className="group bg-card rounded-xl overflow-hidden shadow-sm craft-card-hover border border-border">
            <div className="relative h-48 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                decoding="async"
                width={640}
                height={512}
                className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <h3 className="absolute bottom-3 left-4 text-lg font-heading font-bold text-primary-foreground">{c.title}</h3>
            </div>
            <div className="p-5">
              <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">{c.desc}</p>
              <a href="#articles" className="inline-flex items-center gap-1.5 text-sm font-body font-bold text-primary hover:text-craft-pink transition-colors">
                {c.link} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
));

CategoryCards.displayName = "CategoryCards";

export default CategoryCards;
