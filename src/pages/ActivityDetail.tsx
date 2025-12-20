import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowLeft,
  Check,
  Share2,
  Heart,
  Phone,
  Mail,
  Globe,
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
  fullDescription: string;
  category: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  rating: number;
  reviews: number;
  price: string;
  image: string;
  location: string;
  highlights: string[];
  icon: React.ElementType;
  whatIncluded: string[];
  whatToBring: string[];
  itinerary: { day: string; activities: string[] }[];
  gallery: string[];
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Sahara Desert Adventure",
    description: "Experience the magic of the Sahara with camel trekking, sandboarding, and overnight camping under the stars.",
    fullDescription: "Embark on an unforgettable journey into the heart of the Sahara Desert. This 3-day adventure takes you through stunning sand dunes, ancient oases, and traditional Berber camps. Experience the silence and vastness of the desert, enjoy traditional meals under the stars, and learn about the rich culture of the Tuareg people. Our expert guides will ensure your safety while providing fascinating insights into desert life.",
    category: "Adventure",
    duration: "3 Days",
    difficulty: "Moderate",
    rating: 4.9,
    reviews: 127,
    price: "From $299",
    image: sahara,
    location: "Tamanrasset",
    highlights: ["Camel Trekking", "Sandboarding", "Stargazing", "Desert Camping"],
    icon: Mountain,
    whatIncluded: [
      "Professional desert guide",
      "Camel trekking experience",
      "All camping equipment",
      "Traditional meals (breakfast, lunch, dinner)",
      "Transportation to/from Tamanrasset",
      "Sandboarding equipment",
      "Stargazing session with telescope",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Sun protection (hat, sunscreen, sunglasses)",
      "Warm clothing for evenings",
      "Camera for photos",
      "Personal toiletries",
      "Water bottle",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Early morning departure from Tamanrasset",
          "Arrive at desert camp and meet your guides",
          "Camel trekking through sand dunes",
          "Traditional lunch at oasis",
          "Evening sandboarding session",
          "Sunset dinner and stargazing",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Sunrise breakfast",
          "Full day desert exploration",
          "Visit to traditional Berber village",
          "Lunch in the desert",
          "Afternoon camel trekking",
          "Evening campfire and traditional music",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Morning desert walk",
          "Final camel trekking session",
          "Traditional farewell lunch",
          "Return to Tamanrasset",
          "Transfer to hotel or airport",
        ],
      },
    ],
    gallery: [sahara, sahara, sahara],
  },
  {
    id: 2,
    title: "Mediterranean Beach Hopping",
    description: "Explore pristine beaches along Algeria's Mediterranean coast with crystal-clear waters and golden sands.",
    fullDescription: "Discover the stunning Mediterranean coastline of Algeria on this full-day beach hopping adventure. Visit multiple pristine beaches, each with its unique charm. Enjoy swimming in crystal-clear waters, snorkeling to see marine life, and relaxing on golden sandy beaches. Our tour includes visits to hidden coves, beachside restaurants, and opportunities to try water sports.",
    category: "Beach",
    duration: "Full Day",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 89,
    price: "From $89",
    image: zinaBeach,
    location: "Annaba, Bejaia",
    highlights: ["Swimming", "Snorkeling", "Beach Sports", "Sunset Views"],
    icon: Waves,
    whatIncluded: [
      "Professional guide",
      "Transportation between beaches",
      "Snorkeling equipment",
      "Beach towels",
      "Lunch at beachside restaurant",
      "Water and refreshments",
    ],
    whatToBring: [
      "Swimwear",
      "Beach towel (optional)",
      "Sunscreen",
      "Waterproof camera",
      "Comfortable sandals",
    ],
    itinerary: [
      {
        day: "Full Day",
        activities: [
          "Morning pickup from hotel",
          "Visit first beach - swimming and relaxation",
          "Snorkeling session with equipment provided",
          "Lunch at beachside restaurant",
          "Afternoon visit to second beach",
          "Beach sports and activities",
          "Sunset viewing",
          "Return to hotel",
        ],
      },
    ],
    gallery: [zinaBeach, zinaBeach, zinaBeach],
  },
  {
    id: 3,
    title: "Historic Casbah Tour",
    description: "Discover the ancient Casbah of Algiers, a UNESCO World Heritage site with narrow alleys and Ottoman architecture.",
    fullDescription: "Step back in time as you explore the historic Casbah of Algiers, a UNESCO World Heritage site dating back to the 17th century. Wander through narrow, winding alleys, admire Ottoman-era architecture, and learn about the rich history of this ancient quarter. Our knowledgeable guides will share stories of the Casbah's past, from its role as a trading hub to its significance in Algerian history.",
    category: "Culture",
    duration: "Half Day",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 156,
    price: "From $45",
    image: casbah,
    location: "Algiers",
    highlights: ["Historic Sites", "Local Guides", "Photography", "Shopping"],
    icon: Camera,
    whatIncluded: [
      "Professional local guide",
      "Entrance fees to historic sites",
      "Traditional tea break",
      "Map and information booklet",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Camera",
      "Cash for souvenirs",
      "Water bottle",
    ],
    itinerary: [
      {
        day: "Half Day",
        activities: [
          "Meet at Casbah entrance",
          "Walking tour of historic alleys",
          "Visit to Ottoman palaces",
          "Traditional architecture viewing",
          "Tea break at local café",
          "Shopping at traditional markets",
          "Photo opportunities",
        ],
      },
    ],
    gallery: [casbah, casbah, casbah],
  },
  {
    id: 4,
    title: "Roman Ruins Exploration",
    description: "Visit the well-preserved Roman ruins of Djemila, one of the best-preserved Roman sites in North Africa.",
    fullDescription: "Explore the magnificent Roman ruins of Djemila, a UNESCO World Heritage site that showcases some of the best-preserved Roman architecture in North Africa. Walk through ancient forums, temples, and theaters that date back to the 1st century AD. Learn about the history of Roman Algeria and see impressive mosaics, columns, and structures that have stood the test of time.",
    category: "History",
    duration: "Full Day",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 203,
    price: "From $75",
    image: djemila,
    location: "Djemila",
    highlights: ["UNESCO Site", "Archaeology", "Photography", "Guided Tours"],
    icon: Camera,
    whatIncluded: [
      "Entrance fees",
      "Professional archaeologist guide",
      "Transportation",
      "Lunch",
      "Information materials",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Camera",
      "Hat and sunscreen",
      "Water bottle",
    ],
    itinerary: [
      {
        day: "Full Day",
        activities: [
          "Morning departure",
          "Arrival at Djemila",
          "Guided tour of Roman forum",
          "Visit to ancient temples",
          "Lunch break",
          "Explore Roman theater",
          "Mosaic viewing",
          "Return journey",
        ],
      },
    ],
    gallery: [djemila, djemila, djemila],
  },
  {
    id: 5,
    title: "Atlas Mountains Hiking",
    description: "Trek through the stunning Atlas Mountains with breathtaking views, traditional Berber villages, and diverse wildlife.",
    fullDescription: "Embark on a challenging 2-day hiking adventure through the Atlas Mountains. Experience breathtaking panoramic views, encounter diverse wildlife, and visit traditional Berber villages where you'll learn about local culture and traditions. This trek is perfect for adventure enthusiasts looking to explore Algeria's natural beauty and connect with local communities.",
    category: "Adventure",
    duration: "2 Days",
    difficulty: "Challenging",
    rating: 4.6,
    reviews: 94,
    price: "From $199",
    image: capIvi,
    location: "Kabylie Region",
    highlights: ["Mountain Views", "Wildlife", "Village Visits", "Camping"],
    icon: Activity,
    whatIncluded: [
      "Experienced mountain guide",
      "All camping equipment",
      "Meals (breakfast, lunch, dinner)",
      "Transportation",
      "First aid kit",
    ],
    whatToBring: [
      "Hiking boots",
      "Backpack",
      "Warm clothing",
      "Rain gear",
      "Water bottle",
      "Camera",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Early morning departure",
          "Start hiking trail",
          "Lunch at mountain viewpoint",
          "Continue to Berber village",
          "Village visit and cultural exchange",
          "Evening camp setup",
          "Dinner and rest",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Sunrise breakfast",
          "Continue hiking",
          "Wildlife spotting",
          "Lunch at summit",
          "Descent and return",
          "Transfer to hotel",
        ],
      },
    ],
    gallery: [capIvi, capIvi, capIvi],
  },
  {
    id: 6,
    title: "Culinary Experience Tour",
    description: "Immerse yourself in Algerian cuisine with cooking classes, market visits, and traditional meal tastings.",
    fullDescription: "Dive deep into Algerian culinary traditions with this immersive half-day experience. Visit local markets to select fresh ingredients, learn to cook traditional dishes from expert local chefs, and enjoy a feast of authentic Algerian cuisine. This hands-on experience is perfect for food lovers who want to understand the culture through its flavors.",
    category: "Food",
    duration: "Half Day",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 178,
    price: "From $65",
    image: karantika,
    location: "Algiers, Oran",
    highlights: ["Cooking Classes", "Market Tours", "Food Tastings", "Local Chefs"],
    icon: UtensilsCrossed,
    whatIncluded: [
      "Professional chef instructor",
      "Market tour",
      "All ingredients",
      "Cooking class",
      "Full meal",
      "Recipe booklet",
    ],
    whatToBring: [
      "Comfortable clothing",
      "Apron (optional)",
      "Appetite!",
    ],
    itinerary: [
      {
        day: "Half Day",
        activities: [
          "Meet at local market",
          "Market tour and ingredient selection",
          "Transfer to cooking school",
          "Cooking class with chef",
          "Prepare traditional dishes",
          "Enjoy the meal together",
          "Receive recipe booklet",
        ],
      },
    ],
    gallery: [karantika, karantika, karantika],
  },
  {
    id: 7,
    title: "Coastal Road Trip",
    description: "Drive along the scenic Mediterranean coast with stops at charming fishing villages and hidden coves.",
    fullDescription: "Experience the beauty of Algeria's Mediterranean coastline on this scenic road trip. Drive along breathtaking coastal roads, stop at charming fishing villages, explore hidden coves, and enjoy fresh seafood at local restaurants. This full-day journey offers stunning views, cultural experiences, and plenty of photo opportunities.",
    category: "Adventure",
    duration: "Full Day",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 112,
    price: "From $129",
    image: capIvi,
    location: "Coastal Route",
    highlights: ["Scenic Views", "Village Stops", "Local Markets", "Seafood"],
    icon: Car,
    whatIncluded: [
      "Private vehicle and driver",
      "Professional guide",
      "Lunch at coastal restaurant",
      "All entrance fees",
      "Refreshments",
    ],
    whatToBring: [
      "Camera",
      "Comfortable clothing",
      "Sunscreen",
      "Cash for souvenirs",
    ],
    itinerary: [
      {
        day: "Full Day",
        activities: [
          "Morning pickup",
          "Start coastal drive",
          "First village stop",
          "Scenic viewpoint photos",
          "Lunch at fishing village",
          "Afternoon coastal exploration",
          "Hidden cove visit",
          "Return journey",
        ],
      },
    ],
    gallery: [capIvi, capIvi, capIvi],
  },
  {
    id: 8,
    title: "Photography Safari",
    description: "Capture Algeria's diverse landscapes, from desert dunes to mountain peaks, with professional photography guidance.",
    fullDescription: "Join professional photographers on a full-day safari designed to capture Algeria's most stunning landscapes. Learn photography techniques while visiting diverse locations from desert dunes to mountain peaks. Perfect for both beginners and experienced photographers looking to improve their skills and capture breathtaking images.",
    category: "Photography",
    duration: "Full Day",
    difficulty: "Moderate",
    rating: 4.9,
    reviews: 145,
    price: "From $159",
    image: sahara,
    location: "Multiple Locations",
    highlights: ["Golden Hour", "Landscape Photography", "Professional Guide", "Equipment Tips"],
    icon: Camera,
    whatIncluded: [
      "Professional photographer guide",
      "Transportation to multiple locations",
      "Photography tips and guidance",
      "Lunch",
      "Golden hour sessions",
    ],
    whatToBring: [
      "Camera (DSLR or mirrorless recommended)",
      "Extra batteries",
      "Memory cards",
      "Tripod (optional)",
      "Lenses",
    ],
    itinerary: [
      {
        day: "Full Day",
        activities: [
          "Early morning pickup",
          "First location - sunrise photography",
          "Photography techniques workshop",
          "Second location - landscapes",
          "Lunch break",
          "Afternoon location",
          "Golden hour photography session",
          "Return and photo review",
        ],
      },
    ],
    gallery: [sahara, sahara, sahara],
  },
];

const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activity = activities.find((a) => a.id === parseInt(id || "0"));

  if (!activity) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Activity Not Found</h1>
            <p className="text-muted-foreground mb-6">The activity you're looking for doesn't exist.</p>
            <Link to="/things-to-do">
              <Button>Back to Activities</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = activity.icon;
  const relatedActivities = activities
    .filter((a) => a.category === activity.category && a.id !== activity.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={activity.image}
            alt={activity.title}
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
                <Icon className="h-3 w-3 mr-1" />
                {activity.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {activity.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <MapPin className="h-5 w-5" />
                <span>{activity.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span>{activity.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{activity.rating}</span>
                <span className="text-white/70">({activity.reviews} reviews)</span>
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
                  <h2 className="text-2xl font-bold mb-4">About This Experience</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {activity.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activity.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                  <div className="space-y-6">
                    {activity.itinerary.map((day, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">{day.day}</h3>
                        <ul className="space-y-2">
                          {day.activities.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {activity.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img
                          src={img}
                          alt={`${activity.title} ${idx + 1}`}
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
                    <div className="text-3xl font-bold text-primary mb-2">{activity.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{activity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Difficulty</span>
                      <Badge variant={activity.difficulty === "Easy" ? "default" : activity.difficulty === "Moderate" ? "secondary" : "destructive"}>
                        {activity.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{activity.rating}</span>
                        <span className="text-muted-foreground text-sm">({activity.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Now
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

              {/* What's Included */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {activity.whatIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* What to Bring */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">What to Bring</h3>
                  <ul className="space-y-2">
                    {activity.whatToBring.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="h-4 w-4 mr-2" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Activities */}
      {relatedActivities.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedActivities.map((related) => {
                const RelatedIcon = related.icon;
                return (
                  <Link key={related.id} to={`/activity/${related.id}`} className="block">
                    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer card-hover h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                            <RelatedIcon className="h-3 w-3 mr-1" />
                            {related.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {related.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">{related.price}</span>
                          <Button variant="ghost" size="sm" onClick={(e) => e.preventDefault()}>
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ActivityDetail;

