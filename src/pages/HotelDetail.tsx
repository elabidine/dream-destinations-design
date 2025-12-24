import { useParams, Link, useNavigate } from "react-router-dom";
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
  ArrowLeft,
  Check,
  Share2,
  Heart,
  Phone,
  Mail,
  Globe,
  Bed,
  Bath,
  Users,
  Calendar,
  Clock,
  Shield,
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
  fullDescription: string;
  location: string;
  address: string;
  rating: number;
  reviews: number;
  pricePerNight: string;
  image: string;
  category: string;
  amenities: string[];
  roomTypes: {
    id: number;
    name: string;
    description: string;
    price: string;
    maxGuests: number;
    bedType: string;
    size: string;
    amenities: string[];
  }[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    pets: boolean;
    smoking: boolean;
  };
  gallery: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "AZ Hotel & Spa",
    description: "Luxury hotel in the heart of Algiers with modern amenities, spa facilities, and stunning city views.",
    fullDescription: "Experience unparalleled luxury at AZ Hotel & Spa, located in the vibrant heart of Algiers. Our 5-star hotel combines contemporary elegance with traditional Algerian hospitality. Each room is meticulously designed to provide maximum comfort, featuring modern amenities, plush furnishings, and breathtaking views of the city or Mediterranean Sea. Our world-class spa offers a sanctuary of relaxation, while our award-winning restaurants serve both international and local cuisine. Perfect for both business and leisure travelers.",
    location: "Algiers",
    address: "123 Boulevard Che Guevara, Algiers 16000",
    rating: 4.8,
    reviews: 234,
    pricePerNight: "$89",
    image: hotel,
    category: "Luxury",
    amenities: ["WiFi", "Parking", "Breakfast", "Spa", "Restaurant", "Pool", "Gym", "Room Service", "Concierge"],
    roomTypes: [
      {
        id: 1,
        name: "Standard Room",
        description: "Comfortable room with city view, perfect for business or leisure travelers.",
        price: "$89",
        maxGuests: 2,
        bedType: "Queen",
        size: "25 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Mini Bar"],
      },
      {
        id: 2,
        name: "Deluxe Suite",
        description: "Spacious suite with separate living area and panoramic city views.",
        price: "$150",
        maxGuests: 4,
        bedType: "King",
        size: "45 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Mini Bar", "Balcony", "Living Area"],
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 24 hours before check-in",
      pets: false,
      smoking: false,
    },
    gallery: [hotel, hotel, hotel, hotel],
    coordinates: {
      latitude: 36.7539,
      longitude: 3.0588,
    },
  },
  {
    id: 2,
    name: "Sahara Oasis Resort",
    description: "Unique desert resort offering traditional Berber hospitality with modern comforts in the heart of the Sahara.",
    fullDescription: "Immerse yourself in the magic of the Sahara at our unique desert resort. Experience authentic Berber hospitality while enjoying modern amenities. Our traditional tents and luxury suites offer an unforgettable desert experience. Wake up to stunning sunrise views over the dunes, enjoy traditional meals under the stars, and explore the desert with our expert guides. This is more than a hotel—it's a journey into the heart of Algerian culture.",
    location: "Tamanrasset",
    address: "Desert Road, Tamanrasset",
    rating: 4.9,
    reviews: 189,
    pricePerNight: "$120",
    image: sahara,
    category: "Resort",
    amenities: ["WiFi", "Breakfast", "Desert Tours", "Restaurant", "Camping", "Stargazing"],
    roomTypes: [
      {
        id: 1,
        name: "Desert Tent",
        description: "Traditional Berber tent with modern amenities, offering authentic desert experience.",
        price: "$120",
        maxGuests: 2,
        bedType: "Double",
        size: "20 m²",
        amenities: ["WiFi", "Private Bathroom", "Desert View"],
      },
      {
        id: 2,
        name: "Luxury Suite",
        description: "Spacious suite with panoramic desert views and private terrace.",
        price: "$200",
        maxGuests: 4,
        bedType: "King",
        size: "50 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Terrace", "Desert View"],
      },
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      cancellation: "Free cancellation up to 48 hours before check-in",
      pets: false,
      smoking: false,
    },
    gallery: [sahara, sahara, sahara, sahara],
    coordinates: {
      latitude: 22.7850,
      longitude: 5.5228,
    },
  },
  {
    id: 3,
    name: "Mediterranean Grand",
    description: "Beachfront hotel with panoramic sea views, private beach access, and Mediterranean-inspired cuisine.",
    fullDescription: "Located directly on the Mediterranean coast, Mediterranean Grand offers an idyllic beachfront experience. Our hotel features direct access to a private beach, infinity pools overlooking the sea, and rooms with stunning ocean views. Enjoy fresh seafood at our beachfront restaurant, relax at our spa, or take part in various water sports. The perfect destination for those seeking sun, sea, and relaxation.",
    location: "Oran",
    address: "Beach Road, Oran 31000",
    rating: 4.7,
    reviews: 312,
    pricePerNight: "$75",
    image: zinaBeach,
    category: "Beachfront",
    amenities: ["WiFi", "Parking", "Breakfast", "Beach Access", "Pool", "Restaurant", "Spa", "Water Sports"],
    roomTypes: [
      {
        id: 1,
        name: "Sea View Room",
        description: "Comfortable room with direct sea view and balcony.",
        price: "$75",
        maxGuests: 2,
        bedType: "Queen",
        size: "28 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Balcony", "Sea View"],
      },
      {
        id: 2,
        name: "Beach Villa",
        description: "Luxury villa with private beach access and multiple bedrooms.",
        price: "$180",
        maxGuests: 6,
        bedType: "Multiple",
        size: "120 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Kitchen", "Private Beach Access", "Terrace"],
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 24 hours before check-in",
      pets: true,
      smoking: false,
    },
    gallery: [zinaBeach, zinaBeach, zinaBeach, zinaBeach],
    coordinates: {
      latitude: 35.6971,
      longitude: -0.6337,
    },
  },
  {
    id: 4,
    name: "Casbah Heritage Hotel",
    description: "Boutique hotel in the historic Casbah, combining traditional architecture with contemporary luxury.",
    fullDescription: "Step into history at Casbah Heritage Hotel, a beautifully restored boutique hotel in the heart of Algiers' historic Casbah. Our hotel preserves the authentic Ottoman-era architecture while providing modern luxury amenities. Each room is uniquely designed, featuring traditional elements like ornate tiles and carved woodwork. Enjoy rooftop dining with panoramic city views, explore the historic neighborhood, and experience the rich culture of old Algiers.",
    location: "Algiers",
    address: "Rue de la Casbah, Algiers 16000",
    rating: 4.6,
    reviews: 156,
    pricePerNight: "$95",
    image: casbah,
    category: "Boutique",
    amenities: ["WiFi", "Breakfast", "Historic Location", "Restaurant", "Terrace", "Cultural Tours"],
    roomTypes: [
      {
        id: 1,
        name: "Heritage Room",
        description: "Authentically decorated room with traditional architecture and modern amenities.",
        price: "$95",
        maxGuests: 2,
        bedType: "Queen",
        size: "22 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Historic Decor"],
      },
      {
        id: 2,
        name: "Rooftop Suite",
        description: "Luxury suite with private rooftop terrace and panoramic city views.",
        price: "$160",
        maxGuests: 3,
        bedType: "King",
        size: "40 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Private Terrace", "City View"],
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 48 hours before check-in",
      pets: false,
      smoking: false,
    },
    gallery: [casbah, casbah, casbah, casbah],
    coordinates: {
      latitude: 36.7849,
      longitude: 3.0608,
    },
  },
  {
    id: 5,
    name: "Atlas Mountain Lodge",
    description: "Mountain retreat offering breathtaking views, hiking access, and cozy accommodations in the Kabylie region.",
    fullDescription: "Escape to the mountains at Atlas Mountain Lodge, nestled in the stunning Kabylie region. Our lodge offers a perfect blend of rustic charm and modern comfort. Wake up to breathtaking mountain vistas, enjoy fresh mountain air, and explore numerous hiking trails right from our doorstep. Our cozy rooms feature fireplaces, and our restaurant serves hearty mountain cuisine. Perfect for nature lovers and adventure seekers.",
    location: "Kabylie",
    address: "Mountain Road, Kabylie Region",
    rating: 4.8,
    reviews: 127,
    pricePerNight: "$110",
    image: hotel,
    category: "Mountain",
    amenities: ["WiFi", "Breakfast", "Hiking Tours", "Restaurant", "Fireplace", "Mountain Views"],
    roomTypes: [
      {
        id: 1,
        name: "Mountain View",
        description: "Cozy room with fireplace and stunning mountain views.",
        price: "$110",
        maxGuests: 2,
        bedType: "Queen",
        size: "24 m²",
        amenities: ["WiFi", "TV", "Fireplace", "Private Bathroom", "Mountain View"],
      },
      {
        id: 2,
        name: "Family Lodge",
        description: "Spacious family accommodation with multiple bedrooms and living area.",
        price: "$190",
        maxGuests: 6,
        bedType: "Multiple",
        size: "80 m²",
        amenities: ["WiFi", "TV", "Fireplace", "Private Bathroom", "Kitchen", "Living Area", "Mountain View"],
      },
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 48 hours before check-in",
      pets: true,
      smoking: false,
    },
    gallery: [hotel, hotel, hotel, hotel],
    coordinates: {
      latitude: 36.7539,
      longitude: 4.0567,
    },
  },
  {
    id: 6,
    name: "Coastal Paradise Resort",
    description: "All-inclusive beach resort with multiple pools, water sports, and entertainment for the whole family.",
    fullDescription: "The ultimate family destination, Coastal Paradise Resort offers everything you need for an unforgettable vacation. Our all-inclusive resort features multiple swimming pools, a private beach, water sports facilities, kids' club, and evening entertainment. With several restaurants serving international and local cuisine, you'll never go hungry. Perfect for families, couples, and groups looking for a complete vacation experience.",
    location: "Annaba",
    address: "Coastal Boulevard, Annaba 23000",
    rating: 4.7,
    reviews: 278,
    pricePerNight: "$130",
    image: zinaBeach,
    category: "Resort",
    amenities: ["WiFi", "All-Inclusive", "Pool", "Beach", "Spa", "Entertainment", "Kids Club", "Water Sports"],
    roomTypes: [
      {
        id: 1,
        name: "Garden View",
        description: "Comfortable room with garden view, perfect for families.",
        price: "$130",
        maxGuests: 2,
        bedType: "Queen",
        size: "30 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Mini Bar"],
      },
      {
        id: 2,
        name: "Ocean Suite",
        description: "Luxury suite with ocean view, private balcony, and premium amenities.",
        price: "$250",
        maxGuests: 4,
        bedType: "King",
        size: "55 m²",
        amenities: ["WiFi", "TV", "AC", "Private Bathroom", "Mini Bar", "Balcony", "Ocean View", "Living Area"],
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 24 hours before check-in",
      pets: false,
      smoking: false,
    },
    gallery: [zinaBeach, zinaBeach, zinaBeach, zinaBeach],
    coordinates: {
      latitude: 36.8989,
      longitude: 7.7567,
    },
  },
];

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hotel = hotels.find((h) => h.id === parseInt(id || "0"));

  if (!hotel) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hotel Not Found</h1>
            <p className="text-muted-foreground mb-6">The hotel you're looking for doesn't exist.</p>
            <Link to="/place-to-stay">
              <Button>Back to Hotels</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedHotels = hotels
    .filter((h) => h.category === hotel.category && h.id !== hotel.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                {hotel.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {hotel.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <MapPin className="h-5 w-5" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{hotel.rating}</span>
                <span className="text-white/70">({hotel.reviews} reviews)</span>
              </div>
              <div className="text-lg font-semibold">
                From {hotel.pricePerNight}/night
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About This Hotel</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {hotel.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity, idx) => {
                      const IconComponent = amenityIcons[amenity] || Check;
                      return (
                        <div key={idx} className="flex items-center gap-2">
                          <IconComponent className="h-5 w-5 text-primary" />
                          <span className="text-muted-foreground">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Room Types */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Room Types</h2>
                  <div className="space-y-6">
                    {hotel.roomTypes.map((room) => (
                      <div key={room.id} className="border-l-2 border-primary pl-4 pb-4 last:pb-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{room.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{room.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-primary">{room.price}</div>
                            <div className="text-xs text-muted-foreground">per night</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>Up to {room.maxGuests} guests</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bed className="h-4 w-4" />
                            <span>{room.bedType}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Square className="h-4 w-4" />
                            <span>{room.size}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {room.amenities.map((amenity, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Policies */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Hotel Policies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Check-in / Check-out</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Check-in: {hotel.policies.checkIn} | Check-out: {hotel.policies.checkOut}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Cancellation</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{hotel.policies.cancellation}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Pets</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {hotel.policies.pets ? "Pets allowed" : "Pets not allowed"}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Smoking</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {hotel.policies.smoking ? "Smoking allowed" : "Non-smoking property"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {hotel.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img
                          src={img}
                          alt={`${hotel.name} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {hotel.pricePerNight}
                      <span className="text-base font-normal text-muted-foreground">/night</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Average price per night</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{hotel.rating}</span>
                        <span className="text-muted-foreground text-sm">({hotel.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">{hotel.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <Badge>{hotel.category}</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Calendar className="h-5 w-5 mr-2" />
                      Check Availability
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Location</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{hotel.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    View on Map
                  </Button>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Hotel
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Hotel
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Hotels */}
      {relatedHotels.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Similar Hotels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedHotels.map((related) => (
                <Link key={related.id} to={`/hotel/${related.id}`} className="block">
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer card-hover h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                          {related.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {related.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">{related.pricePerNight}/night</span>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi,
  Parking: Car,
  Breakfast: Coffee,
  Pool: Waves,
  Spa: Dumbbell,
  "Beach Access": Waves,
  Restaurant: UtensilsCrossed,
  Gym: Dumbbell,
  "Room Service": UtensilsCrossed,
  Concierge: Check,
  "Desert Tours": MapPin,
  Camping: MapPin,
  Stargazing: Star,
  "Historic Location": MapPin,
  Terrace: Waves,
  "Cultural Tours": MapPin,
  Fireplace: Check,
  "Mountain Views": MapPin,
  "All-Inclusive": Check,
  Entertainment: Check,
  "Kids Club": Users,
  "Water Sports": Waves,
};

export default HotelDetail;

