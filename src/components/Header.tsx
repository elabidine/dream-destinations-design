import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Globe, Facebook, Instagram, Twitter, Youtube, Home, Activity, Hotel, UtensilsCrossed, Newspaper, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [language, setLanguage] = useState("English (US)");

  const languages = [
    { code: "en", name: "English (US)" },
    { code: "fr", name: "French (FR)" },
    { code: "ar", name: "Arabic (AR)" },
    { code: "tz", name: "Amazigh (AG)" },
  ];

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Things to do", href: "/things-to-do", icon: Activity },
    { name: "Place to stay", href: "#place-to-stay", icon: Hotel },
    { name: "Food & drinks", href: "#food-drinks", icon: UtensilsCrossed },
    { name: "News and events", href: "#news-events", icon: Newspaper },
    { name: "About", href: "#about", icon: Info },
    { name: "Contacts", href: "#contacts", icon: Phone },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Left: Menu Button & Logo */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-card border-r border-border p-0">
                <div className="flex flex-col h-full">
                  {/* Sidebar Header */}
                  <div className="flex flex-col gap-2 p-6 border-b border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">Tahwisa</span>
                      <span className="text-sm font-arabic text-muted-foreground">تحويسة</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Discover Algeria's hidden gems</p>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      const isExternal = link.href.startsWith("#");
                      if (isExternal) {
                        return (
                          <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary hover:text-primary transition-all duration-200 font-medium group"
                          >
                            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span>{link.name}</span>
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary hover:text-primary transition-all duration-200 font-medium group"
                        >
                          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Sidebar Footer */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>© {new Date().getFullYear()} Tahwisa</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <a href="/" className="flex flex-col">
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-foreground leading-none">
                  <span className="text-accent">T</span>ahwisa
                </span>
                <span className="text-[8px] text-primary-foreground/60">®</span>
              </div>
              <span className="text-xs lg:text-sm font-arabic text-primary-foreground/70 -mt-1">تـــــــحويسة</span>
            </a>
          </div>

          {/* Right: Language & Auth */}
          <div className="flex items-center gap-2 lg:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 gap-2 px-3">
                  <span className="hidden sm:inline text-sm">{language}</span>
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.name)}
                    className="cursor-pointer hover:bg-secondary"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/sign-up">
              <Button variant="hero" size="sm" className="hidden sm:flex rounded-full px-6">
                Register
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button variant="outline-light" size="sm" className="rounded-full px-6">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons - Fixed Left Side */}
      <div className="hidden md:flex flex-col items-center gap-4 fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 hover:bg-primary-foreground/10 rounded-full">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 hover:bg-primary-foreground/10 rounded-full">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 hover:bg-primary-foreground/10 rounded-full">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 hover:bg-primary-foreground/10 rounded-full">
          <Youtube className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
};

export default Header;
