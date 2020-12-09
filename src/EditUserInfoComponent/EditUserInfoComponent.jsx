import React from "react";
import './EditUserInfo.css';
import NavBarLink from "../ProfileComponent/NavBarLinkComponent/NavBarLinkComponent";
import {NavLink, Route, useRouteMatch} from "react-router-dom";
import EditInfoPopupNested from "./EditInfoPopupNestedComponent/EditInfoPopupNestedComponent";

const EditUserInfo = (props) => {

    let {path, url} = useRouteMatch();

    let linksState = [
        {
            linkId: 'basic_info',
            linkTitle: 'Basic Information',
            exactPath: 'business/edit_user_information',
        },
        {
            linkId: 'personal_address',
            linkTitle: 'Personal Address',
            exactPath: 'business/edit_user_information',
        },
        {
            linkId: 'identification',
            linkTitle: 'Identification',
            exactPath: 'business/edit_user_information',
        },
    ]

    let links = linksState.map(item => <NavBarLink exactPath={item.exactPath} linkId={item.linkId} url={url} linkTitle={item.linkTitle}/>)

    return (
        <div className='popup__wrap'>
            <div className="popup__block">
                <button className="popup__close__btn">
                    <NavLink to={'/business/members'}>
                        <span className="icon-close_btn"></span>
                    </NavLink>
                </button>
                <div className="popup__content__wrap">
                    <h2 className="component__title">
                        Edit Nadir’s Information
                    </h2>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="title__row business_profile__row">
                        {links}
                    </div>
                    <Route path={'/business/edit_user_information/:businessPopupPage'} component={EditInfoPopupNested}/>
                </div>
            </div>
        </div>
    )
}

export default EditUserInfo;