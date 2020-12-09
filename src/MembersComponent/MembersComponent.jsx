import React from "react";
import './Members.css'
import MemberTableRow from "./MemberTableRowComponent/MemberTableRowComponent";
import userIcon from '../assets/imgs/user_1.svg';
import {Route, useRouteMatch} from "react-router-dom";

const Members = (props) => {

    let {path, url} = useRouteMatch();

    let tableRowsData = [
        {
            id: 1,
            name: 'Vishal Bhatia',
            email: 'koolguy@gmail.com',
            status: 'Pending',
            role: 'Admin',
            approve: 'No',
            userIcon: userIcon,
            exactPath: 'business/edit_user_information'
        },
        {
            id: 2,
            name: 'Nadir Ibrahim',
            email: 'nadir@gmail.com',
            status: 'Pending',
            role: 'Viewer',
            approve: 'No',
            userIcon: userIcon,
            exactPath: 'business/edit_user_information'
        },
    ]

    let tableRowsArray = tableRowsData.map(row => <MemberTableRow userIcon={row.userIcon} name={row.name}
                                                                  email={row.email} status={row.status}
                                                                  role={row.role} approve={row.approve}
                                                                  exactPath={row.exactPath} id={row.id}/>)

    return (
        <div className='component__wrapper'>
            <h2 className="component__title">
                Kool Company’s Members
            </h2>
            <p className="mm__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mm__container">
                <div className="mm__table__header mm__table__row">
                    <div className="mm__table__col__title name">Name</div>
                    <div className="mm__table__col__title email">Email</div>
                    <div className="mm__table__col__title status">Status</div>
                    <div className="mm__table__col__title role">Role</div>
                    <div className="mm__table__col__title approve">Approver?</div>
                </div>
                <div className="mm__table__row ">
                    <div className="add__member__block">
                        <span className="icon-user-plus"></span>
                        Add Member
                    </div>
                </div>
                {tableRowsArray}
            </div>
            <p className="mm__footer__text">
                Important: In order to be able to send payments, please add ALL BOD’s and stakeholders with more than 25% ownership.
            </p>
        </div>
    )
}

export default Members;