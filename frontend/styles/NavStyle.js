import styled from "styled-components"

// export const Logo = styled.nav`
//     // min-height: 15vh;
//     // display: flex;
//     // justify-content: space-between;
//     // alight-items: center;
//     // font-size: 1rem;
//     // a{
//     //     font-size: 1.2rem;
//     // }
//     img{
//         margin-left: 5px;
//         padding: 0.4rem;
//         width: 8%
//     }

// `;
export const NavStyles = styled.div`
    
    min-height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.70);
    a {
        margin-left: 2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5rem;
        color: #f1f1f1;
    }
    img{
        margin: 0.5rem;
        max-width: 7rem;
    }
    
`


export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 2rem;
    h2{
        font-size: 3rem;
    }
    div{
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;