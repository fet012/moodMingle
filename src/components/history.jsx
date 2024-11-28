import React, { useState } from 'react';

const MoodHistory = () => {
  const [history, setHistory] = useState([]); // Bug: No dynamic updates
  const updateHistory=()=> {
    setHistory((prevArray)=> [...prevArray, ...contextValue])
  }

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Mood History</h2>
      <ul className="list-disc pl-5">
        {history.map((mood, index) => (
          <li key={index} className="text-lg">
            {mood}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodHistory;

