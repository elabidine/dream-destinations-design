import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Algeria Map Silhouette - Behind Person */}
      <div className="absolute right-[5%] top-[15%] w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] opacity-[0.12] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M25,15 L45,10 L65,12 L80,18 L85,30 L88,50 L85,70 L75,85 L55,90 L35,88 L20,80 L15,65 L18,45 L22,25 Z"
            fill="currentColor"
            className="text-primary-foreground"
          />
        </svg>
      </div>


      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl space-y-8 py-24 lg:py-32">
          {/* Main Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
              TAHWISA TO <span className="text-accent">?</span>
            </h1>
            <p className="text-base lg:text-lg text-primary-foreground/80 max-w-md">
              Discover Algeria's hidden gems, authentic cuisine, and unforgettable experiences
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl">
            <div className="hero-search-bar bg-background rounded-2xl p-2 flex items-center gap-2 shadow-hero">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
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
              <button className="bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg shrink-0">
                Search
              </button>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap gap-2">
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
