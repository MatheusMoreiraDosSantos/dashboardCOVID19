import React from 'react';

import { Container, LinkDoc, Back } from './styles';

//img
import logo from '../../assets/download.svg';
import covid from '../../assets/covid19.png';

//icon back
import {TiArrowBack} from 'react-icons/ti';

function Aboult() {
  return (
      <Container>
          <Back to='/'>
            <TiArrowBack/>
          </Back>
          <br/>
          <img src={logo} alt='logo postman' />
          <h3>Postman COVID-19 API Resource Center</h3>
          <div>
            <p>
                Durante a atual nova pandemia de coronavírus
                (COVID-19), aqueles que estão na linha de frente 
                - incluindo profissionais de saúde, 
                pesquisadores e especialistas do governo 
                - precisam de acesso rápido e fácil a dados
                críticos em tempo real. Esse tipo de troca
                de informações é o que as APIs fazem de melhor
                e, como uma empresa que prioriza as APIs,
                a Postman está comprometida em fornecer qualquer
                assistência que pudermos nessa área.
              </p>
            <img src={covid} alt='covid' />
            <LinkDoc to='https://covid-19-apis.postman.com' >Documentação da API utilizada por esse sistema</LinkDoc>
          </div>
      </Container>
  );
}

export default Aboult;