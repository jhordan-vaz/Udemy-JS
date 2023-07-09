import React, { Component } from "react";

export default class Main extends Component {
  

  
  render() {
    return (
     <section className="sectiontest">
      <div className="Navbar">
        <ul className="list">
          <li href="#" className="a">Play</li>
          <li href="#" className="a">Home</li>
          <li href="#" className="a">How to Play</li>
          <li href="#" className="a">Rules</li>
        </ul>
      </div>

      <section className="sectiontest">
        <div className="grid">
          <div className="col-content"></div>
          <div className="col-content"></div>
          <div className="col-content"></div>
          <div className="col-content"></div>
          <div className="col-content"></div>
          <div className="col-content"></div>
        </div>
      </section>
     </section>
     
    );
  }
}