import React from "react";
import './CreateBusiness.css';
import {Route, useRouteMatch} from "react-router-dom";
import NavBarLink from "../ProfileComponent/NavBarLinkComponent/NavBarLinkComponent";
import CreateBusinessNested from "./CreateBusinessNastedComp/CreateBusinessNastedComp";

const CreateBusiness = (props) => {

    let {path, url} = useRouteMatch();

    let linksState = [
        {
            linkId: 'bank_account',
            linkTitle: '1. Connect Bank',
            exactPath: 'create_business',
        },
        {
            linkId: 'accept_t&c',
            linkTitle: '2. Accept Terms & Conditions',
            exactPath: 'create_business',
        },
    ]

    let links = linksState.map(item => <NavBarLink exactPath={item.exactPath} linkId={item.linkId} url={url} linkTitle={item.linkTitle}/>)

    return (
        <div className='component__wrapper'>
            <h2 className="component__title">
                Creating a Business Account
            </h2>
            <div className="title__row create-business__row">
                {links}
            </div>
            <Route path={'/create_business/:creationPage'} component={CreateBusinessNested}/>
        </div>
    )
}

export default CreateBusiness;