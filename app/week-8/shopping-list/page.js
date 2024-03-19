"use client";

import Items from "./items";
import DisplayItem from "./displayItem";
import NewItem from "./newItem";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  if (!user) {
    return <p>Please login to view this page.</p>;
  }
  const [item, setItems] = useState([...Items]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (name) => {
    const cleanedName = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
      ""
    );
    console.log(cleanedName);
    setSelectedItemName(cleanedName);
  };

  const addItem = (newItem) => {
    setItems([...item, newItem]);
  };
  return (
    <main className="min-h-screen bg-black">
      <NewItem addItem={addItem} />
      <DisplayItem Items={item} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
export default Page;
