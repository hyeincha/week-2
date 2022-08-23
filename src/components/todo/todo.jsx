import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../../redux/modules/CURD";

function Todo({ work }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <Details>상세보기</Details>
        <H2>{work.title}</H2>
        <div>{work.body}</div>
      </div>
      <Btn_div>
        <Btn onClick={() => dispatch(toggleTodo(work.id))}>
          {work.isDone ? "취소" : "완료"}
        </Btn>
        <Btn onClick={() => dispatch(deleteTodo(work.id))}>삭제</Btn>
      </Btn_div>
    </Container>
  );
}

export default Todo;

let Container = styled.div`
  width: 200px;
  border: 4px solid #c7e4ff;
  border-radius: 10px;
  padding: 0px 24px 15px 24px;
`;

let Btn = styled.button`
  border: none;
  width: 50%;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
`;

let Btn_div = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

let Details = styled.p`
  font-size: 13px;
  text-align: right;
  margin: 15px 0px 0px 0px;
`;

let H2 = styled.h2`
  margin: 0px 0px 15px 0px;
`;
