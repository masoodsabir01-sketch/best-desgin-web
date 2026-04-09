import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import EventsSection from "@/components/EventsSection";
import ArticlesSection from "@/components/ArticlesSection";
import SearchOverlay from "@/components/SearchOverlay";
import ArticleModal from "@/components/ArticleModal";
import Footer from "@/components/Footer";
import type { Article } from "@/data/articles";

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleSearchOpen = useCallback(() => setSearchOpen(true), []);
  const handleSearchClose = useCallback(() => setSearchOpen(false), []);
  const handleArticleClick = useCallback((article: Article) => setSelectedArticle(article), []);
  const handleArticleClose = useCallback(() => setSelectedArticle(null), []);
  const handleQueryChange = useCallback((q: string) => setSearchQuery(q), []);

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchOpen={handleSearchOpen} />
      <main>
        <HeroSection />
        <CategoryCards />
        <EventsSection />
        <ArticlesSection searchQuery={searchQuery} onArticleClick={handleArticleClick} />
      </main>
      <Footer />

      <SearchOverlay
        isOpen={searchOpen}
        query={searchQuery}
        onQueryChange={handleQueryChange}
        onClose={handleSearchClose}
      />

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={handleArticleClose}
          onArticleClick={handleArticleClick}
        />
      )}
    </div>
  );
};

export default Index;
