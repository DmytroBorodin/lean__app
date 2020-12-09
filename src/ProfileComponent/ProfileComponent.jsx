import React from "react";
import './Profile.css'
import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import NavBarLink from "./NavBarLinkComponent/NavBarLinkComponent";
import ProfileNested from "./ProfileNestedComponent/ProfileNestedComponent";

const Profile = (props) => {
    let {path, url} = useRouteMatch();

    let linksState = [
        {
            linkId: 'basic_info',
            linkTitle: 'Basic Information',
            exactPath: 'profile',
        },
        {
            linkId: 'personal_address',
            linkTitle: 'Personal Address',
            exactPath: 'profile',
        },
        {
            linkId: 'identification',
            linkTitle: 'Identification',
            exactPath: 'profile',
        }
    ]

    let links = linksState.map(item => <NavBarLink exactPath={item.exactPath} linkId={item.linkId} url={url} linkTitle={item.linkTitle}/>)
    return (
        <div className='component__wrapper profile'>
            <h2 className="component__title">
                Personal Profile
            </h2>
            <div className="title__row nav__row">
                {links}
            </div>
            <Route path={'/profile/:profilePage'} component={ProfileNested}/>
            <p className="profile__bottom__text">
                If you would like to close your account, you can <a href='#'>get in touch</a> or call us at <a href='#'>+1 855 747 LEAN (5326)</a>.
            </p>
        </div>
    )
}

export default Profile;