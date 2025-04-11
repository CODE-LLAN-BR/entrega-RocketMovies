import styled from "styled-components";

export const Container=styled.div`
    
    overflow-y:hidden;

    >main{
        padding:4rem 12rem 0;

        >a{
            width:max-content;
            grid-area:head;

            margin-bottom:2.4rem;
            display:flex;
            align-items:center;

            color:${({theme})=>theme.COLORS.PINK};
            
            svg{
                margin-right:.8rem;
            }
        }

        h2{
            margin-bottom:4rem;

            font-size:3.6rem;
            font-weight:500;
        }

        h3{
            margin-bottom:2.4rem;

            font-size:2rem;
            font-weight:400;

            color:${({theme})=>theme.COLORS.GRAY_300};
        }
        
        section{
            margin-right:1.6rem;
        }


    }

    
    
`;

export const Form = styled.form`
        
        display:grid;
        grid-template-rows:70vh;
        
        grid-template-areas:
        "content";

    .formBox{  
        grid-area:content;
        overflow-y:auto;
    }
    

    .formBox::-webkit-scrollbar {
        width: .8rem;
        
    }

    .formBox::-webkit-scrollbar-track {
    background: transparent;        
    }

    .formBox::-webkit-scrollbar-thumb  {
    background-color: ${({theme})=>theme.COLORS.PINK};    
    border-radius: 20px;       

    
      
    }

    .inputBox{
        display:flex;
        
        gap:4rem;
        margin-bottom:4rem;
    }

    textarea{
        height:27rem;
        width:100%;

        border-radius:1rem;
        border:none;
        padding:1.6rem;
        margin-bottom:4rem;

        background-color:${({theme})=>theme.COLORS.BACKGROUND_700};
        color:${({theme})=>theme.COLORS.GRAY_500};

        resize:none;
        
    }
    

    .tagBox{
        display:flex;
        flex-wrap:wrap;
        gap:2.4rem;

        

        margin-bottom:4rem;
        padding:1.6rem;
        border-radius:.8rem;

        background-color:${({theme})=>theme.COLORS.BACKGROUND_BLACK};

        align-items:center;
        
    }

    .button-box{

        display:flex;
        margin-bottom:8rem;
        margin-right:1.6rem;
        gap:4rem;

        :nth-child(1){
            background-color:${({ theme })=> theme.COLORS.BACKGROUND_BLACK};
            color:${({ theme })=>  theme.COLORS.PINK};
        } 
    }
`;

