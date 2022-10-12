import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReducerType } from "../rootReducer";
import { Item } from "../slices/TodoSlice";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  //   background: gray;
`;

function TodoList() {
  const todos = useSelector<ReducerType, Item[]>((state) => state.todos);

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
