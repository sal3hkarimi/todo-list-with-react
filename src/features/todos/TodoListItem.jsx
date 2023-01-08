import { actionType } from "../../Context/reducer";
import { useTodoDispatch } from "../../Context/todo-context";
import { ReactComponent as TimesSolid } from "./times-solid.svg";

export const availableColors = ["green", "blue", "orange", "purple", "red"];
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const TodoListItem = ({ text, color, id, status }) => {

  // dispatcher
  const dispatch = useTodoDispatch();
  const changeColor = (color) => {
    dispatch({
      type: actionType.CHENGE_COLOR,
      payload: {
        id,
        color,
      },
    });
  };
  const deleteItem = () => {
    dispatch({
      type: actionType.DELETE_TASK,
      payload: { id },
    });
  };
  const handleToggle = () => {
    console.log(id);
    dispatch({
      type: actionType.COMPLETED,
      payload: {id}
    });
  };

  const colorOptions = availableColors.map((c) => (
    <option onClick={() => changeColor(c)} key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={status}
            onChange={handleToggle}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            defaultValue={color}
            style={{ color: color }}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={deleteItem}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
