import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Priya S.",
      review: "FlashFrame made my wedding unforgettable. Every picture was magical!",
      rating: 5,
      event: "Wedding Photography"
    },
    {
      name: "Rahul M.",
      review: "Loved my portrait shoot. The team made me feel super comfortable.",
      rating: 5,
      event: "Portrait Session"
    },
    {
      name: "Neha K.",
      review: "Professional and creative. Best studio in town!",
      rating: 5,
      event: "Corporate Headshots"
    },
    {
      name: "Arjun P.",
      review: "Booked for my daughter's birthday and the pictures were stunning.",
      rating: 5,
      event: "Birthday Photography"
    },
    {
      name: "Sanjana R.",
      review: "The outdoor shoot was beyond our expectations. Absolutely beautiful work!",
      rating: 5,
      event: "Outdoor Session"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-primary fill-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their experience with FlashFrame Studios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="group bg-card shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 border-border/50 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-6 relative">
                {/* Quote icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-button p-3 rounded-full shadow-soft">
                    <Quote className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review text */}
                <p className="text-foreground text-center mb-6 leading-relaxed font-medium group-hover:text-primary/90 transition-colors duration-300">
                  "{review.review}"
                </p>

                {/* Client info */}
                <div className="text-center">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {review.event}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-medium border border-border/50 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Happy Clients
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to create your own success story with us?
            </p>
            <button 
              onClick={() => document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-accent-bright text-primary-foreground px-8 py-3 rounded-full font-medium hover:scale-105 shadow-medium transition-all duration-300"
            >
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;