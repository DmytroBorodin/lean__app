import React from "react";
import './Businesses.css';
import MainBtn from "../MainBtnComponent/MainBtnComponent";

const Businesses = (props) => {
    return (
        <div className='component__wrapper'>
            <h2 className="component__title">
                List of Businesses
            </h2>
            <div className="title__row bs__row">
                <p className="table__title">
                    Businesses
                </p>
                <MainBtn className={'bsns__btn'} btnText={'Create Business Account'}/>
            </div>
            <div className="component__wrap">
                <div className="businesses__table">
                    <div className="table__header">
                        <p className="col__title ">
                            Business Name
                        </p>
                        <p className="col__title d__none">
                            Description of Business
                        </p>
                        <p className="col__title d__none">
                            Legal Structure
                        </p>
                        <p className="col__title d__none">
                            Date Created
                        </p>
                        <p className="col__title">
                            Job Title
                        </p>
                        <p className="col__title">
                            Status
                        </p>
                    </div>
                    <div className="table__row">
                        <p className="table__item">
                            Kool Company
                        </p>
                        <p className="table__item d__none">
                            Oil & Energy
                        </p>
                        <p className="table__item d__none">
                            L.L.C
                        </p>
                        <p className="table__item d__none">
                            11/21/2020
                        </p>
                        <p className="table__item">
                            Admin
                        </p>
                        <p className="table__item">
                            Pending
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Businesses;