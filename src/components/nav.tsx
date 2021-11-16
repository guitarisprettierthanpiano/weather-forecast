import * as React from 'react';
import { NavLink } from 'react-router-dom'

interface Props{
}

const Navigation: React.FC<Props> = (props) => {

    return(
    <nav>
        <ul>
            <NavLink
            exact activeClassname='active' to='/'>
                <li>Today</li>
            </NavLink>

            <NavLink
            activeClassname='active' to='/hourly'>
                <li>Hourly</li>
            </NavLink>

            <NavLink
            activeClassname='active' to='/daily'>
                <li>Daily</li>
            </NavLink>

            <li>Radar</li>
        </ul>
    </nav>
    )
}

export default Navigation;