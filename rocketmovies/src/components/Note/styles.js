import styled from "styled-components";

export const Container = styled.button`
    border:none;    
    border-radius:1.6rem;
    padding:3.2rem;

    background-color:${({theme})=> theme.COLORS.BACKGROUND_100};
    color:${({theme})=> theme.COLORS.WHITE};

    display:flex;
    flex-direction:column;


    h3{
        margin-bottom:.8rem;
    }

    .stars{
        margin-bottom:1.6rem;
    }
    
    p{
        text-align:justify;
        ;
    }
`;
