import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-photographer.jpg";

const HeroSection = () => {
  const scrollToAppointments = () => {
    document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Professional photographer capturing moments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        <div className="absolute inset-0 bg-background/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-strong border border-border/50">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Capturing{" "}
            <span className="bg-gradient-to-r from-primary via-secondary-bright to-accent-bright bg-clip-text text-transparent">
              Moments
            </span>
            <br />
            Creating{" "}
            <span className="bg-gradient-to-r from-accent-bright via-primary to-secondary-bright bg-clip-text text-transparent">
              Memories
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional photography services that turn your special moments into timeless memories. 
            From weddings to portraits, we capture the essence of every emotion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToAppointments}
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              Book an Appointment
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4 min-w-[200px] bg-card/50 backdrop-blur-sm hover:bg-card/80"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;