import React, { useState } from 'react';

const MoodInput = () => {
  const [mood, setMood] = useState('😊');

  const updateMood = (newMood) => {
    setMood(newMood);
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">How are you feeling today?</h2>
      <div className="flex justify-around">
        <button onClick={() => updateMood('😊')} className="text-3xl">
          😊
        </button>
        <button onClick={() => updateMood('😢')} className="text-3xl">
          😢
        </button>
        <button onClick={() => updateMood('😡')} className="text-3xl">
          😡
        </button>
      </div>
      <p className="mt-4 text-lg">Your current mood: {mood}</p>
    </div>
  );
};

export default MoodInput;
