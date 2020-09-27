import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  margin-bottom: 10px;
  padding: 15px;
  background: var(--secondary);
  color: var(--like);

  > h2 {
    > span{
      font-size: 14px;
      font-weight: 100;
    }
  }

  @media(max-width: 700px){
    background: var(--primary);
    > h2 {
      > span{
        display:none;
      }
    }
  }
`;

export const Button = styled(Link)`
    text-decoration: none;
    border: 0;
    border-radius: 6px 6px 0 0;
    padding: 10px 4px 10px 4px;
    margin-bottom: -15px;
    
    font-size: 18px;

    background: var(--like);
    color: var(--white);
    transition: 0.2;

    &:hover{
        opacity: 0.6;
    }

    @media(max-width: 700px){
        display:none;
    }
`;

export const ButtonMobile = styled(Link)`
  display: none;
  @media(max-width: 700px){
        display:flex;
        
        > svg {
          fill: var(--white);
          font-size: 20px;
        }
    }
`;