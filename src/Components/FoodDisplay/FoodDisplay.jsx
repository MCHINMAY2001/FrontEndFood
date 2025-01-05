import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

// import { StoreContext } from "../../context/storeContext";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log(food_list);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          // If the category is all means no item is selected then show all item with all category with first condition... in second condition when the category(Menu name of menu_list) is equal to items category(category of Food_list) then only return the fooditem components.
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              ></FoodItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
