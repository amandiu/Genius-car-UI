const methods = ["Bkash", "Nagad", "Card", "PayPal"];

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-4">
      {methods.map((method) => (
        <label
          key={method}
          className="flex items-center gap-3 bg-white p-3 rounded shadow cursor-pointer hover:shadow-lg transition"
        >
          <input type="radio" name="payment" className="accent-orange-500" />
          <span>{method}</span>
        </label>
      ))}
    </div>
  );
};

export default PaymentMethod;
