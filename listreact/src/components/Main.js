import React, { Component } from "react";

import "../components/Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
  }

  inputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }


  render () {
    const { novaTarefa } = this.state;

    return (
     <div className="main">
       <h1>Lista de tarefas</h1>

      <form action="#">
        <input onChange={this.inputChange} type="text" />
        <button type="submit">Enviar</button>
      </form>
     </div>
    );
  }
}
