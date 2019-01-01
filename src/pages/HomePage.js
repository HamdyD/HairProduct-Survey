import React from "react";
import "./HomePage.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-class">
          <p id="txt1">NO. 1</p>
          <h1 id="txt2">THE BASICS</h1>
          <p id="txt3">
            Let's get to know each <br /> other
          </p>
          <p id="let-start">
            <a href="./second">LET'S START</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
