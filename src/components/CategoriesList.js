import React from "react";
import "../assest/styles/category.css";

const CategoriesList = ({
  categories = [],
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="categoriesContainer">
      <div className="categoriesWrapper">
        <p
          onClick={() =>
            setSelectedCategory({
              id: "0",
              name: "Hepsi",
            })
          }
          className={`categoriesItem  ${
            selectedCategory.id === 0 ? "categoriesItemActive" : ""
          }`}
        >
          Hepsi
        </p>
        {categories.map((category) => (
          <p
            onClick={() => setSelectedCategory(category)}
            className={`categoriesItem  ${selectedCategory.id === category.id ?  "categoriesItemActive" : ""}`}
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
