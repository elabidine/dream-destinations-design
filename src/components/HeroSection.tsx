import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroPerson from "@/assets/hero-person-v2.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[80vh] lg:min-h-screen gradient-hero overflow-hidden">
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-foreground/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
      </div>

      {/* Hero Person Image */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
        <div className="relative h-full flex items-center justify-center lg:justify-end">
          <img
            src={heroPerson}
            alt="Tahwisa Tourism Ambassador"
            className="h-[60%] lg:h-[80%] w-auto object-contain object-bottom drop-shadow-2xl animate-fade-in"
          />
          {/* Algeria Map Silhouette - decorative behind person */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M20,30 Q30,20 50,25 T80,30 Q85,50 80,70 Q60,85 40,80 Q20,70 20,30Z"
                fill="currentColor"
                className="text-primary-foreground"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 lg:pt-40 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
              TAHWISA TO <span className="text-accent">?</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Discover Algeria's hidden gems, authentic cuisine, and unforgettable experiences
            </p>
          </div>

          {/* Search Bar */}
          <div 
            className="relative max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="hero-search-bar bg-background rounded-2xl p-2 flex items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Place, restaurant, things to do..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              )}
              <button className="bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                Search
              </button>
            </div>
          </div>

          {/* Quick Tags */}
          <div 
            className="flex flex-wrap justify-center gap-2 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {["Beaches", "Sahara", "Mountains", "Historic Sites", "Food Tours"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
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
