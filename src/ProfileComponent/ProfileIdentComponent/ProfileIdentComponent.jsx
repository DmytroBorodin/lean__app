import React from "react";
import './ProfileIdent.css';
import {NavLink} from "react-router-dom";

const ProfileIdent = (props) => {
    return (
        <div className='indent__comp__wrap'>
            <h2 className="indent__wrap__title">
                Identification
                <NavLink to={'/profile/edit'}>
                    <span className="icon-pencil1"></span>
                </NavLink>
            </h2>
            <div className="indent__info__block">
                <div className="left__block">
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Identification
                        </h3>
                        <p className="info__block___text">
                            Vishal Middle Bhatia
                        </p>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            ID Type
                        </h3>
                        <p className="info__block___text">
                            Passport
                        </p>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            ID Number
                        </h3>
                        <p className="info__block___text">
                            12345678
                        </p>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            ID Expiration
                        </h3>
                        <p className="info__block___text">
                            05/23/2030
                        </p>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Province in which ID was issued
                        </h3>
                        <p className="info__block___text">
                            Ontario
                        </p>
                    </div>
                </div>
                <div className="right__block">
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Date of Birth
                        </h3>
                        <p className="info__block___text">
                            10/29/1996
                        </p>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Citizenship
                        </h3>
                        <p className="info__block___text">
                            Canada
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileIdent;