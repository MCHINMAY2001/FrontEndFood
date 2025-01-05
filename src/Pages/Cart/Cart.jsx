import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartItem } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  {/* <p> {item.name}</p> */}
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>${getTotalCartItem()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivery fee</p>
              <p>${getTotalCartItem() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartItem() === 0 ? 0 : getTotalCartItem() + 2}</b>
            </div>
          </div>
          {/* <NavLink to="/order">
            <button>Procced to checkout</button>{" "}
          </NavLink> */}
          <button onClick={() => navigate("/order")}>
            Procced to checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promocode enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
