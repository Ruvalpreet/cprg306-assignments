"use client";

import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import DisplayItem from "./displayItem";
import NewItem from "./newItem";
import { useState } from "react";
import { useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  if (!user) {
    return <p>Please login to view this page.</p>;
  }
  const [item, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleItemSelect = (name) => {
    const cleanedName = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
      ""
    );
    console.log(cleanedName);
    setSelectedItemName(cleanedName);
  };

  const loadItems = async () => {
    const items = await getItems({ userId: user.uid });
    setItems(items);
  };

  const handleAddItem = async (newItem) => {
    const itemRef = await addItem({ userId: user.uid, item: newItem });
    setItems([...item, itemRef]);
  };

  return (
    <main className="min-h-screen bg-black">
      <NewItem addItem={handleAddItem} />
      <DisplayItem Items={item} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
export default Page;
