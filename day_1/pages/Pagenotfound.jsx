import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../Assets/i5.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Admission Website</h1>
          <p>Best Colleges In World</p>
          <Link to="/menu">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;