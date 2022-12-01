import Link from 'next/link';
import { NavStyles, NavItems } from '../styles/NavStyle';

export default function Nav(){
    return(
        <NavStyles>
            <Link href={`/`}>
                <img src="https://app.greenrope.com/users/myteam46998/Media241.png?202106240524" alt="" />
            </Link>
            <NavItems>
                <Link href={`/travel-members`}>Users</Link>
                <div>Trips</div>
                <div>Login</div>
            </NavItems>
        </NavStyles>
    );
}