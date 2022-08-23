import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/CURD";

function Form() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.addtodo);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "" || body.trim() === "") return;
    dispatch(addTodo({ title, body }));
    setTitle("");
    setBody("");
  };

  return (
    <AddForm onSubmit={onSubmitHandler}>
      <Input_group>
        <Label>제목</Label>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Label>내용</Label>
        <Input
          type="text"
          name="title"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></Input>
        <Btn>추가하기</Btn>
      </Input_group>
    </AddForm>
  );
}

export default Form;

let AddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

let Input_group = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

let Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

let Input = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

let Btn = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #3a96c4;
  width: 120px;
  color: #fff;
  font-weight: bold;
  margin-left: 20px;
`;
