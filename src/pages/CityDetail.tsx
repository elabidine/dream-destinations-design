import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Star,
  ArrowRight,
  Activity,
  Hotel,
  Calendar,
  UtensilsCrossed,
  Mountain,
  Waves,
  Camera,
  Car,
} from "lucide-react";
import sahara from "@/assets/sahara.jpg";
import zinaBeach from "@/assets/zina-beach.jpg";
import casbah from "@/assets/casbah.jpg";
import djemila from "@/assets/djemila.jpg";
import capIvi from "@/assets/cap-ivi.jpg";
import karantika from "@/assets/karantika.jpg";
import couscous from "@/assets/couscous.jpg";
import hotel from "@/assets/hotel.jpg";

interface City {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  image: string;
  coordinates: { latitude: number; longitude: number };
}

const cities: City[] = [
  {
    id: "algiers",
    name: "Algiers",
    nameAr: "الجزائر",
    description: "The vibrant capital city, rich in history and culture",
    image: casbah,
    coordinates: { latitude: 36.7539, longitude: 3.0588 },
  },
  {
    id: "oran",
    name: "Oran",
    nameAr: "وهران",
    description: "Coastal city known for its beautiful beaches and vibrant nightlife",
    image: zinaBeach,
    coordinates: { latitude: 35.6971, longitude: -0.6337 },
  },
  {
    id: "mostaganem",
    name: "Mostaganem",
    nameAr: "مستغانم",
    description: "Charming coastal city with historic architecture and Mediterranean charm",
    image: capIvi,
    coordinates: { latitude: 35.9333, longitude: 0.0833 },
  },
];

// Sample data for each city
const cityActivities: Record<string, any[]> = {
  algiers: [
    {
      id: 1,
      title: "Historic Casbah Tour",
      description: "Discover the ancient Casbah of Algiers, a UNESCO World Heritage site",
      category: "Culture",
      rating: 4.8,
      price: "From $45",
      image: casbah,
      icon: Camera,
    },
    {
      id: 2,
      title: "Algiers Food Tour",
      description: "Explore local markets and taste authentic Algerian cuisine",
      category: "Food",
      rating: 4.7,
      price: "From $65",
      image: karantika,
      icon: UtensilsCrossed,
    },
  ],
  oran: [
    {
      id: 3,
      title: "Mediterranean Beach Hopping",
      description: "Explore pristine beaches along Oran's Mediterranean coast",
      category: "Beach",
      rating: 4.7,
      price: "From $89",
      image: zinaBeach,
      icon: Waves,
    },
    {
      id: 4,
      title: "Oran City Tour",
      description: "Discover the historic sites and vibrant culture of Oran",
      category: "Culture",
      rating: 4.6,
      price: "From $55",
      image: casbah,
      icon: Camera,
    },
  ],
  mostaganem: [
    {
      id: 5,
      title: "Coastal Road Trip",
      description: "Drive along the scenic Mediterranean coast with stops at charming villages",
      category: "Adventure",
      rating: 4.7,
      price: "From $129",
      image: capIvi,
      icon: Car,
    },
    {
      id: 6,
      title: "Mostaganem Beach Day",
      description: "Relax on beautiful beaches and enjoy water sports",
      category: "Beach",
      rating: 4.8,
      price: "From $75",
      image: zinaBeach,
      icon: Waves,
    },
  ],
};

const cityHotels: Record<string, any[]> = {
  algiers: [
    {
      id: 1,
      name: "AZ Hotel & Spa",
      description: "Luxury hotel in the heart of Algiers",
      rating: 4.8,
      pricePerNight: "$89",
      image: hotel,
      category: "Luxury",
    },
    {
      id: 4,
      name: "Casbah Heritage Hotel",
      description: "Boutique hotel in the historic Casbah",
      rating: 4.6,
      pricePerNight: "$95",
      image: casbah,
      category: "Boutique",
    },
  ],
  oran: [
    {
      id: 3,
      name: "Mediterranean Grand",
      description: "Beachfront hotel with panoramic sea views",
      rating: 4.7,
      pricePerNight: "$75",
      image: zinaBeach,
      category: "Beachfront",
    },
  ],
  mostaganem: [
    {
      id: 7,
      name: "Coastal Paradise Hotel",
      description: "Charming hotel overlooking the Mediterranean",
      rating: 4.7,
      pricePerNight: "$85",
      image: capIvi,
      category: "Beachfront",
    },
  ],
};

const cityEvents: Record<string, any[]> = {
  algiers: [
    {
      id: 1,
      title: "Algiers Cultural Festival",
      description: "Annual celebration of Algerian culture and arts",
      date: "2024-06-15",
      location: "Algiers",
      image: casbah,
    },
    {
      id: 2,
      title: "Casbah Heritage Walk",
      description: "Guided walking tour through historic Casbah",
      date: "2024-05-20",
      location: "Algiers",
      image: casbah,
    },
  ],
  oran: [
    {
      id: 3,
      title: "Oran Music Festival",
      description: "Celebration of traditional and modern Algerian music",
      date: "2024-07-10",
      location: "Oran",
      image: zinaBeach,
    },
  ],
  mostaganem: [
    {
      id: 4,
      title: "Mostaganem Beach Festival",
      description: "Summer beach festival with music and food",
      date: "2024-08-05",
      location: "Mostaganem",
      image: capIvi,
    },
  ],
};

const cityFood: Record<string, any[]> = {
  algiers: [
    {
      id: 1,
      name: "Karantika",
      nameAr: "كرانتيكا",
      description: "Golden chickpea cake, a beloved street food",
      category: "Street Food",
      image: karantika,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Couscous",
      nameAr: "كسكس",
      description: "Traditional steamed semolina with lamb and vegetables",
      category: "Traditional",
      image: couscous,
      rating: 4.9,
    },
  ],
  oran: [
    {
      id: 3,
      name: "Oran Seafood Special",
      nameAr: "مأكولات بحرية",
      description: "Fresh Mediterranean seafood dishes",
      category: "Seafood",
      image: zinaBeach,
      rating: 4.7,
    },
  ],
  mostaganem: [
    {
      id: 4,
      name: "Coastal Delicacies",
      nameAr: "أطباق ساحلية",
      description: "Traditional dishes from the coastal region",
      category: "Traditional",
      image: capIvi,
      rating: 4.6,
    },
  ],
};

const CityDetail = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [activeTab, setActiveTab] = useState("things-to-do");
  const city = cities.find((c) => c.id === cityId);

  if (!city) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
            <p className="text-muted-foreground mb-6">The city you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const activities = cityActivities[city.id] || [];
  const hotels = cityHotels[city.id] || [];
  const events = cityEvents[city.id] || [];
  const food = cityFood[city.id] || [];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {city.name}
            </h1>
            <p className="text-xl text-white/90 mb-2 font-arabic">{city.nameAr}</p>
            <p className="text-lg text-white/80">{city.description}</p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start h-auto p-1 bg-transparent">
              <TabsTrigger
                value="things-to-do"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Activity className="h-4 w-4 mr-2" />
                Things to Do
              </TabsTrigger>
              <TabsTrigger
                value="place-to-stay"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Hotel className="h-4 w-4 mr-2" />
                Place to Stay
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger
                value="food-drinks"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <UtensilsCrossed className="h-4 w-4 mr-2" />
                Food & Drinks
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Things to Do Tab */}
            <TabsContent value="things-to-do" className="mt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Things to Do in {city.name}</h2>
                <p className="text-muted-foreground">
                  Discover {activities.length} amazing {activities.length === 1 ? "activity" : "activities"} in {city.name}
                </p>
              </div>
              {activities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activities.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <Link key={activity.id} to={`/activity/${activity.id}`} className="block">
                        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer card-hover h-full">
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
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-semibold">{activity.rating}</span>
                            </div>
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                              {activity.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {activity.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-primary">{activity.price}</span>
                              <Button variant="ghost" size="sm">
                                View Details
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No activities found for this city yet.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Place to Stay Tab */}
            <TabsContent value="place-to-stay" className="mt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Places to Stay in {city.name}</h2>
                <p className="text-muted-foreground">
                  Find {hotels.length} {hotels.length === 1 ? "hotel" : "hotels"} in {city.name}
                </p>
              </div>
              {hotels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hotels.map((hotel) => (
                    <Link key={hotel.id} to={`/hotel/${hotel.id}`} className="block">
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer card-hover h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                              {hotel.category}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                              <div className="text-lg font-bold text-primary">{hotel.pricePerNight}</div>
                              <div className="text-xs text-muted-foreground">/night</div>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                            {hotel.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {hotel.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{hotel.rating}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              View Details
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No hotels found for this city yet.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Events in {city.name}</h2>
                <p className="text-muted-foreground">
                  Discover {events.length} upcoming {events.length === 1 ? "event" : "events"} in {city.name}
                </p>
              </div>
              {events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event) => (
                    <Card key={event.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer card-hover h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="bg-accent text-accent-foreground mb-2">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No events found for this city yet.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Food & Drinks Tab */}
            <TabsContent value="food-drinks" className="mt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Food & Drinks in {city.name}</h2>
                <p className="text-muted-foreground">
                  Explore {food.length} traditional {food.length === 1 ? "dish" : "dishes"} from {city.name}
                </p>
              </div>
              {food.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {food.map((dish) => (
                    <Card key={dish.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer card-hover h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                            {dish.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{dish.rating}</span>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          {dish.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-arabic mb-2">{dish.nameAr}</p>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {dish.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No dishes found for this city yet.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CityDetail;

