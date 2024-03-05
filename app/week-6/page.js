"use client";

import Items from "./items";
import DisplayItem from "./displayItem";
import NewItem from "./newItem";
import { useState } from "react";

function Page() {
  const [item, setItems] = useState([...Items]);

  const addItem = (newItem) => {
    setItems([...item, newItem]);
  };
  return (
    <main className="min-h-screen bg-black">
      <NewItem addItem={addItem} />
      <DisplayItem Items={item} />
    </main>
  );
}
export default Page;
