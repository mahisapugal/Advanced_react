import React from "react";
import Layout from "./../Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../Assets/i1.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>AdmitKaro Website</h1>
          <p>Best Colleges in World</p>
          <Link to="/list">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;