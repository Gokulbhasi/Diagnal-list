import React from "react";
import LazyLoad from "react-lazyload";

const ItemCard = ({ data }) => {
  const { image, name } = data;
  const onErrorGetSrc = e => {
    e.target.src =
      "http://localhost/diagnal/public/dummyImages/placeholder_for_missing_posters.png";
  };
  return (
    <div className=" w-1/3 px-2 pbx-90 ">
      <div className="">
        <LazyLoad
          placeholder={
            <img src="http://localhost/diagnal/public/dummyImages/placeholder_for_missing_posters.png" />
          }
        >
          <img
            src={"http://localhost/diagnal/public/dummyImages/" + image}
            alt={name}
            // src="https://images.unsplash.com/photo-1536572701422-28e6051dd93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
            className="w-full "
            onError={onErrorGetSrc}
          />
        </LazyLoad>
      </div>
      <div className="pt-6">
        <p className="text-white truncate text-5xl font-light	">{name}</p>
      </div>
    </div>
  );
};
export default ItemCard;
