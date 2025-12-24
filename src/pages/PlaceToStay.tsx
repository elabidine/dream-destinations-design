import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Star,
  Wifi,
  Car,
  Coffee,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  ArrowRight,
  Filter,
  Calendar,
  Users,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import hotel from "@/assets/hotel.jpg";
import sahara from "@/assets/sahara.jpg";
import zinaBeach from "@/assets/zina-beach.jpg";
import casbah from "@/assets/casbah.jpg";

interface Hotel {
  id: number;
  name: string;
  description: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerNight: string;
  image: string;
  amenities: string[];
  category: string;
  roomTypes: {
    name: string;
    price: string;
    maxGuests: number;
  }[];
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "AZ Hotel & Spa",
    description: "Luxury hotel in the heart of Algiers with modern amenities, spa facilities, and stunning city views.",
    location: "Algiers",
    rating: 4.8,
    reviews: 234,
    pricePerNight: "$89",
    image: hotel,
    category: "Luxury",
    amenities: ["WiFi", "Parking", "Breakfast", "Spa", "Restaurant", "Pool"],
    roomTypes: [
      { name: "Standard Room", price: "$89", maxGuests: 2 },
      { name: "Deluxe Suite", price: "$150", maxGuests: 4 },
    ],
  },
  {
    id: 2,
    name: "Sahara Oasis Resort",
    description: "Unique desert resort offering traditional Berber hospitality with modern comforts in the heart of the Sahara.",
    location: "Tamanrasset",
    rating: 4.9,
    reviews: 189,
    pricePerNight: "$120",
    image: sahara,
    category: "Resort",
    amenities: ["WiFi", "Breakfast", "Desert Tours", "Restaurant", "Camping"],
    roomTypes: [
      { name: "Desert Tent", price: "$120", maxGuests: 2 },
      { name: "Luxury Suite", price: "$200", maxGuests: 4 },
    ],
  },
  {
    id: 3,
    name: "Mediterranean Grand",
    description: "Beachfront hotel with panoramic sea views, private beach access, and Mediterranean-inspired cuisine.",
    location: "Oran",
    rating: 4.7,
    reviews: 312,
    pricePerNight: "$75",
    image: zinaBeach,
    category: "Beachfront",
    amenities: ["WiFi", "Parking", "Breakfast", "Beach Access", "Pool", "Restaurant"],
    roomTypes: [
      { name: "Sea View Room", price: "$75", maxGuests: 2 },
      { name: "Beach Villa", price: "$180", maxGuests: 6 },
    ],
  },
  {
    id: 4,
    name: "Casbah Heritage Hotel",
    description: "Boutique hotel in the historic Casbah, combining traditional architecture with contemporary luxury.",
    location: "Algiers",
    rating: 4.6,
    reviews: 156,
    pricePerNight: "$95",
    image: casbah,
    category: "Boutique",
    amenities: ["WiFi", "Breakfast", "Historic Location", "Restaurant", "Terrace"],
    roomTypes: [
      { name: "Heritage Room", price: "$95", maxGuests: 2 },
      { name: "Rooftop Suite", price: "$160", maxGuests: 3 },
    ],
  },
  {
    id: 5,
    name: "Atlas Mountain Lodge",
    description: "Mountain retreat offering breathtaking views, hiking access, and cozy accommodations in the Kabylie region.",
    location: "Kabylie",
    rating: 4.8,
    reviews: 127,
    pricePerNight: "$110",
    image: hotel,
    category: "Mountain",
    amenities: ["WiFi", "Breakfast", "Hiking Tours", "Restaurant", "Fireplace"],
    roomTypes: [
      { name: "Mountain View", price: "$110", maxGuests: 2 },
      { name: "Family Lodge", price: "$190", maxGuests: 6 },
    ],
  },
  {
    id: 6,
    name: "Coastal Paradise Resort",
    description: "All-inclusive beach resort with multiple pools, water sports, and entertainment for the whole family.",
    location: "Annaba",
    rating: 4.7,
    reviews: 278,
    pricePerNight: "$130",
    image: zinaBeach,
    category: "Resort",
    amenities: ["WiFi", "All-Inclusive", "Pool", "Beach", "Spa", "Entertainment"],
    roomTypes: [
      { name: "Garden View", price: "$130", maxGuests: 2 },
      { name: "Ocean Suite", price: "$250", maxGuests: 4 },
    ],
  },
];

const categories = ["All", "Luxury", "Resort", "Beachfront", "Boutique", "Mountain"];
const amenities = ["WiFi", "Parking", "Breakfast", "Pool", "Spa", "Beach Access"];

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="h-4 w-4" />,
  Parking: <Car className="h-4 w-4" />,
  Breakfast: <Coffee className="h-4 w-4" />,
  Pool: <Waves className="h-4 w-4" />,
  Spa: <Dumbbell className="h-4 w-4" />,
  "Beach Access": <Waves className="h-4 w-4" />,
  Restaurant: <UtensilsCrossed className="h-4 w-4" />,
};

const PlaceToStay = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);

  const filteredHotels = hotels.filter((hotel) => {
    const categoryMatch = selectedCategory === "All" || hotel.category === selectedCategory;
    const amenityMatch =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) => hotel.amenities.includes(amenity));
    const priceMatch =
      parseInt(hotel.pricePerNight.replace("$", "")) >= priceRange[0] &&
      parseInt(hotel.pricePerNight.replace("$", "")) <= priceRange[1];
    return categoryMatch && amenityMatch && priceMatch;
  });

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

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
              Find Your Perfect Stay
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8">
              From luxury resorts to cozy mountain lodges, discover accommodations that match your style and budget.
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
              Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border space-y-4">
              {/* Amenities */}
              <div>
                <span className="text-sm font-medium text-muted-foreground mb-2 block">Amenities:</span>
                <div className="flex flex-wrap gap-2">
                  {amenities.map((amenity) => (
                    <Button
                      key={amenity}
                      variant={selectedAmenities.includes(amenity) ? "default" : "ghost"}
                      size="sm"
                      onClick={() => toggleAmenity(amenity)}
                      className="h-8 rounded-full"
                    >
                      {amenityIcons[amenity]}
                      <span className="ml-1">{amenity}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <span className="text-sm font-medium text-muted-foreground mb-2 block">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}/night
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredHotels.length} {filteredHotels.length === 1 ? "hotel" : "hotels"}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map((hotel) => (
              <Link key={hotel.id} to={`/hotel/${hotel.id}`} className="block">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer card-hover h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0">
                        {hotel.category}
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{hotel.rating}</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        <span className="text-xs text-muted-foreground">From</span>
                        <div className="text-lg font-bold text-primary">{hotel.pricePerNight}</div>
                        <span className="text-xs text-muted-foreground">/night</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-5">
                    <div className="mb-3">
                      <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{hotel.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {hotel.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.slice(0, 4).map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs flex items-center gap-1">
                          {amenityIcons[amenity]}
                          {amenity}
                        </Badge>
                      ))}
                      {hotel.amenities.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{hotel.amenities.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Reviews */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{hotel.rating}</span>
                        <span>({hotel.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full group/btn" variant="outline">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
                  Can't Find the Perfect Stay?
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Our travel experts can help you find the ideal accommodation based on your preferences, budget, and travel dates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <Calendar className="h-5 w-5" />
                    Get Personalized Recommendations
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

export default PlaceToStay;

