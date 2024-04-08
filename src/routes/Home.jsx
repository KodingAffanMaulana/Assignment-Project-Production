import React from 'react';

const Home = () => {
  return (
    <>
      <div className="home min-h-[88vh] relative bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-pink-500 to-90% ... bg-opacity-20 backdrop-blur-xl">
        <div className="overflow-hidden">
          <h1 className="font-nabla text-6xl text-red-500 overflow-hidden">Simple CRUD Photos</h1>
          <p className="text-white font-serif text-xl">
            Keep all your memories here and show others
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
