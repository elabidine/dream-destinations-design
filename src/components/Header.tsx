import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Globe, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Home, 
  Activity, 
  Hotel, 
  UtensilsCrossed, 
  Newspaper, 
  Info, 
  Phone, 
  MapPin,
  ChevronDown,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Header = () => {
  const [language, setLanguage] = useState("English (US)");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: "en", name: "English (US)", flag: "🇺🇸" },
    { code: "fr", name: "French (FR)", flag: "🇫🇷" },
    { code: "ar", name: "Arabic (AR)", flag: "🇸🇦" },
    { code: "tz", name: "Amazigh (AG)", flag: "🇩🇿" },
  ];

  const cities = [
    { id: "algiers", name: "Algiers", nameAr: "الجزائر" },
    { id: "oran", name: "Oran", nameAr: "وهران" },
    { id: "mostaganem", name: "Mostaganem", nameAr: "مستغانم" },
  ];

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Things to do", href: "/things-to-do", icon: Activity },
    { name: "Place to stay", href: "/place-to-stay", icon: Hotel },
    { name: "Food & drinks", href: "#food-drinks", icon: UtensilsCrossed },
    { name: "News and events", href: "#news-events", icon: Newspaper },
    { name: "About", href: "#about", icon: Info },
    { name: "Contacts", href: "#contacts", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "font-bold leading-none transition-all duration-300",
                    isScrolled 
                      ? "text-2xl lg:text-3xl text-primary" 
                      : "text-2xl lg:text-3xl xl:text-4xl text-primary-foreground"
                  )}>
                    <span className="text-accent">T</span>ahwisa
                  </span>
                  <span className={cn(
                    "text-[8px] transition-colors duration-300",
                    isScrolled ? "text-muted-foreground" : "text-primary-foreground/60"
                  )}>®</span>
                </div>
                <span className={cn(
                  "font-arabic -mt-0.5 transition-colors duration-300",
                  isScrolled 
                    ? "text-xs lg:text-sm text-muted-foreground" 
                    : "text-xs lg:text-sm text-primary-foreground/70"
                )}>
                  تـــــــحويسة
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              const isExternal = link.href.startsWith("#");
              
              const linkContent = (
                <div className={cn(
                  "relative px-4 py-2 rounded-lg transition-all duration-200 group",
                  active
                    ? "text-primary font-semibold"
                    : isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground hover:text-accent"
                )}>
                  {active && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg" />
                  )}
                  <div className="relative flex items-center gap-2">
                    <Icon className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      active && "scale-110"
                    )} />
                    <span className="text-sm font-medium">{link.name}</span>
                  </div>
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </div>
              );

              if (isExternal) {
                return (
                  <a key={link.name} href={link.href}>
                    {linkContent}
                  </a>
                );
              }

              return (
                <Link key={link.name} to={link.href}>
                  {linkContent}
                </Link>
              );
            })}

            {/* Cities Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group",
                  isScrolled
                    ? "text-foreground hover:text-primary hover:bg-secondary"
                    : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                )}>
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Cities</span>
                  <ChevronDown className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-64 bg-card/95 backdrop-blur-xl border-border shadow-xl p-2"
              >
                {cities.map((city) => (
                  <DropdownMenuItem key={city.id} asChild>
                    <Link
                      to={`/city/${city.id}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-secondary transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{city.name}</span>
                        <span className="text-xs text-muted-foreground font-arabic">{city.nameAr}</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={cn(
                    "rounded-full transition-all duration-200",
                    isScrolled
                      ? "text-foreground hover:bg-secondary hover:text-primary"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-card/95 backdrop-blur-xl border-border shadow-xl"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.name)}
                    className="cursor-pointer hover:bg-secondary flex items-center gap-3"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {language === lang.name && (
                      <Sparkles className="h-4 w-4 ml-auto text-accent" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Link to="/sign-up">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  Register
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button 
                  variant={isScrolled ? "outline" : "outline-light"} 
                  size="sm" 
                  className="rounded-full px-6 font-semibold"
                >
                  Sign in
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={cn(
                    "lg:hidden rounded-full transition-all duration-200",
                    isScrolled
                      ? "text-foreground hover:bg-secondary"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 bg-gradient-to-b from-card to-card/95 backdrop-blur-xl border-l border-border p-0 overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-primary">
                            <span className="text-accent">T</span>ahwisa
                          </span>
                          <span className="text-[8px] text-muted-foreground">®</span>
                        </div>
                        <span className="text-xs font-arabic text-muted-foreground">تـــــــحويسة</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Discover Algeria's hidden gems</p>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-4 space-y-2">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      const active = isActive(link.href);
                      const isExternal = link.href.startsWith("#");
                      
                      const linkClassName = cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group relative",
                        active
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground hover:bg-secondary hover:text-primary"
                      );

                      const linkContent = (
                        <>
                          <div className={cn(
                            "p-2 rounded-lg transition-colors",
                            active 
                              ? "bg-primary/20 text-primary" 
                              : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          )}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="flex-1">{link.name}</span>
                          {active && (
                            <div className="w-2 h-2 bg-accent rounded-full" />
                          )}
                        </>
                      );

                      if (isExternal) {
                        return (
                          <a
                            key={link.name}
                            href={link.href}
                            className={linkClassName}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {linkContent}
                          </a>
                        );
                      }

                      return (
                        <Link
                          key={link.name}
                          to={link.href}
                          className={linkClassName}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {linkContent}
                        </Link>
                      );
                    })}

                    {/* Cities Section */}
                    <div className="pt-4 mt-4 border-t border-border">
                      <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Cities
                      </div>
                      <div className="space-y-2">
                        {cities.map((city) => (
                          <Link
                            key={city.id}
                            to={`/city/${city.id}`}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-secondary hover:text-primary transition-all duration-200 group"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col flex-1">
                              <span className="font-medium">{city.name}</span>
                              <span className="text-xs text-muted-foreground font-arabic">{city.nameAr}</span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>

                  {/* Mobile Auth Buttons */}
                  <div className="p-4 border-t border-border space-y-2">
                    <Link to="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="hero" size="lg" className="w-full rounded-xl font-semibold">
                        Register
                      </Button>
                    </Link>
                    <Link to="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" size="lg" className="w-full rounded-xl font-semibold">
                        Sign in
                      </Button>
                    </Link>
                  </div>

                  {/* Mobile Footer */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                      </a>
                      <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                      </a>
                      <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                      </a>
                      <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" />
                      </a>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      © {new Date().getFullYear()} Tahwisa. All rights reserved.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Social Icons - Fixed Left Side (Desktop Only) */}
      <div className="hidden lg:flex flex-col items-center gap-3 fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-2 p-2 bg-background/80 backdrop-blur-xl rounded-full border border-border/50 shadow-lg">
          <a 
            href="#" 
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 hover:scale-110"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 hover:scale-110"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 hover:scale-110"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 hover:scale-110"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
