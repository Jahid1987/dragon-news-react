import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCategories([...data]));
  }, []);
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">All Category</h3>
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn w-full mb-2 grid text-base  lg:text-lg justify-start"
              : "btn text-gray-500 text-base  lg:text-lg btn-ghost w-full mb-2 grid justify-start"
          }
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
      <div>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
      </div>
    </div>
  );
};

export default LeftSideNav;
