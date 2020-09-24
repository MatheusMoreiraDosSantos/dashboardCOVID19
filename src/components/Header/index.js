import React from 'react';

import { 
  Container,
  Button
} from './styles';

function Header() {
  return (
    <Container>
      <h2>DADOS COVID 19</h2>
      <Button>De onde esses dados vem?</Button>
    </Container>
  );
}

export default Header;