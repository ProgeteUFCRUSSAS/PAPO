import styled from 'styled-components';


export const ContentSection = styled.section`
	background-color: white;
    height: 100vh;
    font-family: 'Ruda', sans-serif;
    
    
`;

export const ContentBox = styled.div`
    width: 70%;
    heigth: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
   
    gap: 300px;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    max-width: 100%;

`;
export const ContentItem = styled.div`
    width: 20%;
    
    
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: #a6b8b9;
    padding: 1rem;
    
    heigth: 150px;
    background-color: white;
    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

   
   
`;

export const ContentText = styled.p`
    color: #38B6FF;



`;
export const ContentTextWrapper = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
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