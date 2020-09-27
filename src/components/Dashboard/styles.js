import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 800px;
    padding: 20px;
    padding-top: 30;
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
    }
    @media(max-width: 1060px){
        >h4{
            font-weight: 100;
            font-size: 14px;
                >span{
                    font-size: 26px;
                }
        }
    }
    @media(max-width: 635px){
        background: var(--secondary);
        padding: 8px;
        border-radius: 5px;
        width: 300px;
        margin-top:0;
        margin-bottom:8px;
        margin-left: auto;
        margin-right: auto;
        
        >h4{
            font-weight: 100;
            font-size: 20px;
                >span{
                    font-size: 26px;
                }
        }
    }
`;

export const ContainerInfos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    @media(max-width: 940px){
        display: grid;
        grid-template-columns: auto auto auto;
        margin-top: 150px;
    }
    @media(max-width: 635px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 60px;
        padding-top: 60px;
        overflow:scroll;
    }
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

    @media(max-width: 660px){
        display: block;
        height: 100%;
        margin-top: 40px;
        margin-bottom: 20px;
        > h4 {
            font-weight: 100;
            font-size: 18px;

            >span{
                font-size: 22px;
            }
        }
    }
`;

export const ContainerChart = styled.div`
    width: 100%;
    background: var(--white);
    display:flex;
    justify-content: center;

    @media(max-width: 660px){
        display: none;
    }
`;