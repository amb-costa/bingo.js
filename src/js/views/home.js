import React from "react";
import Card from "../../js/component/card.js";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5 bg-success">
    <h1>Cool bingo!</h1>
    <Card />
    <p>
      <img src={rigoImage} />
    </p>
    <a href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
    </a>
  </div>
);
