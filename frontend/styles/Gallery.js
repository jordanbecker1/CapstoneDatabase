import styled from "styled-components";

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 0.25fr));
    grid-gap: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;