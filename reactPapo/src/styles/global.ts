import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${props => props.theme.font.family}
    }

    button{
        cursor: pointer;
    }

    /* Estilizando a barra de rolagem */
    ::-webkit-scrollbar {
        width: .625rem;
    }

    /* Estilizando o "track" (fundo) da barra de rolagem */
    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    /* Estilizando o "thumb" (alça) da barra de rolagem */
    ::-webkit-scrollbar-thumb {
        background-color: #38B6FF;
        border-radius: .25rem;
    }

    /* Estilizando o "thumb" quando estiver em estado "hover" */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`
