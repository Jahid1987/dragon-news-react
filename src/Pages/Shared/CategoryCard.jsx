import category1 from "../../assets/1.png";
import { CiCalendar } from "react-icons/ci";
const CategoryCard = () => {
  return (
    <div className="space-y-4 my-10">
      <img src={category1} alt="category 1" />
      <h3 className="text-xl font-semibold">
        Bayern Slams Authorities Over Flight Delay to Club World Cup
      </h3>
      <p className="font-medium flex items-center gap-3">
        Sports{" "}
        <span className="text-gray-500 flex items-center gap-2">
          <CiCalendar className="text-xl" />
          Jan 4, 2022
        </span>
      </p>
    </div>
  );
};

export default CategoryCard;
