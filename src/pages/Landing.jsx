import HeroSection from "../components/all-LandingPage/HeroSection";
import ServicesSection from "../components/all-LandingPage/ServicesSection";
import HowItWorksSection from "../components/all-LandingPage/HowItWorksSection";
import MechanicsSection from "../components/all-LandingPage/MechanicsSection";
import TestimonialsSection from "../components/all-LandingPage/TestimonialsSection";
import PricingSection from "../components/all-LandingPage/PricingSection";
import FeaturesSection from "../components/all-LandingPage/FeaturesSection";
import { servicesData } from "../data/servicesData";
import { mechanics } from "../data/mechanics";
import { testimonials } from "../data/testimonials";
import CTASection from "../components/all-LandingPage/CTASection";

const Landing = () => {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <section className="py-16">
        <ServicesSection services={servicesData} />
      </section>
      <section className="py-16 bg-gray-50">
        <HowItWorksSection />
      </section>
      <section className="py-16 bg-gray-50">
        <PricingSection />
      </section>
      <section className="py-16 bg-gray-50">
        <FeaturesSection />
      </section>
      <section className="py-16">
        <MechanicsSection mechanics={mechanics} />
      </section>
      <section className="py-16 bg-gray-50">
        <TestimonialsSection testimonials={testimonials} />
      </section>
      <section className="py-16 bg-gray-50">
        <CTASection />
      </section>
    </div>
  );
};

export default Landing;
