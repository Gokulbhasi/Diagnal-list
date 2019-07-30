import React from "react";

const ItemCard = ({ data }) => {
  const { image, name } = data;

  return (
    <div className=" w-1/3 p-2">
      <div className="">
        <img
          src={"http://localhost/diagnal/public/dummyImages/" + image}
          className=""
        />
      </div>
      <div className="pt-6">
        <h4 className="text-white">{name}</h4>
      </div>
    </div>
  );
};
export default ItemCard;
