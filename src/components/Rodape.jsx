import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: grey;
  text-align: center;
  height: 100%;
`;

function Rodape() {
  return (
    <StyledFooter>
      <p>Todos os direitos reservados &copy; 2023</p>
    </StyledFooter>
  );
}

export default Rodape;