import BookingForm from "../components/forms/BookingForm";
import BookingServiceCard from "../components/cards/BookingServiceCard";
import BookingSummary from "../components/BookingSummary";

const services = [
  { title: "Engine Repair", price: 100 },
  { title: "Oil Change", price: 40 },
  { title: "Tire Replacement", price: 80 },
  { title: "Battery Service", price: 60 },
  { title: "Brake Repair", price: 90 },
  { title: "Car Wash", price: 30 },
];

const Booking = () => {
  return (
    <div className="px-6 py-16 font-sans text-gray-800 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-orange-500">
        Book Your Car Service
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Service Cards */}
        <div className="flex-1 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <BookingServiceCard
              key={service.title}
              title={service.title}
              price={service.price}
              className="bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 shadow-lg hover:shadow-2xl rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
            />
          ))}
        </div>

        {/* Form + Summary */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Your Details
            </h3>
            <BookingForm />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Booking Summary
            </h3>
            <BookingSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
