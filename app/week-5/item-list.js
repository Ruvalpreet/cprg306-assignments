"use client";
import Item from "./item";
import items from "./items";

import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setSortBy("name")}
        className="bg-blue-500 hover:bg-white text-black rounded p-2 ml-10 mr-10 mt-10 mb-2.5"
      >
        {" "}
        Name{" "}
      </button>
      <button
        onClick={() => setSortBy("category")}
        className="bg-blue-500 hover:bg-white text-black rounded ml-10 mr-10 mt-2.5 mb-10 p-2 "
      >
        {" "}
        category{" "}
      </button>
      {items.map((item) => (
        <div key={item.id}>{Item(item)}</div>
      ))}
    </div>
  );
}
