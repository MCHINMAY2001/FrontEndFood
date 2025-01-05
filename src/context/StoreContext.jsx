import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext("null");

const StoreContextProvider = ({ children }) => {
  //In foodItem component we have a statefunction which create a statevariable for each product as every item starts from 0 so  its obious that it creats one one statevariable for each product and it we have 100 product the it will create 100 statevariable which is not a best a practice so we will create a cart functionality to manage the states

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    //When there is no item in the cart then the cartitem has no itemId so we will spread the prev and set the itemid to 1
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    }
    //when there is some item in the cart the we will simply increase the cart item..
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);
  useEffect(() => {
    getTotalCartItem();
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartItem = () => {
    let totalAmout = 0;
    //for in loop search for the key value in an object

    for (const item in cartItems) {
      console.log(item);
      if (cartItems[item] > 0) {
        let foodinfo = food_list.find((product) => product._id === item);
        console.log(foodinfo);
        totalAmout += foodinfo.price * cartItems[item];
        //cartitems[item] means if the item is 4 then the value of cartitem 4 (then the value is the quantity)
        console.log(cartItems[item]);
        console.log(totalAmout);
      }
    }
    return totalAmout;
  };
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartItem,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
