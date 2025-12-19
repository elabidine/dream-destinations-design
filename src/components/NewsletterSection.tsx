import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You'll receive the best travel deals in your inbox.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary to-primary-light rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                Save time, Save energy!
              </h2>
              <p className="text-primary-foreground/80 mt-3 text-lg">
                Sign up and we'll send the best deals to you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2 bg-primary-foreground rounded-xl p-1.5">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
                  required
                />
                <Button 
                  type="submit" 
                  variant="accent"
                  disabled={isSubmitting}
                  className="shrink-0"
                >
                  {isSubmitting ? (
                    <CheckCircle className="h-5 w-5 animate-pulse" />
                  ) : (
                    <>
                      Subscribe
                      <Send className="h-4 w-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <p className="text-primary-foreground/60 text-sm">
              Join 10,000+ travelers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
