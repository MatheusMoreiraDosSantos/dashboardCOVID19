import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: var(--outline);
  width: 100%;
  max-width: 900px;
  border-radius: 5px;
  padding: 15px;
  color: var(--white);

  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  > h3 {
      font-weight: 100;
  }

  > img {
      width: 300px;
  }

  > div {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 25px;

    > img {
        width: 360px;
    }
    > p {
        margin-top: 30px;
    }
  }

    @media(max-width: 720px){
        > div{
            > img {
            width: 200px;
            }
        }
    }
    @media(max-width: 520px){
        > div{
            display: block;
            > img {
                display: none;
            }
        }
    }

`;

export const LinkDoc = styled.a`
    text-decoration: none;
    margin-top: 25px;
    color: var(--white);
    background: var(--like);
    padding: 4px;
    border-radius: 3px;

    &:hover{
        opacity: 0.8;
    }
`;

export const Back = styled(Link)`
    text-decoration: none;
    float: right;
    > svg {
        font-size: 50px;
        fill: var(--white);
    }
`;