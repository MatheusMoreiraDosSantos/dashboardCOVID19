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

export const ContainerSearch = styled.div`
    display: flex;
    width: 100%;
    max-width: 400px;
    margin-top: 40px;
    background: var(--white);
    border-radius: 4px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
`;

export const ButtonSearch = styled.button`
    border: 0;
    border-radius: 4px;
    margin-left: 5px;
    padding: 8px;
    background: var(--like);
    color: var(--white);
    font-size: 18px;

    &:hover{
        opacity: 0.8;
    }
`;

export const ContainerResultSearch = styled.div`
    background: var(--secondary);
    padding: 15px;
    border-radius: 5px;
    display: flex;
    margin-top: 5px;
    width: 100%;
    justify-content: space-between;
    color: var(--white);

    > h4 {
        font-weight: 100;
        font-size: 26px;

        >span{
            font-size: 24px;
        }
    }
`;

export const ContainerChart = styled.div`
    width: 100%;
    background: var(--white);
    display:flex;
    justify-content: center;
`;