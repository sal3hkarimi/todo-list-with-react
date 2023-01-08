import ColorFilters from "./ColorFilters";
import StatusFilter from "./StatusFilter";
import RemainingTodos from "./RemainingTodos";
import { useTodoDispatch, useTodoState } from "../../Context/todo-context";
import { actionType } from "../../Context/reducer";
import { useState } from "react";
import { useEffect } from "react";

export default function Footer() {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();

  function handleCompleted() {
    dispatch({
      type: actionType.MARK_ALL_COMPLETED,
      payload: 'text'
    });
  }

  function handleClearCompleted(){
    dispatch({
      type: actionType.CLEAR_COMPLETED,
      payload: 'text'
    })
  }

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={() => handleCompleted()}>
          Mark All Completed
        </button>
        <button className="button" onClick={()=> handleClearCompleted()}>Clear Completed</button>
      </div>

      <RemainingTodos />
      <StatusFilter />
      <ColorFilters value={[]} />
    </footer>
  );
}
