import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;

    width:100%;
    height:100vh;

    >header{
        height:14.4rem;
        width:100%;

        display:flex;
        align-items:center;

        background-color:${({theme})=>theme.COLORS.BACKGROUND_100};

        a{
            margin-left:14.4rem;

            color:${({theme})=>theme.COLORS.PINK};

            display:flex;
            align-items:center;


            svg{
                margin-right:.8rem;
            }
        }

    }
`;

export const Form = styled.form`
    width:34rem;
    margin:-9rem auto;

    display:flex;
    flex-direction:column;
    align-items:center;

    :nth-child(3){
        margin-top:.8rem;
    }

    :nth-child(4){
        margin:2.4rem 0 .8rem;
    }
    
    a{
        margin-top:2.4rem;
    }
`;

export const Avatar = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;

    margin-bottom:6.4rem;

    
    >img{
        width:18.6rem;
        height:18.6rem;

        border-radius:50%;
    }

    >label { 
        transition:filter .4s;
        width:48px;
        height:48px;
        
        background-color:${({theme})=>theme.COLORS.PINK};

        border-radius:50%;

        display:flex;
        align-items:center;
        justify-content:center;

        position:absolute;
        bottom:7px;
        right:7px;

        cursor:pointer;

        input {
            display:none;
        }

        svg {
            width:20px;
            height:20px;

            color:${({theme})=>theme.COLORS.GRAY_100};
        }
    }

    >label:hover{
        filter: brightness(0.8)
    }
`;