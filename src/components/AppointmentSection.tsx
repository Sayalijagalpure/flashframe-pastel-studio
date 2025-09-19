import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    date: "",
    time: "",
    people: "",
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.eventType || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Appointment Booked Successfully! 🎉",
      description: `Thank you ${formData.name}! We'll contact you soon to confirm your ${formData.eventType.toLowerCase()} session.`,
    });

    // Reset form
    setFormData({
      eventType: "",
      date: "",
      time: "",
      people: "",
      name: "",
      email: "",
      phone: ""
    });
  };

  const eventTypes = [
    "Wedding",
    "Birthday",
    "Corporate",
    "Personal Shoot",
    "Outdoor Shoot"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <section id="appointments" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Book Your <span className="bg-gradient-to-r from-primary to-secondary-bright bg-clip-text text-transparent">Appointment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to capture your special moments? Fill out the form below and we'll get back to you within 24 hours to confirm your session.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-strong border-border/50 bg-gradient-card">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground">Schedule Your Session</CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Type */}
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Type of Event *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("eventType", value)} value={formData.eventType}>
                    <SelectTrigger className="bg-background border-border focus:ring-primary">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground font-medium">
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="bg-background border-border focus:ring-primary"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Preferred Time
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("time", value)} value={formData.time}>
                      <SelectTrigger className="bg-background border-border focus:ring-primary">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Number of People */}
                <div className="space-y-2">
                  <Label htmlFor="people" className="text-foreground font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Number of People
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("people", value)} value={formData.people}>
                    <SelectTrigger className="bg-background border-border focus:ring-primary">
                      <SelectValue placeholder="How many people?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3-5">3-5 People</SelectItem>
                      <SelectItem value="6-10">6-10 People</SelectItem>
                      <SelectItem value="10+">10+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background border-border focus:ring-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="booking" 
                  size="lg" 
                  className="w-full text-lg py-6 mt-8"
                >
                  Confirm Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;