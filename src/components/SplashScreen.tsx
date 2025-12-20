import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(true);
      // Remove from DOM after animation completes
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 transition-opacity duration-500 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Logo Animation */}
      <div className="relative z-10 text-center">
        {/* Main Logo */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 animate-fade-in">
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.1s" }}>
              T
            </span>
            <span className="inline-block text-accent animate-slide-up" style={{ animationDelay: "0.2s" }}>
              a
            </span>
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.3s" }}>
              h
            </span>
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.4s" }}>
              w
            </span>
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.5s" }}>
              i
            </span>
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.6s" }}>
              s
            </span>
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.7s" }}>
              a
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-arabic animate-fade-in" style={{ animationDelay: "0.8s" }}>
            تـــــــحويسة
          </p>
        </div>

        {/* Sparkle Animation */}
        <div className="flex justify-center items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
          <Sparkles className="h-6 w-6 text-accent animate-pulse" style={{ animationDelay: "0.3s" }} />
        </div>

        {/* Tagline */}
        <p className="mt-6 text-white/80 text-sm md:text-base animate-fade-in" style={{ animationDelay: "1.2s" }}>
          Discover Algeria's Hidden Gems
        </p>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.4s" }}>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

