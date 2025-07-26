import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the email
    // For now, we'll just show a success message
    console.log("Contact form data:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Your message has been sent to Salimkhamis375@gmail.com. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+254 769943055", "+254 104979415"],
      description: "Call us during business hours for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["Salimkhamis375@gmail.com"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Nairobi, Kenya"],
      description: "Visit us for a tour of our premium facilities"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Operating Hours",
      details: ["Mon-Fri: 5:00 AM - 11:00 PM", "Weekends: 6:00 AM - 10:00 PM"],
      description: "Extended hours to fit your schedule"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gym-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gym-black mb-6">
              Contact 
              <span className="block text-transparent bg-gradient-to-r from-primary to-red-400 bg-clip-text">
                Salims' Fitness
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our services, membership plans, or facilities? 
              We're here to help you start your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="gym-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center text-white mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gym-black mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="font-medium text-gray-800">{detail}</div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-gym-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="gym-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-gym-black flex items-center">
                    <Send className="h-6 w-6 mr-2 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+254 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="How can we help you? Feel free to ask about memberships, services, or any other questions..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map or Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="gym-card">
                <CardHeader>
                  <CardTitle className="text-xl text-gym-black flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Location: Nairobi, Kenya</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Our gym is conveniently located in Nairobi with easy access to public transportation 
                    and ample parking space for our members.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="gym-card">
                <CardHeader>
                  <CardTitle className="text-xl text-gym-black">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Call Now</span>
                    <a href="tel:+254769943055" className="text-primary font-bold hover:underline">
                      +254 769943055
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Email</span>
                    <a href="mailto:Salimkhamis375@gmail.com" className="text-primary font-bold hover:underline">
                      Send Email
                    </a>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-bold text-gym-black mb-2">Need Immediate Help?</h4>
                    <p className="text-gray-600 text-sm">
                      Call us during business hours for immediate assistance with memberships, 
                      bookings, or any urgent inquiries.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;