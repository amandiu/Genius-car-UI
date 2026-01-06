// src/components/all-LandingPage/PricingSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./../../components/cards/Card";
import { Button } from "./../../components/button/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for individual car owners",
    features: ["Priority booking", "10% discount on services", "Free vehicle inspection", "Email support"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$79",
    period: "/month",
    description: "Best for families with multiple cars",
    features: [
      "Everything in Basic",
      "20% discount on services",
      "Free roadside assistance",
      "Priority phone support",
      "2 free oil changes/year",
      "Loaner car availability",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "Ideal for fleet management",
    features: [
      "Everything in Premium",
      "30% discount on services",
      "Dedicated account manager",
      "Fleet tracking dashboard",
      "Unlimited vehicles",
      "Custom billing options",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Membership Plans
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Join our membership program for exclusive benefits, discounts, and priority service access.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                className={`relative rounded-2xl transition-shadow duration-300 ${
                  plan.popular
                    ? "border-2 border-gradient-to-r from-orange-400 to-orange-600 shadow-xl hover:shadow-2xl"
                    : "border border-muted shadow hover:shadow-xl"
                }`}
              >
                {/* Most Popular Badge Fix */}
                {plan.popular && (
                  <div
                    className="
                      absolute -top-5 left-1/2 -translate-x-1/2
                      rounded-full px-6 py-2 text-sm font-bold
                      bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500
                      text-white shadow-md drop-shadow-md
                      "
                  >
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <CardHeader className="text-center mt-4">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2 text-lg">{plan.period}</span>
                  </div>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="mt-6">
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                      >
                        <Check className="h-5 w-5 text-orange-500" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full py-3 text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
