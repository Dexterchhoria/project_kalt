import React from "react";
import { FlipWords } from "../../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["DISCOVER MORE", "EXPERIENCE MORE", "UNCOVER MORE", "UNDERSTAND MORE"];

  return (
    <div>
        <FlipWords words={words} /> <br />
    </div>
      
  );
}
