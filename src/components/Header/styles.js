import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  padding: 15px;
  background: var(--secondary);
  color: var(--like)
`;

export const Button = styled.button`
    border: 0;
    border-radius: 6px 6px 0 0;
    padding: 4px;
    margin-bottom: -15px;
    
    font-size: 18px;

    background: var(--like);
    color: var(--white);
    transition: 0.2;

    &:hover{
        opacity: 0.6;
    }

`;