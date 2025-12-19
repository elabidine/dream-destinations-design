import { useState } from "react";
import { Menu, Globe, Facebook, Instagram, Twitter, Youtube, X } from "lucide-react";
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
    { name: "Destinations", href: "#destinations" },
    { name: "Experiences", href: "#experiences" },
    { name: "Cuisine", href: "#cuisine" },
    { name: "Hotels", href: "#hotels" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Hamburger Menu & Logo */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-card">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">Tahwisa</span>
                  <span className="text-sm font-arabic text-muted-foreground">تحويسة</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <span className="text-2xl lg:text-3xl font-bold text-primary-foreground">
              <span className="text-accent">T</span>ahwisa
            </span>
            <span className="text-xs lg:text-sm font-arabic text-primary-foreground/80 mt-1">تحويسة</span>
          </a>
        </div>

        {/* Left Social Icons */}
        <div className="hidden md:flex items-center gap-3 absolute left-4 bottom-4 lg:bottom-auto lg:top-20">
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Youtube className="h-5 w-5" />
          </a>
        </div>

        {/* Right: Language & Auth */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <span className="hidden sm:inline">{language}</span>
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

          <Button variant="hero" size="sm" className="hidden sm:flex">
            Register
          </Button>
          <Button variant="outline-light" size="sm">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
