import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  num?: number;
  func?: () => void; //Return whatever type and params
  person: Person;
  obj?: {
    field1: string;
  };
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null>(5);
  const [word, setWord] = useState({ text: "" });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  setCount(6);
  setWord({ text: "new word" });

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
