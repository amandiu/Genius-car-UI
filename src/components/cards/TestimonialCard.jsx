const TestimonialCard = ({ name, text }) => (
  <div className="bg-white rounded-lg shadow p-6 w-80 hover:shadow-lg transition">
    <p className="text-gray-700 mb-4">"{text}"</p>
    <h4 className="font-bold">{name}</h4>
  </div>
);

export default TestimonialCard;
