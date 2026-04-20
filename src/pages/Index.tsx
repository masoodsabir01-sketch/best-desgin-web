import { lazy, Suspense, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";

import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";
import type { Article } from "@/data/articles";

const SearchOverlay = lazy(() => import("@/components/SearchOverlay"));
const ArticleModal = lazy(() => import("@/components/ArticleModal"));

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main>
        <CategoryCards />
        
        <ArticlesSection searchQuery={searchQuery} onArticleClick={(a) => setSelectedArticle(a)} />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <SearchOverlay
          isOpen={searchOpen}
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClose={() => setSearchOpen(false)}
        />

        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
            onArticleClick={(a) => setSelectedArticle(a)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Index;
