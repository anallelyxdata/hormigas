import React from "react";

export const Answer = () => {
  return (
    <>
      {answersRandom.map((answer, index) => (
        <button
          className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105}`}
          key={answer}
          onClick={() => handleClick(answer, index)}
        >
          <p className="font-medium text-center text-sm">{answer}</p>
        </button>
      ))}
    </>
  );
};
