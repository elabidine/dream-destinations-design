import { useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] gradient-hero overflow-hidden flex items-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Heading */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
              Where Will <span className="text-accent">Tahwisa</span> Take You?
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Discover Algeria's hidden gems, authentic cuisine, and unforgettable experiences
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="hero-search-bar bg-background/95 backdrop-blur-md rounded-2xl p-2 flex items-center gap-2 shadow-xl border border-primary-foreground/10">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <Input
                  type="text"
                  placeholder="Search destinations, activities, restaurants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              )}
              <Button 
                className="bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg shrink-0"
                size="lg"
              >
                Search
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Beaches", "Sahara", "Mountains", "Historic Sites", "Food Tours"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium transition-colors backdrop-blur-sm border border-primary-foreground/10"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
