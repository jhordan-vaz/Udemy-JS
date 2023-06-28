import React, { Component } from "react";

// Form
import { FaPlus } from "react-icons/fa";

import "../components/Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [
      "Café",
      "Beber água",
      "Estudar",
    ],
  };

  inputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }


  render () {
     const { novaTarefa, tarefas } = this.state;

    return (
     <div className="main">
       <h1>Lista de tarefas</h1>

      <form action="#" className="form">
        <input onChange={this.inputChange} type="text"
        value={novaTarefa}/>
        <button type="submit">
          <FaPlus />
        </button>
      </form>

      <ul className="tarefas">
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>
     </div>
    );
  }
}
