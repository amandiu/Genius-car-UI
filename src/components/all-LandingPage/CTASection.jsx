// src/components/all-LandingPage/CTASection.jsx
import React from "react";
import Button from "./../button/Button"; // default export
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-orange-500 px-8 py-16 text-center text-white md:px-16">
          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
          
          <div className="relative">
            {/* Headline */}
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-white">
              Ready to Get Started?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-white/80">
              Book your first service today and experience the Genius Car difference. New customers get 20% off their first service!
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* Book Service Button */}
              <Button
                size="lg"
                variant="secondary"
                className="flex items-center justify-center bg-white text-black shadow-lg hover:shadow-xl"
                onClick={() => (window.location.href = "/booking")}
              >
                Book Service Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Call Us Button */}
              <Button
                size="lg"
                variant="secondary"
                className="flex items-center justify-center bg-orange-600 text-white shadow-lg hover:bg-orange-700 hover:shadow-xl"
                onClick={() => window.location.href = "tel:1800436487"}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us: 1-800-GENIUS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
