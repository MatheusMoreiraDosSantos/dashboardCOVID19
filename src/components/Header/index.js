import React from 'react';

import { 
  Container,
  Button,
  ButtonMobile
} from './styles';

//icon
import {BsFillInfoSquareFill} from 'react-icons/bs';

function Header() {
  return (
    <Container>
      <h2>DADOS COVID 19 <span> atualizados diariamente</span> </h2>
      <Button to='/aboult' >De onde esses dados vem?</Button>
      <ButtonMobile to='/aboult' ><BsFillInfoSquareFill/></ButtonMobile>
    </Container>
  );
}

export default Header;