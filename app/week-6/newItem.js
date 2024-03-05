"use client";
import { useState } from "react";
function NewItem({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [id, setId] = useState(0);

  const submitFunction = (event) => {
    setId((prev) => prev + 1);
    const newItem = { id, name, quantity, category };
    addItem(newItem);
    event.preventDefault();
    console.log(newItem);
  };

  return (
    <form
      onSubmit={submitFunction}
      className=" bg-cyan-500 border ml-35 mr-35 border-solid border-black "
    >
      <label className="text-3xl m-5">
        Name:{" "}
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          required
        />
      </label>
      <label className="text-3xl m-5">
        Quantity:{" "}
        <input
          type="number"
          min={1}
          max={99}
          onChange={(event) => setQuantity(event.target.value)}
          value={quantity}
        />
      </label>
      <label className="text-3xl m-5">
        Category:{"  "}
        <select
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option value="Produce"> Produce</option>
          <option value="Dairy"> Dairy</option>
          <option value="Bakery"> Bakery</option>
          <option value="Meat"> Meat</option>
          <option value="Frozen Foods"> Frozen Foods</option>
          <option value="Canned Goods"> Canned Goods</option>
          <option value="Dry Goods"> Dry Goods</option>
          <option value="Beverages"> Beverages</option>
          <option value="Snacks"> Snacks</option>
          <option value="Household"> Household</option>
          <option value="Other"> Other</option>
        </select>
      </label>
      <label className="text-3xl m-5 ">
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-white text-black rounded p-2"
        ></input>
      </label>
    </form>
  );
}

export default NewItem;
