import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Cource() {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4">
        <div className="max-w-screen-2xl  items-center justify-center text-center">
          <h1> </h1>
          <h1 className="text-2xl font-semibold md:text-4xl text-center pt-40">
            we're delight to have you{" "}
            <span className="text-pink-800">hear!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            veritatis asperiores architecto enim distinctio quod, aliquam
            dolorum nemo, repellat eum animi corrupti. Illum fugit ipsa nesciunt
            necessitatibus ut. Minus, eveniet?
          </p>
          <Link to="/">
            <button className="mt-6  bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-14">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <div className="items-center justify-center text-center">
          <Link to="/">
            <button className="mt-6 mb-11 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cource;
