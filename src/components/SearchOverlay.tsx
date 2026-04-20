import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { popularTags } from "@/data/articles";

interface Props {
  isOpen: boolean;
  query: string;
  onQueryChange: (q: string) => void;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, query, onQueryChange, onClose }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    const el = document.getElementById("articles");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm flex items-start justify-center pt-[15vh] animate-fade-in">
      <div className="bg-card rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading font-bold text-foreground text-lg">Search</h2>
          <button
            onClick={() => { onQueryChange(""); onClose(); }}
            className="p-1.5 rounded-full hover:bg-muted text-muted-foreground"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSearch} className="flex items-center gap-2 bg-muted rounded-xl p-1">
          <Search className="w-5 h-5 ml-3 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search tutorials, crafts, DIY ideas..."
            className="flex-1 bg-transparent py-2.5 text-sm font-body text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-body font-bold hover:opacity-90 transition-opacity">
            Search
          </button>
        </form>
        <div className="flex flex-wrap gap-2 mt-4">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                onQueryChange(tag.replace("#", ""));
                onClose();
                setTimeout(() => {
                  document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className="text-xs font-body bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
