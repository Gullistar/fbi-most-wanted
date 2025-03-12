import React from "react";
import Table from "../../Components/table/Table";
import "./HomePage.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="header">FBI Most Wanted List</h1>
      <Table />
    </div>
  );
};

export default Home;
