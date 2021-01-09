import React from "react";
import Header from "../../layout/header";
import ShortTask from "./shortTask";

export default function TaskList() {
  return (
    <div>
      <Header />
      <h3>All Tasks</h3>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="&#128269; Search"
          className="input-field"
        />
        <select name="status" id="task-area" className="input-select">
          <option value="personal">Personal</option>
          <option value="health">Health/Fitness</option>
          <option value="career">Career</option>
          <option value="social">Social</option>
        </select>
        <select name="status" id="task-status" className="input-select">
          <option value="todo">TO DO</option>
          <option value="inprogress">IN PROGRESS</option>
          <option value="done">DONE</option>
        </select>
      </form>
      <div className="task-container">
        <ShortTask />
      </div>
      <hr />
    </div>
  );
}