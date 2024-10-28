import React from "react";

function Cards({ item }) {
  return (
    <div>
      <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions  justify-between">
            <div className="badge badge-outline   hover:bg-pink-500  ">
              ${item.price}
            </div>
            <div className="p-3 rounded-2xl badge badge-outline  hover:bg-pink-500  cursor-pointer">
              bye now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
