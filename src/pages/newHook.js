import { useState } from "react";
import Tsom from "@/components/Tsom";
import Score from "@/components/Score";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 10,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];

const playScorePage = () => {
  const [scores, setScores] = useState(players);
  const resetScore = () => {
    scores.map((score, index) => {
      const newPlayerScore = [score];
      score = { newScore: score.playerScore };
      // console.log(score);
      newPlayerScore.push(score);
      console.log(newPlayerScore);

      return newPlayerScore;
    });
    return setScores(scores[0].playerScore);
  };
  console.log(resetScore);
  // const increment = (index) => {
  //   const updatedScore = [...playerScore];
  //   updatedScore[index].playerScore += 1;
  //   setScores(updatedScore);
  // };
  return (
    <div className="w-[530px] rounded-lg flex flex-col justify-center mx-auto border border-solid border-gray-300 p-8 mt-48">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Play Score</h1>
          <Tsom />
        </div>
        <p className="text-sm font-light">Hidden in the middle of text</p>
      </div>

      {scores.map((player, index) => {
        return (
          <Score
            key={index}
            playerScore={player.playerScore}
            playerName={player.playerName}
          />
        );
      })}
      {/* {scores.map((score, index) => {
        const newPlayerScore = [score];
        score = { newScore: score.playerScore };
        console.log(score);
        newPlayerScore.push(score);
        console.log(newPlayerScore);

        return (
          <Score
            key={index}
            playerScore={score.newScore}
            playerName={player.playerName}
          />
        );
      })} */}

      <div className="flex mt-20 justify-end">
        <button
          onClick={resetScore}
          className=" flex justify-center bg-green-500 w-[120px] h-14 items-center rounded-lg text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default playScorePage;
