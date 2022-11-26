import { useEffect, useState } from 'react'
import { actionType } from '../../Context/reducer'
import { useTodoDispatch } from '../../Context/todo-context'

export default function Header() {
    const [task, setTask] = useState('')
    const [newText, setNewText] = useState('')
    const dispatch = useTodoDispatch()

    const handleNewTask = (e) => {
        if (e.key === "Enter") {
            setNewText(task)
            setTask('')
        }
    }

    useEffect(() => {
        if (newText) {
            dispatch({
                type: actionType.NEW_TASK,
                payload: {
                    text: newText
                }
            })
            setNewText('')
        }
    }, [newText])

    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder='What needs to be done?'
                value={task}
                onChange={e => setTask(e.target.value)}
                onKeyDown={handleNewTask}
            />
        </header>
    )
}
