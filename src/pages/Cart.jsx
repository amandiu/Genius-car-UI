import CartItem from "../components/cart/CartItem";

const cartItems = [
  { id: 1, title: "Engine Repair", price: 100, quantity: 1 },
  { id: 2, title: "Oil Change", price: 40, quantity: 2 },
];

const Cart = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="px-6 py-12 font-sans text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Price Summary */}
        <div className="flex-1 bg-gray-100 rounded-lg shadow p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Price Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <input
            type="text"
            placeholder="Coupon Code"
            className="mt-4 w-full border rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
