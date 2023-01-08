import { actionType } from "../../Context/reducer";
import { useTodoDispatch, useTodoState } from "../../Context/todo-context";

const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const StatusFilter = ({ value: status }) => {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();
  const filterTask = () => {
    dispatch({
      type: actionType.FILTER_ACTIVE,
      payload: {text: 'ali'}
    });
  };
  


  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button onClick={filterTask} className={className}>
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
