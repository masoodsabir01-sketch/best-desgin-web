import { useEffect, useRef } from "react";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import type { Article } from "@/data/articles";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import Header from "./Header";

interface Props {
  article: Article;
  onClose: () => void;
  onArticleClick: (article: Article) => void;
}

const ArticleModal = ({ article, onClose, onArticleClick }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, left: 0 });
    containerRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {
      document.body.style.overflow = "";
    };
  }, [article]);

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  const shareUrl = `https://craftedwizard.com/${article.slug}`;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[70] bg-background overflow-y-auto">
      <Header onSearchOpen={onClose} />

      <div className="bg-card border-b border-border mt-16 md:mt-20">
        <div className="craft-container flex items-center h-14 gap-3">
          <button onClick={onClose} className="flex items-center gap-1.5 text-sm font-body text-primary hover:text-craft-pink transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <span className="text-border">/</span>
          <span className="text-sm font-body text-muted-foreground">{article.category}</span>
          <span className="text-border">/</span>
          <span className="text-sm font-body text-muted-foreground truncate">{article.title}</span>
        </div>
      </div>

      <main className="craft-container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          <article>
            <span className="inline-block bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm font-body text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
            </div>
            <img
              src={article.image}
              alt={article.title}
              width={640}
              height={512}
              className="w-full rounded-xl mb-8 object-cover max-h-[400px]"
            />
            <div
              className="prose prose-lg max-w-none font-body text-foreground/90
                [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4
                [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
                [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-foreground/80
                [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Share2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-body font-bold text-foreground">Share this article:</span>
                <a href={`https://pinterest.com/pin/create/button/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-sm font-body text-craft-pink hover:underline">Pinterest</a>
                <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-sm font-body text-primary hover:underline">Facebook</a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-sm font-body text-craft-lavender hover:underline">Twitter</a>
              </div>
            </div>

            <div className="mt-8 bg-muted rounded-xl p-6 flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xl shrink-0">
                CW
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Crafted Wizard</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  We bring you character-inspired content ideas, Pinterest pin prompts, and creative strategies. Our tutorials help makers of all skill levels create beautiful projects.
                </p>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-5 sticky top-20">
              <h3 className="font-heading font-bold text-foreground mb-4">Trending Articles</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => onArticleClick(r)}
                    className="flex gap-3 w-full text-left hover:bg-muted rounded-lg p-2 transition-colors"
                  >
                    <img src={r.image} alt={r.title} loading="lazy" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div>
                      <h4 className="text-sm font-heading font-bold text-foreground line-clamp-2">{r.title}</h4>
                      <span className="text-xs font-body text-muted-foreground">{r.readTime}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16 pt-10 border-t border-border">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Recommended Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <ArticleCard key={r.id} article={r} onClick={onArticleClick} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArticleModal;
