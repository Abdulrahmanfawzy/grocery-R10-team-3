function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center ">
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        const filled = starValue <= value;
        return (
          <span
            key={starValue}
            className={`text-[18px] ${
              filled ? "text-amber-400" : "text-gray-300"
            }`}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
      <span className="ml-1 text-[13px] text-gray-400">({value})</span>
    </div>
  );
}

export default Stars;
