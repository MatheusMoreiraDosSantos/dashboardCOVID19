import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 800px;
    padding: 20px;
`;

export const Info = styled.div`
    margin-top: 50px;
    color: var(--white);
    display: flex;
    flex-direction: row;

    >h4{
        font-weight: 100;
        >span{
            font-size: 36px;
        }
        img{
            position: absolute;
            width: 60px;
            margin-left: 50px;
            margin-top: -20px;
        }
    }
`;

export const ContainerInfos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;