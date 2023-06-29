import React, { Component } from "react";

// Form
import { FaPlus } from "react-icons/fa";

// Tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "../components/Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if(!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if(tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) != -1) return;

    const novasTarefas = [...tarefas];

    if(index == -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "",
      });
    }
  }

  inputEdit = (e, index) => {
    const { tarefas } = this.state;


    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  inputDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  }

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

      <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>{tarefa}
            <span>
             <FaEdit onClick={(e) => this.inputEdit(e, index)} className="edit"/>
             <FaWindowClose onClick={(e) => this.inputDelete(e, index)} className="delete"/>
            </span>
          </li>
        ))}
      </ul>
     </div>
    );
  }
}
