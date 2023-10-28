import styled, { css } from 'styled-components'

interface ITitleProps {
  textColor: string
  backgroundColor: string
}

export const InicialPage = styled.div`


.textoinicial{
    margin-left: 100px;
    margin-top: 120px;
    font-family: 'Ubuntu', sans-serif;
}

#logo{
    margin-left: 1000px;
    margin-top: -250px;
}

.textoinicial p{
    font-size: 24px;
    margin-left: 60px;
    align-content: right; 
}

.textoinicial h1{
    font-size: 42px; 
}

.waves{
    margin-bottom: 600px;
    align-items: center;
}
.wave{
    position: absolute;
    margin-bottom: 510px;
}

.waveb{
    position: absolute;

}

#wavea{
    height: 575px;
    width: 100%;
} 

#waveb{
    height: 450px;
    width: 100%;
}

@media (max-width: 1200px) {
    .textoinicial{
        font-size: 45px;
        margin-left: 80px
        margin-top: 50px;
    }

    .logo #logo{
        width: 300px;
        margin-top: -350px;
        margin-left: 600px;
    }

    .textoinicial h1{
        font-size: 35px;
        font-weight: 600;
        margin-left: 10px;
        margin-top: 20%;
    }

    .textoinicial p{
        color: #38B6FF;
        font-size: 20px;
        margin-bottom: 6.25rem;
        margin-left: 30px;
    }

    .waves{
        margin-bottom: 600px;
        align-items: center;
    }
    .wave{
        position: absolute;
        margin-bottom: 510px;
    }
    
    .waveb{
        position: absolute;
    
    }
    
    #wavea{
        height: 595px;
        width: 100%;
    } 
    
    #waveb{
        height: 550px;
        width: 100%;
    }

    }
  
  @media (max-width: 919px) {
    .textoinicial{
        margin-left: 3rem;
        margin-top: 50px;
    }

    .textoinicial h1{
        color: #38B6FF;
        font-size: 40px;
        margin-top: 100px;
        margin-bottom: 6.25rem;
        margin-left: 75px;
    }

    .textoinicial p{
        color: #38B6FF;
        font-size: 30px;
        margin-top: -80px;
        margin-right: 300px;
        margin-left: 100px; 
        
    
    }
    
    .logo #logo{
        margin-top: -50px; 
        margin-bottom: 1px;
        margin-left: 125px;
        width: 250px;
    }

    .waves{
        margin-bottom: 600px;
        align-items: center;
    }
    .wave{
        position: absolute;
        margin-bottom: 510px;
    }
    
    .waveb{
        position: absolute;
    
    }
    
    #wavea{
        height: 550px;
        width: 100%;
    } 
    
    #waveb{
        height: 500px;
        width: 100%;
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
    
    #logo{
        margin-top: 125px; 
        margin-bottom: 1px;
        margin-left: 150px;
        width: 200px;
    }

    .waves{
        margin-bottom: 600px;
        align-items: center;
    }
    .wave{
        position: absolute;
        margin-bottom: 510px;
    }
    
    .waveb{
        position: absolute;
    
    }
    
    #wavea{
        height: 550px;
        width: 100%;
    } 
    
    #waveb{
        height: 500px;
        width: 100%;
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
        margin-top: -25px;
    }

    .textoinicial p{
        color: #38B6FF;
        font-size: 24px;
        margin-top: -70px;
        margin-bottom: 6.25rem;
        margin-right: 100px;   
    }
    
    #logo{
        margin-top: 150px; 
        margin-bottom: 175px;
        margin-left: 100px;
        width: 250px;
    }

    .waves{
        margin-bottom: 600px;
        align-items: center;
    }
    .wave{
        position: absolute;
        margin-bottom: 510px;
    }
    
    .waveb{
        position: absolute;
    
    }
    
    #wavea{
        height: 550px;
        width: 100%;
    } 
    
    #waveb{
        height: 515px;
        width: 100%;
    }
    
  }

`

export const OurVision = styled.div`
.text{
    margin-top: 100px;
    color: #38B6FF;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 600;
}

h1{
    margin-left: 105px;
    margin-top: 75px;
    font-size: 42px;
}

h3{

    margin-left: 150px;
    font-size: 28px;
}

.OV{
    font-family: 'Ubuntu', sans-serif;
    color: #38B6FF;
}

p{
    font-family: 'Ubuntu', sans-serif;
    font-size: 28px;
    margin-left: 150px;
    margin-bottom: 100px;
    font-weight: 300;
}
@media (max-width: 1200px) {
    .text{
        margin-top: 100px;
        color: #38B6FF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    }
    
    h1{
        font-size: 40px;
        margin-left: 75px;
    }
    
    .OV{
        font-family: 'Ubuntu', sans-serif;
        font-size: 27px;
        margin-left: 20px;
    }
    
    p{
        font-family: 'Ubuntu', sans-serif;
        font-size: 27px;
        margin-left: 150px;
        margin-bottom: 100px;
        font-weight: 300;
    }
    
}

@media (max-width: 919px) {
    .text{
        margin-top: 100px;
        color: #38B6FF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    }
    
    h1{
        font-size: 35px;
        margin-left: -20px;
    }
    
    .OV{
        font-family: 'Ubuntu', sans-serif;
        font-size: 27px;
        margin-left: 75px;
    }
    
    h3{
        margin-left: 50px;
    }

    p{
        font-family: 'Ubuntu', sans-serif;
        font-size: 23px;
        margin-left: 50px;
        margin-bottom: 100px;
        font-weight: 300;
    }
   

@media (max-width: 770px) {
    text{
        margin-top: 100px;
        color: #38B6FF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    }
    
    h1{
        font-size: 30px;
        margin-left: 20px;
    }
    
    .OV{
        font-family: 'Ubuntu', sans-serif;
        font-size: 24px;
        margin-left: 20px;
    }
    
    p{
        font-family: 'Ubuntu', sans-serif;
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
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    }
    
    h1{
        font-size: 30px;
        margin-left: 20px;
    }
    
    .OV{
        font-family: 'Ubuntu', sans-serif;
        font-size: 15px;
        margin-left: 20px;
    }
    
    p{
        font-family: 'Ubuntu', sans-serif;
        font-size: 21px;
        margin-left: 50px;
        margin-bottom: 100px;
        font-weight: 300;
    }

    h3{
        font-size: 20px;
    }
}
`