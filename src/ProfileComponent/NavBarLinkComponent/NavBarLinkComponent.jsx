import React from "react";
import {NavLink} from "react-router-dom";


const NavBarLink = (props) => {
    return (
        <NavLink to={`/${props.exactPath}/${props.linkId}`}  className='nav__row__link'>
            {props.linkTitle}
        </NavLink>
    )
}

export default NavBarLink;