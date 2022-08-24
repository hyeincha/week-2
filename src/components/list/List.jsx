import { useSelector } from "react-redux";
import Todo from "../todo/todo";
import styled from "styled-components";

function List() {
  const todo = useSelector((state) => state.todolist.todo);

  return (
    <ListContainer>
      <h2>🔥 In progress 🔥</h2>
      <ListWrapper>
        {todo.map((work) => {
          if (!work.isDone) {
            return <Todo work={work} key={work.id} />;
          } else {
            return null;
          }
        })}
      </ListWrapper>
      <h2>🎉 Done! 🎉</h2>
      <ListWrapper>
        {todo.map((work) => {
          if (work.isDone) {
            return <Todo work={work} key={work.id} />;
          } else {
            return null;
          }
        })}
      </ListWrapper>
    </ListContainer>
  );
}

export default List;

let ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 40px;
`;

let ListContainer = styled.div`
  padding: 0 24px;
`;
