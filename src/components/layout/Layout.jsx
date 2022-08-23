import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <Lay_out>{props.children}</Lay_out>;
};

export default Layout;

const Lay_out = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
