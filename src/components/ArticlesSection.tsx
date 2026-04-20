import { useState, useCallback, useMemo } from "react";
import { articles, categories } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import type { Article } from "@/data/articles";

interface Props {
  searchQuery: string;
  onArticleClick: (article: Article) => void;
}

const ArticlesSection = ({ searchQuery, onArticleClick }: Props) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const query = searchQuery.toLowerCase();

  const filtered = useMemo(() =>
    articles.filter((a) => {
      const matchesCat = activeCategory === "All" || a.category === activeCategory;
      const matchesSearch =
        !query ||
        a.title.toLowerCase().includes(query) ||
        a.excerpt.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query) ||
        a.author.toLowerCase().includes(query) ||
        a.tags.some((t) => t.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    }), [activeCategory, query]
  );

  return (
    <section id="articles" className="py-16 md:py-24 bg-muted/50">
      <div className="craft-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Latest Posts
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <ArticleCard key={a.id} article={a} onClick={onArticleClick} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground font-body py-12">
            No articles found. Try a different search or category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
