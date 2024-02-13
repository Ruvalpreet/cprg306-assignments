"use client";
import { useState } from "react";

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const submitFunction = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    alert(
      "You have added " +
        item.name +
        " belonging to " +
        item.category +
        " amount of " +
        item.quantity
    );
    console.log(item);
  };

  return (
    <div className=" bg-cyan-500 border ml-32 mr-32 border-solid border-black ">
      <form
        onSubmit={submitFunction}
        className="flex flex-wrap p-8 justify-center"
      >
        <label className="text-3xl m-5">
          Name:{"  "}
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          ></input>
        </label>
        <label className="text-3xl m-5">
          Quantity:{"  "}
          <input
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>
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
        <label className="text-3xl m-5">
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-white text-black rounded p-2"
          ></input>
        </label>
      </form>
    </div>
  );
}

export default NewItem;
