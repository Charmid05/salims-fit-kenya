import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Clock, Heart } from "lucide-react";
import personalTraining from "@/assets/personal-training.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Happy Members" },
    { icon: <Trophy className="h-8 w-8" />, number: "5", label: "Years Experience" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Access Available" },
    { icon: <Heart className="h-8 w-8" />, number: "100%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our equipment to our service."
    },
    {
      title: "Community",
      description: "Building a supportive fitness community where everyone feels welcomed and motivated."
    },
    {
      title: "Innovation",
      description: "Constantly evolving with the latest fitness trends and technology to serve you better."
    },
    {
      title: "Results",
      description: "Your success is our success. We're committed to helping you achieve your goals."
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
              About Salims' Fitness
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gym-black mb-6">
              Your Fitness Journey
              <span className="block text-transparent bg-gradient-to-r from-primary to-red-400 bg-clip-text">
                Starts Here
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Salims' Fitness, we believe that fitness is not just about physical transformation—it's about 
              building confidence, creating healthy habits, and becoming the best version of yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center gym-card">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center text-white mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gym-black mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gym-black mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2019, Salims' Fitness began with a simple vision: to create Kenya's premier 
                  fitness destination where people of all fitness levels could achieve their goals in a 
                  supportive, motivating environment.
                </p>
                <p>
                  What started as a small neighborhood gym has grown into a comprehensive fitness center 
                  serving over 500 members across Nairobi. Our success comes from our unwavering commitment 
                  to our members' success and our belief that fitness should be accessible, enjoyable, and effective.
                </p>
                <p>
                  Today, we continue to evolve, incorporating the latest fitness innovations while maintaining 
                  the personal touch and community spirit that makes Salims' Fitness special.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={personalTraining}
                alt="Personal training session"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gym-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="gym-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-gym-black mb-6">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower individuals to achieve their fitness goals through world-class facilities, 
                  expert guidance, and a supportive community. We're committed to making fitness 
                  accessible, enjoyable, and sustainable for everyone who walks through our doors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gym-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-gym-black mb-6">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be Kenya's leading fitness center, recognized for transforming lives through 
                  innovative fitness solutions, exceptional service, and a culture of health and wellness 
                  that extends beyond our gym walls into the broader community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gym-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape the experience we create for our members.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gym-card text-center">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gym-black mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-br from-gym-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={gymEquipment}
                alt="Modern gym equipment"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gym-black mb-6">State-of-the-Art Equipment</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Our gym features the latest in fitness technology and equipment, carefully selected 
                  to provide you with the most effective and safe workout experience possible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Premium cardio equipment with entertainment systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Professional-grade strength training equipment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Functional training area with TRX and kettlebells
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Dedicated areas for stretching and recovery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;