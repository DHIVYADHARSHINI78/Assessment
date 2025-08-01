import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleViewItems = () => {
    navigate('/services');
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-100 text-center">
      <h1 className="text-4xl font-bold text-blue-800">Welcome to Firebrand Labs</h1>
      <p className="mt-4 text-lg text-gray-600">Innovating the future with code.</p>
      <button
        onClick={handleViewItems}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
      >
        View Services ↓
      </button>
    </div>
  );
};

export default Home;
