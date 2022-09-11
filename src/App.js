import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Dice from "./components/Dice";

export default function App() {
  function allNewDice() {
    // 1) empty array
    const diceArray = [];
    // loop up to 10
    for (let i = 0; i < 10; i++) {
      // create random num between 1 to 6
      diceArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return diceArray
  }

  return (
    <main>
      <div className="container">
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
      </div>
    </main>
  );
}
