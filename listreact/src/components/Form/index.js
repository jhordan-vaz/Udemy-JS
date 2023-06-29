import React from "react";

export default function Form() {
  return (
    <form onSubmit={this.handleSubmit} action="#" className="form">
        <input onChange={this.inputChange} type="text"
        value={novaTarefa}/>
        <button type="submit">
          <FaPlus />
        </button>
      </form>
  )
}
