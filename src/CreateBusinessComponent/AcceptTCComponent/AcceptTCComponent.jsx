import React from "react";
import MainBtn from "../../MainBtnComponent/MainBtnComponent";
import './AcceptTC.css';

const AcceptTC = (props) => {
    return (
        <div className='atc__comp__wrap'>
            <div className="atc__container">
                <h2 className="atc__title">
                    By checking the box, you are agreeing to our terms and conditions
                </h2>
                <div className="atc__accept__block">
                    <input className="atc__accept__btn" type='checkbox'/>
                    <p className="cb__text">
                        I hereby agree to the <a className="text__link">terms and conditions</a> set forth by Lean Payments.
                    </p>
                </div>
                <MainBtn btnText={'Next'} className={'atc__btn'}/>
            </div>
        </div>
    )
}

export default AcceptTC;