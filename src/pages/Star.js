import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  const handleChangeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="text-center mt-20 mx-auto w-fit">
      <p className="mb-4 text-2xl">How's your stray?</p>
      <div className="flex">
        {stars.map((star, index) => {
          return (
            <FaStar
              key={index}
              onClick={() => handleChangeRating(index + 1)}
              style={{ color: rating >= index + 1 ? "orange" : "gray" }}
              className="w-10 h-10"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Star;
