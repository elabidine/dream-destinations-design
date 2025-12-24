import { Link } from "react-router-dom";
import { Search, Star, MapPin, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import hotel from "@/assets/hotel.jpg";

const hotels = [
  {
    id: 1,
    name: "AZ Hotel & Spa",
    location: "Algiers",
    rating: 4.8,
    price: "From $89/night",
    amenities: ["wifi", "parking", "breakfast"],
  },
  {
    id: 2,
    name: "Sahara Oasis Resort",
    location: "Tamanrasset",
    rating: 4.9,
    price: "From $120/night",
    amenities: ["wifi", "breakfast"],
  },
  {
    id: 3,
    name: "Mediterranean Grand",
    location: "Oran",
    rating: 4.7,
    price: "From $75/night",
    amenities: ["wifi", "parking", "breakfast"],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="h-4 w-4" />,
  parking: <Car className="h-4 w-4" />,
  breakfast: <Coffee className="h-4 w-4" />,
};

const HotelsSection = () => {
  return (
    <section className="py-20 bg-background" id="hotels">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Featured Card */}
          <div className="lg:col-span-1">
            <div className="relative h-96 lg:h-full rounded-3xl overflow-hidden group">
              <img
                src={hotel}
                alt="Featured Hotel"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-accent font-medium text-sm">Fill your desire with a</p>
                    <h3 className="text-3xl font-bold text-primary-foreground">
                      Suitable Hotel
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-xl p-3">
                    <Input
                      placeholder="Search hotels..."
                      className="border-0 bg-transparent focus-visible:ring-0"
                    />
                    <Button size="icon" variant="default" className="rounded-lg shrink-0">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Top Rated Hotels
              </h2>
              <p className="text-muted-foreground mt-2">
                Handpicked accommodations for every budget and style
              </p>
            </div>

            {/* Hotel Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-card border border-border rounded-2xl p-4 hover:shadow-card transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {hotel.name}
                      </h4>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                        <MapPin className="h-3 w-3" />
                        {hotel.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    {hotel.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="p-2 bg-secondary rounded-lg text-muted-foreground"
                      >
                        {amenityIcons[amenity]}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{hotel.price}</span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/place-to-stay">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View All Hotels
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
