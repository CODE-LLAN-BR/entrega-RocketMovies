import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        font-size:62.5%;
        }
    
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        -webkit-font-smoothing:antialiased;
        
        
        
        
    }
        
    body{
        
        background-color:${({theme})=>theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        font-size:1.6rem;
        
    }

    a{
        text-decoration:none;
        transition:filter 0.4s;
    }

    body ,  button  {
        font-family:'Roboto Slab',serif;
        outline:none;
        

    }

    input , textarea {
        font-family:'Roboto',serif;
        outline:none;
        

       >textarea{
        resize:none;
       } 
    }

    button:hover {
        transition:.4s;
        filter: brightness(0.8);
        cursor: pointer;
        
    }
    a:hover {
        filter: brightness(0.8);
    } 


`;
