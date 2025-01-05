import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  console.log(category);

  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore our Menu</h2>
      <p className="explore-menu-texxt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam,
        reiciendis, velit alias repellat voluptatum id ipsam natus consectetur{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((iitem, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === iitem.menu_name ? "All" : iitem.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === iitem.menu_name ? "active" : ""}
                src={iitem.menu_image}
                alt=""
              />
              <p>{iitem.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
