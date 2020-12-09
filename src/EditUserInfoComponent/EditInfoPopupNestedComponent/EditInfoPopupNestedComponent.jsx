import React from "react";
import Identification from "./IdentificationComponent/IdentificationComponent";


const EditInfoPopupNested = ({match}) => {
    let component;
    if (match.params.businessPopupPage == 'identification') {
        component = <Identification/>
    }/*else if (match.params.creationPage == 'accept_t&c') {
        component = <AcceptTC/>
    }*/
    return (
        <div>
            {component}
        </div>
    )
}

export default EditInfoPopupNested;