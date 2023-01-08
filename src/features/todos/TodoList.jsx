import { useTodoState } from "../../Context/todo-context";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useTodoState().todos;
  
  const todoItem = todos.map((todo) => {
    return (
      <TodoListItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        color={todo.color}
        status={todo.completed}
      />
    );
  });

  return <ul className="todo-list">{todoItem}</ul>;
};

export default TodoList;
