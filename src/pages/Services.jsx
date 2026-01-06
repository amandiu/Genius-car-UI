import ServicesGrid from "../components/services/ServicesGrid";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <ServicesGrid services={servicesData} />
        
      </div>
    </div>
  );
};

export default Services;
