"use client";
import Item from "./item";
import { useState } from "react";
function DisplayItem({ Items }) {
  const [sortBy, setSortBy] = useState("name");

  Items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  return (
    <div>
      <div
        onClick={() => setSortBy("name")}
        className="bg-blue-500 hover:bg-white text-black rounded p-2 ml-10 mr-10 mt-10 mb-2.5"
      >
        {" "}
        Name
      </div>
      <div
        onClick={() => setSortBy("category")}
        className="bg-blue-500 hover:bg-white text-black rounded p-2 ml-10 mr-10 mt-10 mb-2.5"
      >
        {" "}
        Category
      </div>
      {Items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
export default DisplayItem;
