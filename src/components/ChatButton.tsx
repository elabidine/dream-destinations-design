import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-card rounded-2xl shadow-hero border border-border overflow-hidden animate-scale-in">
          <div className="bg-primary p-4">
            <h4 className="font-semibold text-primary-foreground">Need Help?</h4>
            <p className="text-primary-foreground/80 text-sm">We typically reply within minutes</p>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-muted-foreground text-sm">
              Hi! 👋 How can we help you plan your perfect Algerian adventure?
            </p>
            <Button variant="default" className="w-full">
              Start Conversation
            </Button>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-glow transition-all duration-300 hover:scale-105"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-accent-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-accent-foreground" />
        )}
      </button>
    </div>
  );
};

export default ChatButton;
