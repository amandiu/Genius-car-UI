import HeroSection from "./../components/all-LandingPage/HeroSection";
import ServicesSection from "./../components/all-LandingPage/ServicesSection";
import HowItWorksSection from "./../components/all-LandingPage/HowItWorksSection";
import MechanicsSection from "./../components/all-LandingPage/MechanicsSection";
import TestimonialsSection from "./../components/all-LandingPage/TestimonialsSection";
import {
  faCar,
  faOilCan,
  faTools,
  faBatteryFull,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  { icon: faTools, title: "Engine Repair" },
  { icon: faOilCan, title: "Oil Change" },
  { icon: faCar, title: "Tire Replacement" },
  { icon: faBatteryFull, title: "Battery Service" },
  { icon: faCar, title: "Car Wash" },
  { icon: faTools, title: "Brake Service" },
  { icon: faOilCan, title: "AC Repair" },
  { icon: faCar, title: "Wheel Alignment" },
  { icon: faBatteryFull, title: "Electrical Work" },
  { icon: faTools, title: "Full Inspection" },
];

const mechanics = [
  { name: "John Doe", rating: 4.8, img: "/assets/mechanic1.jpg" },
  { name: "Jane Smith", rating: 4.7, img: "/assets/mechanic2.jpg" },
];

const testimonials = [
  { name: "Ali Rahman", text: "Excellent service! Highly recommend." },
  { name: "Sara Khan", text: "Very professional and fast." },
];

const Landing = () => {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <ServicesSection services={services} />
      <HowItWorksSection />
      <MechanicsSection mechanics={mechanics} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
};

export default Landing;
