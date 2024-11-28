import { useState, useContext } from "react";
import { HistoryContext } from "./context/HistoryContext";

const MoodInput = () => {
  const [mood, setMood] = useState("");
  const { setHistory } = useContext(HistoryContext);

  const updateMood = (newMood) => {
    setMood(newMood);
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">How are you feeling today?</h2>
      <div className="flex justify-around">
        <button onClick={() => updateMood("😊 Happy")} className="text-2xl">
          😃
          <p className="text-sm text-green-500">
            {" "}
            <b>Happy</b>
          </p>
        </button>
        <button onClick={() => updateMood("😐 Neutral")} className="text-2xl">
          😐
          <p className="text-sm text-green-700">
            {" "}
            <b>Neutral</b>
          </p>
        </button>
        <button onClick={() => updateMood("😢 Sad")} className="text-2xl">
          😢
          <p className="text-sm text-blue-700">
            {" "}
            <b>Sad</b>
          </p>
        </button>
        <button onClick={() => updateMood("🤒 Sick")} className="text-2xl">
          🤒
          <p className="text-sm text-purple-500">
            {" "}
            <b>Sick</b>
          </p>
        </button>
        <button onClick={() => updateMood("😡 Angry")} className="text-2xl">
          😡
          <p className="text-sm text-red-700">
            {" "}
            <b>Angry</b>
          </p>
        </button>
      </div>
      <p className="mt-4 text-lg">Your current mood: {mood}</p>
    </div>
  );
};

export default MoodInput;
