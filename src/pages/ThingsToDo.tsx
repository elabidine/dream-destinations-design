import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mountain,
  Waves,
  Camera,
  UtensilsCrossed,
  Activity,
  Car,
  MapPin,
  Clock,
  Star,
  Calendar,
  Users,
  ArrowRight,
  Filter,
} from "lucide-react";
import sahara from "@/assets/sahara.jpg";
import zinaBeach from "@/assets/zina-beach.jpg";
import casbah from "@/assets/casbah.jpg";
import djemila from "@/assets/djemila.jpg";
import capIvi from "@/assets/cap-ivi.jpg";
import karantika from "@/assets/karantika.jpg";

interface Activity {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  rating: number;
  price: string;
  image: string;
  location: string;
  highlights: string[];
  icon: React.ElementType;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Sahara Desert Adventure",
    description: "Experience the magic of the Sahara with camel trekking, sandboarding, and overnight camping under the stars.",
    category: "Adventure",
    duration: "3 Days",
    difficulty: "Moderate",
    rating: 4.9,
    price: "From $299",
    image: sahara,
    location: "Tamanrasset",
    highlights: ["Camel Trekking", "Sandboarding", "Stargazing", "Desert Camping"],
    icon: Mountain,
  },
  {
    id: 2,
    title: "Mediterranean Beach Hopping",
    description: "Explore pristine beaches along Algeria's Mediterranean coast with crystal-clear waters and golden sands.",
    category: "Beach",
    duration: "Full Day",
    difficulty: "Easy",
    rating: 4.7,
    price: "From $89",
    image: zinaBeach,
    location: "Annaba, Bejaia",
    highlights: ["Swimming", "Snorkeling", "Beach Sports", "Sunset Views"],
    icon: Waves,
  },
  {
    id: 3,
    title: "Historic Casbah Tour",
    description: "Discover the ancient Casbah of Algiers, a UNESCO World Heritage site with narrow alleys and Ottoman architecture.",
    category: "Culture",
    duration: "Half Day",
    difficulty: "Easy",
    rating: 4.8,
    price: "From $45",
    image: casbah,
    location: "Algiers",
    highlights: ["Historic Sites", "Local Guides", "Photography", "Shopping"],
    icon: Camera,
  },
  {
    id: 4,
    title: "Roman Ruins Exploration",
    description: "Visit the well-preserved Roman ruins of Djemila, one of the best-preserved Roman sites in North Africa.",
    category: "History",
    duration: "Full Day",
    difficulty: "Easy",
    rating: 4.9,
    price: "From $75",
    image: djemila,
    location: "Djemila",
    highlights: ["UNESCO Site", "Archaeology", "Photography", "Guided Tours"],
    icon: Camera,
  },
  {
    id: 5,
    title: "Atlas Mountains Hiking",
    description: "Trek through the stunning Atlas Mountains with breathtaking views, traditional Berber villages, and diverse wildlife.",
    category: "Adventure",
    duration: "2 Days",
    difficulty: "Challenging",
    rating: 4.6,
    price: "From $199",
    image: capIvi,
    location: "Kabylie Region",
    highlights: ["Mountain Views", "Wildlife", "Village Visits", "Camping"],
    icon: Activity,
  },
  {
    id: 6,
    title: "Culinary Experience Tour",
    description: "Immerse yourself in Algerian cuisine with cooking classes, market visits, and traditional meal tastings.",
    category: "Food",
    duration: "Half Day",
    difficulty: "Easy",
    rating: 4.8,
    price: "From $65",
    image: karantika,
    location: "Algiers, Oran",
    highlights: ["Cooking Classes", "Market Tours", "Food Tastings", "Local Chefs"],
    icon: UtensilsCrossed,
  },
  {
    id: 7,
    title: "Coastal Road Trip",
    description: "Drive along the scenic Mediterranean coast with stops at charming fishing villages and hidden coves.",
    category: "Adventure",
    duration: "Full Day",
    difficulty: "Easy",
    rating: 4.7,
    price: "From $129",
    image: capIvi,
    location: "Coastal Route",
    highlights: ["Scenic Views", "Village Stops", "Local Markets", "Seafood"],
    icon: Car,
  },
  {
    id: 8,
    title: "Photography Safari",
    description: "Capture Algeria's diverse landscapes, from desert dunes to mountain peaks, with professional photography guidance.",
    category: "Photography",
    duration: "Full Day",
    difficulty: "Moderate",
    rating: 4.9,
    price: "From $159",
    image: sahara,
    location: "Multiple Locations",
    highlights: ["Golden Hour", "Landscape Photography", "Professional Guide", "Equipment Tips"],
    icon: Camera,
  },
];

const categories = ["All", "Adventure", "Beach", "Culture", "History", "Food", "Photography"];

const ThingsToDo = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredActivities =
    selectedCategory === "All"
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Things to Do in Algeria
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8">
              Discover unforgettable experiences, from desert adventures to cultural explorations. 
              Find the perfect activity for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 flex-1">
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

            {/* Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>

          {/* Additional Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Difficulty:</span>
                <div className="flex gap-2">
                  {["Easy", "Moderate", "Challenging"].map((difficulty) => (
                    <Button key={difficulty} variant="ghost" size="sm" className="h-8">
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Duration:</span>
                <div className="flex gap-2">
                  {["Half Day", "Full Day", "Multi-Day"].map((duration) => (
                    <Button key={duration} variant="ghost" size="sm" className="h-8">
                      {duration}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredActivities.length} {filteredActivities.length === 1 ? "activity" : "activities"}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <Link key={activity.id} to={`/activity/${activity.id}`} className="block">
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer card-hover h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                          <Icon className="h-3 w-3 mr-1" />
                          {activity.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-semibold">{activity.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {activity.title}
                        </CardTitle>
                        <span className="text-lg font-bold text-primary">{activity.price}</span>
                      </div>
                      <CardDescription className="line-clamp-2">{activity.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{activity.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{activity.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{activity.difficulty}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {activity.highlights.slice(0, 3).map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {activity.highlights.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{activity.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button className="w-full group/btn" variant="outline" onClick={(e) => e.preventDefault()}>
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Our travel experts can help you create a custom itinerary tailored to your interests and preferences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <Calendar className="h-5 w-5" />
                    Plan Your Trip
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ThingsToDo;

