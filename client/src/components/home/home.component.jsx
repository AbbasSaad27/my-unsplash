import React from "react";
import Header from "../header/header.component";
import "./home.styles.css";

const Home = ({ style }) => {
  return (
    <main className="home-container" style={{ ...style }}>
      <Header />
    </main>
  );
};

export default Home;
