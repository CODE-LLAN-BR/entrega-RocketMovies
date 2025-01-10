import styled from "styled-components";

import background from '../../assets/background.png';

export const Container = styled.div`
 display:flex;
 height:100vh;
`

export const Form = styled.form`
    width:34rem;
    margin:10rem 13rem 0;

    display:flex;
    flex-direction:column;
    align-items:center;


    >h1{
      font-size:4.8rem;
      font-weight:800;
      
      margin-bottom:.8rem;

      color:${({theme})=>theme.COLORS.PINK};
    }

    >p{
      font-size:1.4rem;
      margin-bottom:4.8rem;

      color:${({theme})=>theme.COLORS.GRAY};
      
    }

    >h2{
      font-size:2.4rem;
      font-weight:500;
      
      align-self:flex-start;

      margin-bottom:4.8rem;

    }

    >:nth-child(5){
      margin:.8rem 0 .8rem;
    }

    button{
      margin-top:1.6rem;
    }
    
    
    >a{
      margin-top:4.2rem;
      display:flex;
      align-items:center;

      >svg{
        margin-right:.8rem;
      }
      
      
      color:${({theme})=>theme.COLORS.PINK};
    } 


    
`;


export const Background = styled.div`
    flex:1;
    background:url(${background}) no-repeat center center;
    background-size:cover;
`;