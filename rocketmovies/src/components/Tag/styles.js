import styled from "styled-components";

export const Container=styled.span`
    font-family:"Roboto",sans-serif;
    font-size:1.2rem;

    background-color:${({theme})=>theme.COLORS.GRAY_100};
    color:${({theme})=>theme.COLORS.GRAY_TAG};

    padding:.5rem 1.6rem;

    border-radius:.8rem;

    
`;