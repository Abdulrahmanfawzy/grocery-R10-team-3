import GrayStar from "../../assets/img/ratingStar/Frame 32.svg";
import YellowStar from "../../assets/img/ratingStar/Frame 31.svg";

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < Math.round(rating) ? YellowStar : GrayStar}
          alt="star"
        />
      ))}
    </div>
  );
}
