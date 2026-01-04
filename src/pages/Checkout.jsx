import PaymentMethod from "../components/checkout/PaymentMethod";

const Checkout = () => {
  return (
    <div className="px-6 py-12 font-sans text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Billing Details</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="border rounded px-3 py-2" />
            <input type="email" placeholder="Email" className="border rounded px-3 py-2" />
            <input type="text" placeholder="Address" className="border rounded px-3 py-2" />
          </form>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Payment Method</h3>
          <PaymentMethod />
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
