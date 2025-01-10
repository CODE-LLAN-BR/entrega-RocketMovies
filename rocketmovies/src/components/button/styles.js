import styled from "styled-components";

export const Container = styled.button`
    width:100%;
    height:5.6rem;

    display:flex;
    align-items:center;
    justify-content:center;


    border:none;
    border-radius:1rem;
    font-weight:500;

    background-color:${({theme})=>theme.COLORS.PINK};
    color:${({theme})=>theme.COLORS.GRAY_100};

    
    
`;