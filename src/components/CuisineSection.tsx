import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import karantika from "@/assets/karantika.jpg";
import couscous from "@/assets/couscous.jpg";
import makroud from "@/assets/makroud.jpg";

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  region: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Karantika",
    description: "Golden chickpea cake, a beloved street food from Oran",
    image: karantika,
    region: "West",
  },
  {
    id: 2,
    name: "Couscous",
    description: "Traditional steamed semolina with lamb and vegetables",
    image: couscous,
    region: "National",
  },
  {
    id: 3,
    name: "Makroud",
    description: "Sweet date-filled semolina pastries dipped in honey",
    image: makroud,
    region: "Constantine",
  },
];

const CuisineSection = () => {
  return (
    <section className="py-20 bg-secondary/30" id="cuisine">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Taste of Algeria
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2">
                Find top <span className="text-primary">traditional</span> dishes
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Discover authentic Algerian cuisine from every region. From savory street food to 
                elaborate family recipes passed down through generations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Street Food
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Traditional
              </span>
              <span className="px-4 py-2 bg-foreground/10 text-foreground rounded-full text-sm font-medium">
                Desserts
              </span>
            </div>

            <Button variant="default" size="lg" className="group">
              Explore Cuisine
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Food Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {dishes.map((dish, index) => (
              <div
                key={dish.id}
                className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 cursor-pointer ${
                  index === 0 ? "sm:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-48" : "h-40"}`}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                      {dish.region}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-foreground">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
