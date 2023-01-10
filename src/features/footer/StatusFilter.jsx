import { useState } from "react";
import { actionType } from "../../Context/reducer";
import { useTodoDispatch, useTodoState } from "../../Context/todo-context";

const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};



const StatusFilter = () => {
  const [status, setStatus] = useState(StatusFilters.All)
  
  const todos = useTodoState();
  const dispatch = useTodoDispatch();
  const filterTask = (e) => {
    setStatus(e.target.textContent.toLowerCase())
    dispatch({
      type: actionType.FILTER_ACTIVE,
      payload: e.target.textContent
    });
  };
  
  
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    // console.log(key);
    const value = StatusFilters[key];
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button onClick={(e)=>filterTask(e)} className={className}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

export default StatusFilter;
