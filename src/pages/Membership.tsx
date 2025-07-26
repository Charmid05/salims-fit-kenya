import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MembershipPlans from "@/components/MembershipPlans";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Users, Shield } from "lucide-react";

const Membership = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Hours",
      description: "Extended operating hours to fit your busy schedule, with 24/7 access available on premium plans."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Trainers",
      description: "Certified personal trainers available to help you achieve your fitness goals safely and effectively."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no setup fees, cancellation fees, or hidden charges. What you see is what you pay."
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "All Inclusive",
      description: "Access to all equipment, basic classes, and amenities included in your membership fee."
    }
  ];

  const faq = [
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel."
    },
    {
      question: "Do you offer family discounts?",
      answer: "Absolutely! We offer 15% discount for family memberships (2+ family members joining together)."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, M-Pesa, bank transfers, and credit/debit cards for your convenience."
    },
    {
      question: "Is there a contract commitment?",
      answer: "No long-term contracts required. You can cancel your membership anytime with 30 days notice."
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
              Membership Plans
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gym-black mb-6">
              Choose Your 
              <span className="block text-transparent bg-gradient-to-r from-primary to-red-400 bg-clip-text">
                Fitness Plan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible membership options designed to fit your lifestyle and budget. 
              Join the Salims' Fitness family and start your transformation today.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <MembershipPlans />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gym-black mb-4">Why Choose Salims' Fitness?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every membership comes with benefits designed to support your fitness journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="gym-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gym-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gym-light-grey to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gym-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers to help you make the right choice.
            </p>
          </div>
          
          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="gym-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gym-black mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied members who have transformed their lives at Salims' Fitness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Join Now - Get Started
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gym-black px-8 py-4 rounded-lg font-bold transition-all duration-300">
              Book Free Tour
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;