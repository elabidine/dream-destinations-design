import { MapPin, Calendar, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Discover hidden gems and authentic experiences curated by local experts who know Algeria best.",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Book hotels, tours, and experiences seamlessly with our intuitive platform.",
  },
  {
    icon: Shield,
    title: "Trusted Reviews",
    description: "Make informed decisions with verified reviews from real travelers.",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Travel with peace of mind knowing our team is always here to help.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 gradient-teal" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
            Why Choose Tahwisa?
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
            We're dedicated to making your Algerian adventure unforgettable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
