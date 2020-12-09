import React from "react";
import MainBtn from "../../../MainBtnComponent/MainBtnComponent";


const Identification = (props) => {
    return (
        <div className='component__block'>
            <h3 className="component__title">
                Basic Information
            </h3>
            <div className="edit__info__block">
                <h4 className="edit__info__title">
                    First Name
                </h4>
                <input className="edit__info__input" placeholder='Nadir'/>
            </div>
            <div className="edit__info__block">
                <h4 className="edit__info__title">
                     Last Name
                </h4>
                <input className="edit__info__input" placeholder='Ibrahim'/>
            </div>
            <div className="edit__info__block">
                <h4 className="edit__info__title">
                    Primay Email Address
                </h4>
                <input className="edit__info__input" placeholder='nadir@gmail.com'/>
            </div>
            <div className="edit__info__block">
                <h4 className="edit__info__title">
                    Personal Phone Number
                </h4>
                <input className="edit__info__input" placeholder='+1 905 123 4567'/>
            </div>
            <MainBtn btnText='Save' className='popup__save__btn'/>
        </div>
    )
}

export default Identification;