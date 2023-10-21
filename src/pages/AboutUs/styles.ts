import styled, { css } from 'styled-components'

interface ITitleProps {
  textColor: string
  backgroundColor: string
}

export const InicialPage = styled.div`


.textoinicial{
    width: 700px;
    display: flex;
    flex-direction: column;
    position: absolute;
    font-family: 'Ubuntu', sans-serif;

}

.textoinical, h1{
    color: #38B6FF;
    font-size: 50px;
    margin-top: 5rem;
    margin-left: 100px;
    
}
p{
    color: #38B6FF;
    font-size: 30px;
    margin-top: 2rem;
    margin-bottom: 6.25rem;
    margin-left: 6.25rem;

}

.logo{
    margin-top: 5rem; 
    margin-bottom: 50px;
    margin-left: 1000px;
}

.wave{
    margin-left: 0;
    flex-direction: column;
    width: 100%; 
    position; relative;
    z-index: 2;
    left: 0;
    rigth: 0;
} 

.waveb{
    flex-direction: column;
    width: 100%;
    position: absolute;
    height: 500px;
    margin-top: 325px;
    left: 0;
    rigth: 0;
    z-index: 1;
}
@media (max-width: 1199px) {
    .textoinicial, h1{
        font-size: 45px;
        margin-left: 90px
        margin-top: 50px;
    }

    p{
        color: #38B6FF;
        font-size: 25px;
        margin-top: 2rem;
        margin-bottom: 6.25rem;
        margin-left: 6.25rem;
    
    }
    
    .logo{
        margin-top: 100px; 
        margin-bottom: 1px;
        margin-left: 700px;
    }

    .wave{
        flex-direction: column;
        width: 67rem;
        left:0;
        rigth: 0;
        z-index: 2;
        margin-top: 20%;
    
    }

    .waveb{
        flex-direction: column;
        width: 67rem;
        margin-top: 525px;
        z-index: 1;
       
        
    }

    }
  
  @media (max-width: 919px) {
    .textoinicial, h1{
        font-size: 35px;
        margin-left: 2rem;
        margin-top: 50px;
    }

    p{
        color: #38B6FF;
        font-size: 22px;
        margin-top: 2rem;
        margin-bottom: 6.25rem;
        margin-left: 2rem;
    
    }
    
    .logo{
        margin-top: 100px; 
        margin-bottom: 1px;
        margin-left: 500px;
        width: 300px;
    }

    .wave{
        flex-direction: row;
        width: 52.5rem;
        margin-top: 200px;
    
    }

    .waveb{
        flex-direction: column;
        width: 53rem;
        left:0;
        rigth: 0;
        margin-top: 3px; 
        z-index: 1;
    }
  }

  @media (max-width: 770px) {
    h1{
        font-size: 32px;
        margin-top: 1px;
    }
    p{
        color: #38B6FF;
        font-size: 22px;
        margin-top: 12rem;
        margin-bottom: 6.25rem;
        margin-left: 2rem;
    
    }
    
    .logo{
        margin-top: 125px; 
        margin-bottom: 1px;
        margin-left: 150px;
        width: 200px;
    }

    .wave{
        flex-direction: row;
        width: 38.5rem;
        margin-top: 150px;
    
    }

    .waveb{
        flex-direction: column;
        width: 39rem;
        left:0;
        rigth: 0;
        margin-top: 38%;
        z-index: 1;
    }
  }
  
 

  @media (max-width: 610px) {
    .textoinicial{
        font-size: 40px;
        margin-left: 1rem;
        margin-top: 50px;
    }

    h1{
        font-size: 27px;
        margin-top: 10px;
    }

    p{
        color: #38B6FF;
        font-size: 20px;
        margin-top: 18rem;
        margin-bottom: 6.25rem;
        margin-left: 2rem;
    
    }
    
    .logo{
        margin-top: 150px; 
        margin-bottom: 175px;
        margin-left: 100px;
        width: 250px;
    }

    .wave{
        flex-direction: row;
        width: 30rem;
        margin-top: 1px;
    
    }

    .waveb{
        flex-direction: row;
        width: 30rem;
        margin-top: 23rem;
    }
    
  }

`

export const OurVision = styled.div`
.text{
    margin-top: 100px;
    color: #38B6FF;
    font-family: 'Ubuntu', bold;
    font-weight: 700;
}

h1{
    font-size: 45px;
    margin-left: 100px;
}

.OV{
    font-family: 'Ubuntu', bold;
    font-size: 30px;
    margin-left: 125px;
}

p{
    font-family: 'Ubuntu', regular;
    font-size: 30px;
    margin-left: 125px;
    margin-bottom: 100px;
    font-weight: 300;
}
@media (max-width: 1200px) {
    .text{
        margin-top: 100px;
        color: #38B6FF;
        font-family: 'Ubuntu', bold;
        font-weight: 700;
    }
    
    h1{
        font-size: 40px;
        margin-left: 75px;
    }
    
    .OV{
        font-family: 'Ubuntu', bold;
        font-size: 27px;
        margin-left: 100px;
    }
    
    p{
        font-family: 'Ubuntu', regular;
        font-size: 27px;
        margin-left: 100px;
        margin-bottom: 100px;
        font-weight: 300;
    }
    
}

@media (max-width: 919px) {
    .text{
        margin-top: 100px;
        color: #38B6FF;
        font-family: 'Ubuntu', bold;
        font-weight: 700;
    }
    
    h1{
        font-size: 35px;
        margin-left: 50px;
    }
    
    .OV{
        font-family: 'Ubuntu', bold;
        font-size: 27px;
        margin-left: 75px;
    }
    
    p{
        font-family: 'Ubuntu', regular;
        font-size: 27px;
        margin-left: 75px;
        margin-bottom: 100px;
        font-weight: 300;
    }
   

@media (max-width: 770px) {
    text{
        margin-top: 100px;
        color: #38B6FF;
        font-family: 'Ubuntu', bold;
        font-weight: 700;
    }
    
    h1{
        font-size: 30px;
        margin-left: 20px;
    }
    
    .OV{
        font-family: 'Ubuntu', bold;
        font-size: 24px;
        margin-left: 20px;
    }
    
    p{
        font-family: 'Ubuntu', regular;
        font-size: 24px;
        margin-left: 20px;
        margin-right: 30px;
        margin-bottom: 100px;
        font-weight: 300;
    }
   
 
}

@media (max-width: 610px) {
    text{
        margin-top: 100px;
        color: #38B6FF;
        font-family: 'Ubuntu', bold;
        font-weight: 700;
    }
    
    h1{
        font-size: 20px;
        margin-left: 20px;
    }
    
    .OV{
        font-family: 'Ubuntu', bold;
        font-size: 15px;
        margin-left: 20px;
    }
    
    p{
        font-family: 'Ubuntu', regular;
        font-size: 15px;
        margin-left: 20px;
        margin-bottom: 100px;
        font-weight: 300;
    }
 
}
`