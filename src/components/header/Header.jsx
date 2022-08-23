import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div>My Todo List</div>
      <div>React</div>
    </Container>
  );
}
export default Header;

let Container = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
