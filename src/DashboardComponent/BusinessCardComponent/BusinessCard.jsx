import React from "react";
import './BusinessCard.css';

const BusinessCard = (props) => {
    return (
        <div className='business__card'>
            <div className="business__card__header">
                <h3 className="card__name">
                    Kool Company
                </h3>
                <button className="edit__btn">
                    Edit
                </button>
            </div>
            <div className="business__card__body">
                <p className="business__card__text">
                    <span>Date Created:</span>
                    December 23, 2018
                </p>
            </div>
            <div className="business__card__footer">
                <button className="business__footer__btn">
                    Pending Approval
                </button>
            </div>
        </div>
    )
}

export default BusinessCard;