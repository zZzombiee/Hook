import { useState } from "react";

const messages = ["learn react", "apply jobs", "invest your new income"];

const stepPage = () => {
  const [step, setStep] = useState(0);
  const [isHideSteps, setIsHideStep] = useState(true);

  const incrementStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };
  const toggleSptes = () => {
    setIsHideStep(!isHideSteps);
  };

  return (
    <div className="w-[500px] mx-auto border border-solid">
      <div className=" pb-5 flex justify-end">
        <div
          onClick={toggleSptes}
          className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full cursor-pointer"
        >
          X
        </div>
      </div>
      {isHideSteps && (
        <div>
          <div className="flex justify-between mb-10">
            <div
              className="flex justify-center items-center w-10 h-10 text-white rounded-full"
              style={{ backgroundColor: step >= 1 ? "purple" : "gray" }}
            >
              1
            </div>
            <div
              className="flex justify-center items-center w-10 h-10 text-white rounded-full"
              style={{ backgroundColor: step >= 2 ? "purple" : "gray" }}
            >
              2
            </div>
            <div
              className="flex justify-center items-center w-10 h-10 text-white rounded-full"
              style={{ backgroundColor: step >= 3 ? "purple" : "gray" }}
            >
              3
            </div>
          </div>
          <p className="mb-10 text-center ">{messages[step - 1]}</p>
          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className="rounded bg-blue-500 px-2 py-1"
            >
              prev
            </button>
            <button
              onClick={incrementStep}
              className="rounded bg-blue-500 px-2 py-1"
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default stepPage;
