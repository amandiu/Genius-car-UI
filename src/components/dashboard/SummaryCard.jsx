const colors = {
  orange: "bg-orange-500 text-white",
  green: "bg-green-500 text-white",
  black: "bg-black text-white",
};

const SummaryCard = ({ title, value, color }) => {
  return (
    <div className={`rounded-lg p-6 shadow ${colors[color]} w-64 text-center`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default SummaryCard;
