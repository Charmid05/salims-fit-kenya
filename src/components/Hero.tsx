import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gymHero from "@/assets/gym-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={gymHero}
          alt="Modern gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black/80 via-gym-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Kenya's Premier Fitness Center
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Transform Your
              <span className="block text-transparent bg-gradient-to-r from-primary to-red-400 bg-clip-text">
                Body & Mind
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-in">
              Join Salims' Fitness and embark on your journey to a stronger, healthier, and more confident you. 
              Premium equipment, expert trainers, and a supportive community await.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
              <Button variant="hero" size="xl" className="group" onClick={() => navigate('/membership')}>
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-hero" 
                size="xl"
                className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gym-black"
                onClick={() => navigate('/book')}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-gray-300 text-sm">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">5</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">24/7</div>
                <div className="text-gray-300 text-sm">Access</div>
              </div>
            </div>
          </div>

          {/* Right side - could add a form or additional content */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Start</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                  Choose your membership plan
                </div>
                <div className="flex items-center text-white/80">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                  Book your free consultation
                </div>
                <div className="flex items-center text-white/80">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                  Start your fitness journey
                </div>
              </div>
              <Button variant="default" className="w-full mt-6 bg-white text-gym-black hover:bg-gray-100" onClick={() => navigate('/membership')}>
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;