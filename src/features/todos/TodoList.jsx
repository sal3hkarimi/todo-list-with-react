import { useTodoState } from '../../Context/todo-context'
import TodoListItem from './TodoListItem'

const TodoList = () => {
    const todos = useTodoState()
    const keyTodos = Object.keys(todos)



    const todoItem = keyTodos.map(key => {
        return <TodoListItem
            key={key}
            id={key}
            text={todos[key].text}
            color={todos[key].color} />
    })

    


    return <ul className="todo-list">{todoItem}</ul>
}

export default TodoList
