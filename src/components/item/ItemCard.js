import React from "react";
import LazyLoad from "react-lazy-load";

const ItemCard = ({ data }) => {
  const { image, name } = data;
  return (
    <div className=" w-1/3 px-2 pbx-90 ">
      <div className="">
        <LazyLoad once offsetVertical={100}>
          <img
            src={"http://localhost/diagnal/public/dummyImages/" + image}
            // src="https://images.unsplash.com/photo-1536572701422-28e6051dd93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
            className="w-full"
          />
        </LazyLoad>
      </div>
      <div className="pt-6">
        <h4 className="text-white truncate ">{name}</h4>
      </div>
    </div>
  );
};
export default ItemCard;
