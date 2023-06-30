import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "../Tarefas/Tarefas.css";


export default function Tarefas({ tarefas, inputDelete, inputEdit }) {
  return (
    <ul className="tarefas">
    {tarefas.map((tarefa, index) => (
      <li key={tarefa}>{tarefa}
        <span>
         <FaEdit onClick={(e) => inputEdit(e, index)} className="edit"/>
         <FaWindowClose onClick={(e) => inputDelete(e, index)} className="delete"/>
        </span>
      </li>
    ))}
  </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  inputDelete: PropTypes.func.isRequired,
  inputEdit: PropTypes.func.isRequired,
}
