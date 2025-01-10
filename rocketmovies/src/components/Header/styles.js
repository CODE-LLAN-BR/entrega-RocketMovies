import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    height:11.6rem;

    display:flex;
    align-items:center;

    

    background-color:${({theme})=>theme.COLORS.BACKGROUND};

    border-bottom:1px solid;
    border-bottom-color:${({theme})=>theme.COLORS.GRAY_200};


    h1{
        margin:0 6rem 0 12rem;

        color:${({theme})=>theme.COLORS.PINK};
    }

    .input{
        padding-left:2.4rem;
    }
    
`;


export const Leave = styled.div`
    margin:0 12rem 0 6rem;

    display:flex;
    

    section{
        display:flex;
        flex-direction:column;
        justify-content:center;
        font-size:1.4rem;

        width:max-content;


    }

    a{
        color:${({theme})=>theme.COLORS.GRAY_500};

        align-self:flex-end;
        
    }

    img{
        width:6.4rem;
        height:6.4rem;
        border-radius:50%;
        margin-left:8px;

    }
`;
