import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import capIvi from "@/assets/cap-ivi.jpg";
import sahara from "@/assets/sahara.jpg";
import zinaBeach from "@/assets/zina-beach.jpg";
import casbah from "@/assets/casbah.jpg";
import djemila from "@/assets/djemila.jpg";

interface Destination {
  id: number;
  name: string;
  image: string;
  category: string;
}

const destinations: Destination[] = [
  { id: 1, name: "Cap Ivi", image: capIvi, category: "Coastal" },
  { id: 2, name: "Sahara", image: sahara, category: "Desert" },
  { id: 3, name: "Zina Beach", image: zinaBeach, category: "Beach" },
  { id: 4, name: "Casbah", image: casbah, category: "Historic" },
  { id: 5, name: "Djemila", image: djemila, category: "UNESCO" },
];

const DestinationsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden" id="destinations">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Top Destinations
            </h2>
            <p className="text-muted-foreground mt-2">
              Explore Algeria's most breathtaking locations
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollTo("left")}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollTo("right")}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="relative">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                className={`destination-card flex-shrink-0 w-72 lg:w-80 h-96 group ${
                  index === currentIndex ? "scale-105 z-10" : "scale-100"
                }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                    {dest.category}
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    {dest.name}
                  </h3>
                </div>
                {/* Progress bar */}
                {index === currentIndex && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/20 z-30">
                    <div className="h-full bg-accent animate-[slideRight_5s_linear_infinite]" style={{ width: "100%" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsCarousel;
