import React from "react";
import BankAccount from "../BankAccountComponent/BankAccountComponent";
import AcceptTC from "../AcceptTCComponent/AcceptTCComponent";

const CreateBusinessNested = ({match}) => {
    let component;
    if (match.params.creationPage == 'bank_account') {
        component = <BankAccount/>
    }else if (match.params.creationPage == 'accept_t&c') {
        component = <AcceptTC/>
    }
    return (
        <div>
            {component}
        </div>
    )
}

export default CreateBusinessNested;