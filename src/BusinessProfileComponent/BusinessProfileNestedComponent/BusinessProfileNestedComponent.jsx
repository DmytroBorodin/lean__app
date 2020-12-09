import React from "react";
import BusinessIncorporation from "./BusinessIncorporationComponent/BusinessIncorporationComponent";


const BusinessProfileNested = ({match}) => {
    let component;
    if (match.params.businessProfilePage == 'business_incorporation') {
        component = <BusinessIncorporation/>
    }/*else if (match.params.creationPage == 'accept_t&c') {
        component = <AcceptTC/>
    }*/
    return (
        <div>
            {component}
        </div>
    )
}

export default BusinessProfileNested;