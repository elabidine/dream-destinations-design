import { useState } from "react";
import { Menu, Globe, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
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
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Left: Hamburger Menu & Logo */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Menu className="h-7 w-7" />
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
            <a href="/" className="flex flex-col">
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl lg:text-4xl font-bold text-primary-foreground leading-none">
                  <span className="text-accent">T</span>ahwisa
                </span>
                <span className="text-[8px] text-primary-foreground/60">®</span>
              </div>
              <span className="text-sm font-arabic text-primary-foreground/70 -mt-1">تـــــــحويسة</span>
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

            <Button variant="hero" size="sm" className="hidden sm:flex rounded-full px-6">
              Register
            </Button>
            <Button variant="outline-light" size="sm" className="rounded-full px-6">
              Sign in
            </Button>
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
