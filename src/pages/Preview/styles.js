import styled from "styled-components";

export const Container = styled.div`
        height:100vh;
        overflow-y:hidden;


    main{
        
        padding:4rem 11rem 6rem;
        >a{
            grid-area:head;

            display:flex;
            align-items:center;
            gap:.8rem;
            margin-bottom:2.4rem;
            color: ${({theme})=>theme.COLORS.PINK};
        }
    }




`;

export const Content = styled.div`

    display:grid;
    grid-template-rows:80vh;
    grid-template-areas:"content";

    
    section{
        grid-area:content;
        
        overflow-y:auto;
    }
    section::-webkit-scrollbar {
        width: .8rem;
        
    }
    section::-webkit-scrollbar-track {
    background: transparent;        
    }
    section::-webkit-scrollbar-thumb  {
    background-color: ${({theme})=>theme.COLORS.PINK};    
    border-radius: 20px; 
    }

    .head{
        display:flex;
        align-items:center;
        gap:2rem;

        margin-bottom:2.4rem;

        h2{
            font-size:3.6rem;
        }
        
    }

    .updated{
        display:flex;
        align-items:center;
        gap: 0.8rem;

        margin-bottom:4rem;
        
        img{
            height:1.6rem;
            width:1.6rem;

            border-radius:50%;
        }

        span{
            display:flex;
            align-items:center;
            gap:.8rem;
            margin-left:.8rem;
            

            svg{
                color:${({theme})=>theme.COLORS.PINK};
            }
        }
        
    }

    .tags{
        display:flex;
        gap:.8rem;
        margin-bottom:4rem;
    }

    .text{

        text-align:justify;
        font-weight:300;
        line-height:2.4rem;

        margin-right:1.2rem;
    }

`;  