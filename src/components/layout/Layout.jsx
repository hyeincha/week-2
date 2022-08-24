import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <LayOut>{props.children}</LayOut>;
};

export default Layout;

const LayOut = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
