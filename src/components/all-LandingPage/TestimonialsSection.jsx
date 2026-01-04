import TestimonialCard from "../cards/TestimonialCard";

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-16 text-center px-6 2xl:px-0">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} name={t.name} text={t.text} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
