import React from "react";
import {NavLink} from "react-router-dom";


const Payees = (props) => {
    return (
        <div>
            <NavLink to={`/${props.exactPath}`}>
                Click to open popup
            </NavLink>
        </div>
    )
}

export default Payees;