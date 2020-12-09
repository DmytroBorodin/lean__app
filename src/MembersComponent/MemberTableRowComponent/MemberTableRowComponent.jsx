import React from "react";
import {NavLink} from "react-router-dom";
const MemberTableRow = (props, {match}) => {


    return (
        <div className='mm__table__row'>
            <p className="mm__table__col name">
                <img src={props.userIcon}/>
                <span className="text__block">
                    {props.name}
                    <NavLink to={`/${props.exactPath}`}>
                        <span className="icon-settings"></span>
                    </NavLink>
                </span>
            </p>
            <p className="mm__table__col email">
                {props.email}
            </p>
            <p className={"mm__table__col status" + ' ' + props.status}>
                <span className='mm__status'>
                    {props.status}
                </span>
            </p>
            <p className="mm__table__col role">
                <NavLink to={'/business/edit_member_access'}>
                    {props.role}
                </NavLink>
            </p>
            <p className="mm__table__col approve">
                {props.approve}
            </p>
        </div>
    )
}

export default MemberTableRow;