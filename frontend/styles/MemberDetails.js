import Link from 'next/link';

import styled from 'styled-components'

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    img{
        width: 40%;
    }
    h3{
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 0.5rem;
    }
    h4{
        margin-bottom: 1rem;
    }
`;

export const MemberInfo = styled.div`
    width: 40%;
    button{
        font-size: 1rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
    }
`