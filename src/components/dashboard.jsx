import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext.jsx';
import MoodInput from './inputs';
import MoodHistory from './history';
import FriendList from './friendList';
import MoodChart from './chart';


const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">
        Welcome, <span className="text-yellow-300">{user || 'Guest'}</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <MoodInput />
        <MoodHistory />
        <MoodChart />
        <FriendList />
      </div>
    </div>
  );
};

export default DashboardPage;
