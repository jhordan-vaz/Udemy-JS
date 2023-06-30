import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

import "./Form.css";

export default function Form({ handleSubmit, inputChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
        <input onChange={inputChange} type="text"
        value={novaTarefa}/>
        <button type="submit">
          <FaPlus />
        </button>
      </form>
  );
}

// Form.defaultProps = {
//   novaTarefa: "Valor Padrão",
// };

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
