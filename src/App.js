import React, { useEffect, useState } from "react";
import Dice from "./components/Dice";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    // 1) empty array
    const diceArray = [];
    // 2) loop up to 10
    for (let i = 0; i < 10; i++) {
      // 3) create random num between 1 to 6
      diceArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceArray;
  }

  // map elem and pass props to Dice
  const diceElement = dice.map((num) => {
    return <Dice value={num} />;
  });

  return (
    <main>
      <div className="container">{diceElement}</div>
    </main>
  );
}
