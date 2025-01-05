import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, setItemCount] = useState(0);
  // console.log(itemCount);

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="food image" />
        {!cartItems[id] ? ( // itemCount == 0
          <img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)} // onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)} // onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            {/* <p>{itemCount}</p> */}
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)} // onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
