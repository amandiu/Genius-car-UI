const BookingSummary = () => {
  // Dummy summary
  const items = [
    { title: "Engine Repair", price: 100 },
    { title: "Oil Change", price: 40 },
  ];
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow">
      <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
      <ul className="mb-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between mb-2">
            <span>{item.title}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="mb-4" />
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default BookingSummary;
