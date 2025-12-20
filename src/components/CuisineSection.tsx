import { useState } from "react";
import { ArrowRight, UtensilsCrossed, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import karantika from "@/assets/karantika.jpg";
import couscous from "@/assets/couscous.jpg";
import makroud from "@/assets/makroud.jpg";

interface Dish {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  image: string;
  region: string;
  category: string;
  preparationTime: string;
  difficulty: string;
  rating: number;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Karantika",
    nameAr: "كرانتيكا",
    description: "Golden chickpea cake, a beloved street food from Oran. Crispy on the outside, creamy on the inside, served with harissa and olive oil.",
    image: karantika,
    region: "Oran",
    category: "Street Food",
    preparationTime: "30 min",
    difficulty: "Easy",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Couscous",
    nameAr: "كسكس",
    description: "Traditional steamed semolina with tender lamb, seasonal vegetables, and aromatic broth. A staple dish served on special occasions.",
    image: couscous,
    region: "National",
    category: "Traditional",
    preparationTime: "2 hours",
    difficulty: "Moderate",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Makroud",
    nameAr: "مقروض",
    description: "Sweet date-filled semolina pastries dipped in honey. A traditional dessert from Constantine, perfect with mint tea.",
    image: makroud,
    region: "Constantine",
    category: "Dessert",
    preparationTime: "45 min",
    difficulty: "Moderate",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Chorba",
    nameAr: "شربة",
    description: "Hearty tomato-based soup with lamb, vegetables, and vermicelli. A comforting dish enjoyed throughout Algeria.",
    image: couscous,
    region: "National",
    category: "Traditional",
    preparationTime: "1 hour",
    difficulty: "Easy",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Brik",
    nameAr: "بريك",
    description: "Crispy fried pastry filled with egg, tuna, and herbs. A popular appetizer from the coastal regions.",
    image: karantika,
    region: "Algiers",
    category: "Street Food",
    preparationTime: "20 min",
    difficulty: "Easy",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Tajine Zitoun",
    nameAr: "طاجين الزيتون",
    description: "Slow-cooked chicken with green olives, preserved lemons, and aromatic spices. A signature dish from the north.",
    image: couscous,
    region: "Algiers",
    category: "Traditional",
    preparationTime: "1.5 hours",
    difficulty: "Moderate",
    rating: 4.9,
  },
];

const categories = ["All", "Street Food", "Traditional", "Dessert"];

const CuisineSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <section className="py-20 bg-background" id="cuisine">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <UtensilsCrossed className="h-4 w-4" />
            <span>Taste of Algeria</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Discover <span className="text-primary">Traditional</span> Dishes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore authentic Algerian cuisine from every region. From savory street food to 
            elaborate family recipes passed down through generations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredDishes.map((dish) => (
            <Card
              key={dish.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0">
                    {dish.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border-0">
                    <MapPin className="h-3 w-3 mr-1" />
                    {dish.region}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{dish.rating}</span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-5">
                <div className="mb-3">
                  <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-arabic">{dish.nameAr}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{dish.preparationTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UtensilsCrossed className="h-3 w-3" />
                    <span>{dish.difficulty}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Button variant="outline" className="w-full group/btn" size="sm">
                  View Recipe
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="default" size="lg" className="group">
            Explore All Dishes
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
