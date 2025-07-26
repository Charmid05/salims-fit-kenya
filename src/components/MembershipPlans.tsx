import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown, Zap } from "lucide-react";

const MembershipPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "KES 3,500",
      period: "/month",
      description: "Perfect for beginners starting their fitness journey",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Access to gym equipment",
        "Basic workout guidance",
        "Locker room access",
        "Standard gym hours (6 AM - 10 PM)",
        "1 guest pass per month",
      ],
      color: "border-gray-200",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Standard",
      price: "KES 5,500",
      period: "/month",
      description: "Most popular choice for serious fitness enthusiasts",
      icon: <Star className="h-8 w-8" />,
      features: [
        "All Basic features",
        "Group fitness classes",
        "Nutritional guidance",
        "Extended hours (5 AM - 11 PM)",
        "3 guest passes per month",
        "Personal training consultation",
        "Access to sauna",
      ],
      color: "border-primary",
      buttonVariant: "hero" as const,
      popular: true,
    },
    {
      name: "Premium",
      price: "KES 8,500",
      period: "/month",
      description: "Ultimate fitness experience with exclusive benefits",
      icon: <Crown className="h-8 w-8" />,
      features: [
        "All Standard features",
        "24/7 gym access",
        "Unlimited guest passes",
        "Weekly personal training sessions",
        "Premium supplements discount",
        "Exclusive member events",
        "Priority booking for classes",
        "Massage therapy sessions",
        "Diet plan customization",
      ],
      color: "border-yellow-400",
      buttonVariant: "dark" as const,
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gym-light-grey to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
            Membership Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gym-black mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals. 
            All plans include access to our world-class facilities.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`gym-card relative ${plan.color} ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-red text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-3 rounded-full w-fit mb-4 ${
                  plan.popular ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gym-black">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-gym-black">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full" 
                  size="lg"
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>

                {plan.name === "Standard" && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Free 7-day trial included
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All memberships include a free fitness assessment and goal-setting session
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>• No setup fees</span>
            <span>• Cancel anytime</span>
            <span>• M-Pesa payment accepted</span>
            <span>• Student discounts available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;