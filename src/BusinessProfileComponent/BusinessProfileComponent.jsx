import React from "react";
import './BusinessProfile.css';
import {Route, useRouteMatch} from "react-router-dom";
import NavBarLink from "../ProfileComponent/NavBarLinkComponent/NavBarLinkComponent";
import BusinessProfileNested from "./BusinessProfileNestedComponent/BusinessProfileNestedComponent";

const BusinessProfile = (props) => {

    let {path, url} = useRouteMatch();

    let linksState = [
        {
            linkId: 'basic_information',
            linkTitle: 'Basic Information',
            exactPath: 'business_profile',
        },
        {
            linkId: 'business_address',
            linkTitle: 'Business Address',
            exactPath: 'business_profile',
        },
        {
            linkId: 'bank_information',
            linkTitle: 'Bank Information',
            exactPath: 'business_profile',
        },
        {
            linkId: 'business_incorporation',
            linkTitle: 'Business Incorporation',
            exactPath: 'business_profile',
        },
        {
            linkId: 'products_and_services',
            linkTitle: 'Products and Services',
            exactPath: 'business_profile',
        },
    ]

    let links = linksState.map(item => <NavBarLink exactPath={item.exactPath} linkId={item.linkId} url={url} linkTitle={item.linkTitle}/>)

    return (
        <div className='component__wrapper'>
            <h2 className="component__title">
                Business Profile
            </h2>
            <div className="title__row business_profile__row">
                {links}
            </div>
            <Route path={'/business_profile/:businessProfilePage'} component={BusinessProfileNested}/>
        </div>
    )
}

export default BusinessProfile;