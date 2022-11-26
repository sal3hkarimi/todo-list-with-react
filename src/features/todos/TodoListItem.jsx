import { useState } from "react";
import { actionType } from '../../Context/reducer'
import { useTodoDispatch, useTodoState } from '../../Context/todo-context'
import { ReactComponent as TimesSolid } from './times-solid.svg'


export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const TodoListItem = ({ text, color, id }) => {
    const todos = useTodoState()
    const [completed, setCompleted] = useState(todos[id].completed)
    const [showColor, setShowColor] = useState(color)


    // dispatcher
    const dispatch = useTodoDispatch()
    const changeColor = (color) => {
        setShowColor(color)
        dispatch({
            type: actionType.CHENGE_COLOR,
            payload: {
                id, color
            }
        })
    }
    const deleteItem = () => {
        dispatch({
            type: actionType.DELETE_TASK,
            payload: { id }
        })
    }
    const handleToggle = () => {
        setCompleted(!completed)
        dispatch({
            type: actionType.COMPLETED,
            payload: { id, completed }
        })
    }

    const colorOptions = availableColors.map((c) => (
        <option
            onClick={() => changeColor(c)}
            key={c}
            value={c}>
            {capitalize(c)}
        </option>
    ))
    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        defaultChecked={completed}
                        onClick={handleToggle}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        defaultValue={showColor}
                        style={{ color: showColor }}
                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button
                        className="destroy"
                        onClick={deleteItem}
                    >
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
