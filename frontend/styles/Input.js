import styled from "styled-components"

export const Input = styled.nav`
    
    background color: black;
    padding-bottom: 4rem;
    margin-bottom: 2rem;
    text-align: center;
    input[type=text]{
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
         border-radius: 20px;
         border: 1px solid rgba(0, 0, 0, 0.7);
        }
    input[type=text]:focus {
        outline: none;
        border: 1px solid #a0d18c;
    }

`;