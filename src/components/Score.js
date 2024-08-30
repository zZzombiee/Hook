import { useState } from "react";

const Score = ({ playerScore, playerName, scorePlus, scoreMinus }) => {
  return (
    <div>
      <div className="flex justify-between  border-b-[1px] border-solid border-gray-300">
        <p className="flex justify-center items-center py-4">{playerName}</p>
        <div className="flex w-32 h-10 items-center justify-between bg-gray-200  rounded-3xl my-4">
          <button
            onClick={scoreMinus}
            className="w-10 h-10 border border-solid border-gray-300 rounded-full bg-white"
          >
            -
          </button>
          <p className="flex justify-center items-center">{playerScore}</p>

          <button
            onClick={scorePlus}
            className="w-10 h-10 border border-solid border-gray-300 rounded-full bg-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Score;
