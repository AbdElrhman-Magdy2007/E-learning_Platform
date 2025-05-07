
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for individual learners",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Access to 100+ basic courses",
        "Course completion certificates",
        "24/7 support",
        "Mobile access"
      ],
      buttonText: "Start Basic Plan",
      popular: false
    },
    {
      id: "pro",
      name: "Professional",
      description: "Great for dedicated students",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        "Access to all 1,000+ courses",
        "Course completion certificates",
        "24/7 priority support",
        "Mobile access",
        "Downloadable resources",
        "Offline viewing"
      ],
      buttonText: "Start Pro Plan",
      popular: true
    },
    {
      id: "unlimited",
      name: "Unlimited",
      description: "For organizations and teams",
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        "Everything in Professional",
        "Team management dashboard",
        "Progress reports",
        "API access",
        "Dedicated account manager",
        "Custom course creation",
        "Branded certificates"
      ],
      buttonText: "Start Unlimited Plan",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How does the billing cycle work?",
      answer: "You can choose between monthly or yearly billing. Yearly billing gives you a significant discount compared to paying monthly. You can change your billing cycle at any time."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, you'll receive credit toward future months."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee for all new subscriptions. If you're not satisfied with your purchase, contact our support team within 7 days for a full refund."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. You'll continue to have access to your plan until the end of your current billing cycle."
    }
  ];

  const comparisonFeatures = [
    { 
      name: "Course Access", 
      basic: "100+ courses", 
      pro: "1,000+ courses", 
      unlimited: "All courses" 
    },
    { 
      name: "Course Certificates", 
      basic: true, 
      pro: true, 
      unlimited: true 
    },
    { 
      name: "Offline Viewing", 
      basic: false, 
      pro: true, 
      unlimited: true 
    },
    { 
      name: "Downloadable Resources", 
      basic: false, 
      pro: true, 
      unlimited: true 
    },
    { 
      name: "Team Management", 
      basic: false, 
      pro: false, 
      unlimited: true 
    },
    { 
      name: "Progress Reports", 
      basic: false, 
      pro: false, 
      unlimited: true 
    },
    { 
      name: "API Access", 
      basic: false, 
      pro: false, 
      unlimited: true 
    }
  ];

  const getPrice = (plan: any) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-blue-600 py-16 px-4 text-white animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Learning Plan
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
            Flexible pricing options for every stage of your learning journey
          </p>
          <p className="text-white/80 max-w-lg mx-auto">
            All plans include unlimited access to our learning resources, quizzes, and projects
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted inline-flex items-center p-1 rounded-full">
            <Button
              variant={billingCycle === "monthly" ? "default" : "ghost"}
              className={`rounded-full ${billingCycle === "monthly" ? "" : "text-muted-foreground"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "yearly" ? "default" : "ghost"}
              className={`rounded-full ${billingCycle === "yearly" ? "" : "text-muted-foreground"}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="ml-1 text-xs bg-brand-200 text-brand-800 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`hover-lift overflow-hidden relative ${
                plan.popular 
                  ? "border-2 border-brand-500 shadow-lg shadow-brand-100" 
                  : "border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-500 text-white py-1 px-4 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold">${getPrice(plan)}</span>
                  <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pb-6">
                <Button 
                  className={`w-full hover-scale ${plan.popular ? "bg-brand-600 hover:bg-brand-700" : ""}`}
                  size="lg"
                >
                  <DollarSign className="h-4 w-4 mr-1" />
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Features Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Plan Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Basic</th>
                  <th className="text-center py-4 px-4">Professional</th>
                  <th className="text-center py-4 px-4">Unlimited</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <Check className="h-5 w-5 text-brand-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        feature.basic
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="h-5 w-5 text-brand-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        feature.pro
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.unlimited === "boolean" ? (
                        feature.unlimited ? (
                          <Check className="h-5 w-5 text-brand-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        feature.unlimited
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-8">
            Find answers to common questions about our pricing plans
          </p>

          <Accordion type="single" collapsible className="bg-muted/50 rounded-lg p-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                <AccordionTrigger className="py-4 px-2">
                  <span className="font-medium text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 px-2 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-muted p-8 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a custom plan for your organization?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            Contact our sales team to discuss enterprise pricing and custom solutions
          </p>
          <Button size="lg" variant="outline" className="hover-scale mr-4">
            Contact Sales
          </Button>
          <Button size="lg" className="hover-scale">
            <HelpCircle className="h-4 w-4 mr-1" />
            Schedule a Demo
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
