import { MapPin, Calendar, Shield, HeartHandshake, Sparkles, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Local Experts, Real Stories",
    description: "Our team lives and breathes Algeria. We'll show you the places we love, not just the tourist spots.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Calendar,
    title: "Book in Minutes",
    description: "No complicated forms or hidden fees. Just pick your adventure and go. Simple as that!",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Real Reviews, Real People",
    description: "Every review comes from travelers like you. We keep it honest, so you can trust what you read.",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: HeartHandshake,
    title: "We've Got Your Back",
    description: "Questions? Concerns? We're here 24/7 to help. Your peace of mind is our priority.",
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-500",
  },
];

const stats = [
  { number: "10K+", label: "Happy Travelers", icon: Users },
  { number: "500+", label: "Amazing Experiences", icon: Sparkles },
  { number: "50+", label: "Destinations", icon: Globe },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <HeartHandshake className="h-4 w-4" />
            <span>Your Trusted Travel Partner</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Travelers <span className="text-primary">Love</span> Tahwisa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not just a booking platform—we're your friends in Algeria, 
            here to make your journey as smooth and memorable as possible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardContent className="p-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${feature.iconColor} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Friendly CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg mb-4">
            Ready to start your adventure? We're here to help! 😊
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span>✨ Curated by locals</span>
            <span>•</span>
            <span>💬 24/7 support</span>
            <span>•</span>
            <span>⭐ Trusted by thousands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
