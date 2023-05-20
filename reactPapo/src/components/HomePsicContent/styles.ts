import styled from 'styled-components';
import background from '../../assets/bg.gif';



export const ContentSection = styled.section`
	background-color: white
    height: 100vh;
    font-family: 'Ruda', sans-serif;
    margin: 100px;
   
    
`;
export const ContentHeader = styled.section`
/* Valores */

position: relative
width: 248px;
height: 80px;
left: 836px;


font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 70px;
line-height: 80px;
/* identical to box height, or 114% */

align-items: center;
text-align: center;
letter-spacing: -1.26081px;

color: #436DFF;


    
`;


export const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0;
    padding: 0.25rem;
    align-items: center;
    grid-area: content;
    margin: 0 auto;
    justify-content: space-between;
    width: 1370.5px;
    height: 300px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
export const ContentItem = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: #a6b8b9;
    padding: 1rem;
    width: 25vw;
    height: 100%;
    background-color: white;
    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    img{
        width: 400.94px;
        height: 277.38px;
    }
   
`;

export const ContentText = styled.p`
    color: #38B6FF;



`;
export const ContentCost = styled.div`
    text-align: center;
    width: 100%;
    heigth: 100%;
    border: 1.08197px solid #307CDE;
    border-radius: 37.8689px;
    padding: 30px;
    




`;
export const ContentDonate = styled.div`
    text-align: center;
    



`;
export const ContentTitle = styled.h1`
    color: #38B6FF;
    

`;