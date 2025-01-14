import styled from "styled-components";


export const Container = styled.div`
    height:100vh;
    overflow-y:hidden;
    
    .head{
        display:flex;
        align-items:center;
        justify-content:space-between;

        margin-bottom:3.8rem;
    
        h2{
        font-size:3.2rem;
        font-weight:400;
        }
        
        #button{
        max-width:21rem;
        } 
    }

    main{
        padding:5rem 6rem 0 ;
    
        
}
`;

export const Content = styled.div`
    display:grid;
    grid-template-rows:60vh;
    grid-template-columns:auto;
    
    grid-template-areas:"content";

    

    .contentData{
        grid-area:"content";
        
        overflow-y:auto;

        >a{
        margin-bottom:2.4rem;
        margin-right:.8rem;
        }
   
    }
    
    .contentData::-webkit-scrollbar {
    width: .8rem;               
    }

    .contentData::-webkit-scrollbar-track {
    background: transparent;        
    }

    .contentData::-webkit-scrollbar-thumb {
    background-color: ${({theme})=>theme.COLORS.PINK};    
    border-radius: 20px;       
      
    }
`;