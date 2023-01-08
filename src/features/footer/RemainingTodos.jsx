import { useTodoState } from "../../Context/todo-context";

const RemainingTodos = () => {
  let count = 0;
  const suffix = count <= 1 ? "" : "s";
  const todos = useTodoState();
  Object.keys(todos).map((todo) => {
    if(!todos[todo].completed){
        count++
    }
  });

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

export default RemainingTodos;
