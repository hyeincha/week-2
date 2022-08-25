import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/CURD";

function Form() {
  const dispatch = useDispatch();

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
      <InputGroup>
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
      </InputGroup>
      <Btn>추가하기</Btn>
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

let InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

let Label = styled.label`
  font-size: 15px;
  font-weight: 700;
`;

let Input = styled.input`
  height: 40px;
  width: 220px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

let Btn = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #77b4cc;
  width: 120px;
  color: #fff;
  font-weight: bold;
  margin-left: 20px;
`;
