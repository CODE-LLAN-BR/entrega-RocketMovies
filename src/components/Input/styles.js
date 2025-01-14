import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:5.6rem;
    display:flex;
    align-items:center;
    
    background:${({theme})=>theme.COLORS.BACKGROUND_700};

    border-radius:1rem;
    
    svg{
        margin-left:1.6rem;
        color:${({theme})=>theme.COLORS.GRAY_500};
    }


    >input{

        margin-left:1.6rem;
        width:100%;
        height:5.6rem;

        border-radius:1rem;

        background:${({theme})=>theme.COLORS.BACKGROUND_700};

        color:${({theme})=>theme.COLORS.GRAY_500};

        
        border:none;

    }

    grid-area:input;
`;