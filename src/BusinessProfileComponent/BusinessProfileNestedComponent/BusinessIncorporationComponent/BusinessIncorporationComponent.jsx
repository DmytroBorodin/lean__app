import React from "react";
import './BusinessIncorporation.css';

const BusinessIncorporation = (props) => {
    return (
        <div className='bi__comp__wrap'>
            <div className="bi__container">
                <div className="bi__title__block">
                    <h3 className="bi__title">
                        Business Incorporation
                    </h3>
                    <button className="bi__edit__btn"></button>
                </div>
                <div className="bi__info__block">
                    <h4 className="bi__info__block__title">
                        Business Registration Number
                    </h4>
                    <p className="bi__info__block__text">
                        Kool Company
                    </p>
                </div>
                <div className="bi__info__block">
                    <h4 className="bi__info__block__title">
                        Business Incorporation Date
                    </h4>
                    <p className="bi__info__block__text">
                        Bhatia
                    </p>
                </div>
                <div className="bi__info__block">
                    <h4 className="bi__info__block__title">
                        Country/Jurisdiction of Incorporation
                    </h4>
                    <p className="bi__info__block__text">
                        Canada
                    </p>
                </div>
                <div className="bi__info__block">
                    <h4 className="bi__info__block__title">
                        Business Legal Structure
                    </h4>
                    <p className="bi__info__block__text">
                        L.L.C
                    </p>
                </div>
            </div>
            <div className="bi__main__footer">
                <p className="bi__main__footer__text">
                    Important: In order to be able to send payments, please add ALL BOD’s and stakeholders with more than 25% ownership <a className="text__link">here</a>.
                </p>
                <p className="bi__main__footer__text s">
                    If you would like to close your account, you can <a className="text__link">get in touch</a> or call us at <a className="text__link">+1 855 747 LEAN (5326)</a>.
                </p>
            </div>

        </div>
    )
}

export default BusinessIncorporation;