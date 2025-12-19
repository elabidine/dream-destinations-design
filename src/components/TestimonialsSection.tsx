import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "United Kingdom",
    avatar: "S",
    rating: 5,
    text: "Tahwisa made our Sahara trip absolutely magical. The local guides were incredible and every detail was perfectly arranged.",
  },
  {
    id: 2,
    name: "Jean-Pierre Dubois",
    location: "France",
    avatar: "J",
    rating: 5,
    text: "I discovered hidden beaches and authentic restaurants I would never have found on my own. Highly recommend!",
  },
  {
    id: 3,
    name: "Ahmed Al-Rashid",
    location: "UAE",
    avatar: "A",
    rating: 5,
    text: "The food tours were exceptional. Every dish told a story and the hosts were so welcoming. A truly immersive experience.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
            What Travelers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
