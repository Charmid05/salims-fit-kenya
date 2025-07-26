import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MembershipPlans from "@/components/MembershipPlans";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Trophy, Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import personalTraining from "@/assets/personal-training.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <Dumbbell className="h-12 w-12" />,
      title: "Premium Equipment",
      description: "State-of-the-art fitness equipment from leading brands to ensure the best workout experience."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Trainers",
      description: "Certified personal trainers ready to guide you through your fitness journey with personalized programs."
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Proven Results",
      description: "Join hundreds of members who have successfully transformed their lives and achieved their fitness goals."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Supportive Community",
      description: "Be part of a motivating community that encourages and supports each other's fitness journey."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gym-black mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At Salims' Fitness, we provide all the tools, support, and environment you need to achieve your fitness goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gym-card text-center group">
                <CardContent className="p-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-red rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gym-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gym-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
                About Salims' Fitness
              </div>
              <h2 className="text-4xl font-bold text-gym-black mb-6">
                5 Years of Transforming Lives in Kenya
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2019, Salims' Fitness has been Kenya's premier destination for fitness transformation. 
                With over 500 satisfied members, we've built a reputation for excellence, innovation, and results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our world-class facilities, expert trainers, and supportive community create the perfect 
                environment for achieving your fitness goals, whether you're just starting out or looking 
                to take your training to the next level.
              </p>
              <Button variant="outline-hero" size="lg" className="group" onClick={() => navigate('/about')}>
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <img
                src={personalTraining}
                alt="Personal training at Salims Fitness"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Happy Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <MembershipPlans />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={gymEquipment}
                alt="Premium gym equipment"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
                Our Services
              </div>
              <h2 className="text-4xl font-bold text-gym-black mb-6">
                Comprehensive Fitness Solutions
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gym-black">Personal Training</h4>
                    <p className="text-gray-600">One-on-one sessions with certified trainers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gym-black">Group Classes</h4>
                    <p className="text-gray-600">High-energy group workouts for all fitness levels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gym-black">Nutritional Guidance</h4>
                    <p className="text-gray-600">Expert advice on meal planning and nutrition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gym-black">24/7 Access</h4>
                    <p className="text-gray-600">Premium members enjoy round-the-clock gym access</p>
                  </div>
                </div>
              </div>
              <Button variant="hero" size="lg" className="group" onClick={() => navigate('/book')}>
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Salims' Fitness today and become part of Kenya's most successful fitness community. 
            Your journey to a healthier, stronger you starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" className="bg-white text-gym-black hover:bg-gray-100" onClick={() => navigate('/membership')}>
              Start Your Membership
            </Button>
            <Button 
              variant="outline-hero" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gym-black"
              onClick={() => navigate('/book')}
            >
              Book Free Tour
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
