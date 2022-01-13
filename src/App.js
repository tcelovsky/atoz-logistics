import "./App.css";
import React, { useState, useEffect } from "react";
import { db } from "./lib/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getInventory(db);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  async function getInventory(db) {
    const inventory = collection(db, "Inventory");
    const items = await getDocs(inventory);
    const itemsList = items.docs.map((doc) => doc.data());
    return itemsList;
  }

  return (
    <div className="App">
      <h1>Inventory</h1>
    </div>
  );
}

export default App;
