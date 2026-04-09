import { memo } from "react";
import { Clock, Calendar } from "lucide-react";
import type { Article } from "@/data/articles";

interface Props {
  article: Article;
  onClick: (article: Article) => void;
}

const ArticleCard = memo(({ article, onClick }: Props) => (
  <article
    className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border craft-card-hover cursor-pointer"
    onClick={() => onClick(article)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick(article)}
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        decoding="async"
        width={640}
        height={512}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
        {article.category}
      </span>
    </div>
    <div className="p-5">
      <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2 leading-relaxed">
        {article.excerpt}
      </p>
      <div className="flex items-center gap-4 text-xs font-body text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" /> {article.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {article.readTime}
        </span>
      </div>
    </div>
  </article>
));

ArticleCard.displayName = "ArticleCard";

export default ArticleCard;
