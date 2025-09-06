import React, { useState, useEffect } from "react";

const Typewriter = ({ phrases }: any) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedText.length < phrases[index].length) {
        setDisplayedText(
          (prevText) => prevText + phrases[index][displayedText.length]
        );
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1500); // Time to wait before starting the next phrase
      }
    }, 100); // Typing speed

    return () => clearTimeout(timer);
  }, [displayedText, index, phrases]);

  return (
    <div className="text-xl text-white font-mono ">
      <h1 className="font-semibold ">I am</h1>
      <h1 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
        {displayedText}
      </h1>
    </div>
  );
};

export default Typewriter;
