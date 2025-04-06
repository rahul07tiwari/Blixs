import React from "react";
import Feed from "../components/Feed"; // correctly points to the component

const Home = () => {
  return (
    <div className="home-page bg-gray-950">
      <h1>Home Page</h1>
      <Feed />
    </div>
  );
};

export default Home;
