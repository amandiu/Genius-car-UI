const Loading = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <div className="w-14 h-14 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-sm font-medium text-gray-500">
        Loading services...
      </p>
    </div>
  );
};

export default Loading;
