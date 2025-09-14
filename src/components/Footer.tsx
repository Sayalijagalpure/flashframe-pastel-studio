import { Camera, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Appointments", href: "#appointments" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-button p-2 rounded-xl shadow-soft">
                <Camera className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">FlashFrame Studios</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Professional photography services that capture life's most precious moments. 
              Creating memories that last a lifetime with artistic vision and technical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-3 text-background/80">
              <p>📍 123 Photography Lane, Creative District</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@flashframestudios.com</p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-background/10 backdrop-blur-sm p-2 rounded-lg hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70">
            © {currentYear} FlashFrame Studios. All Rights Reserved.
          </p>
          <p className="text-background/60 text-sm mt-2">
            Crafted with ❤️ for capturing beautiful moments
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;