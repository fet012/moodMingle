import { useState } from "react";

const FriendList = () => {
  const [friends, setFriends] = useState(["Fet", "Taiwo"]);
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showInput, setShowInput] = useState(false);
  const addFriend = () => {
    setShowInput(true);
  };
  const addName = () => {
    if (name.trim() === "") {
      setErrorMessage("Please enter a name");
    } else if (name.length < 5) {
      setErrorMessage(" Name should not be less than 5 words");
    } else {
      setFriends([...friends, name]);
      setName("");
      setErrorMessage("");
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index} className="text-lg">
            {friend}
          </li>
        ))}
      </ul>
      <button
        onClick={addFriend}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add Friend
      </button>
      {showInput && (
        <div>
          <input
            type="text"
            className="w-full h-5 p-5 mt-2"
            placeholder="Enter your friend name"
            onChange={(e) => setName(e.target.value)}
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            onClick={addName}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            ADD
          </button>
        </div>
      )}
    </div>
  );
};

export default FriendList;
