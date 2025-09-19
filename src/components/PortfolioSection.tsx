import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const portfolioCategories = [
    {
      title: "Weddings & Engagements",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Eternal wedding smiles",
      description: "Capturing the magic of your special day with romantic, timeless photography."
    },
    {
      title: "Birthday Celebrations",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Joyful birthday moments",
      description: "Making every birthday celebration memorable with vibrant, happy photography."
    },
    {
      title: "Corporate & Professional Portraits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Professional excellence",
      description: "Polished corporate headshots and team photos that showcase your professional brand."
    },
    {
      title: "Outdoor Shoots",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Nature-inspired portraits",
      description: "Beautiful outdoor sessions that capture your natural beauty in stunning environments."
    },
    {
      title: "Creative Concept Photography",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Artistic vision realized",
      description: "Unique, artistic photography that pushes creative boundaries and tells your story."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio showcasing moments that matter. Each category represents our commitment to excellence and artistic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 bg-card border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary-foreground font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {category.caption}
                  </p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to create your own memorable moments?
          </p>
          <button 
            onClick={() => document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-accent-bright text-primary-foreground px-8 py-3 rounded-full font-medium hover:scale-105 shadow-medium transition-all duration-300"
          >
            Start Your Session Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;