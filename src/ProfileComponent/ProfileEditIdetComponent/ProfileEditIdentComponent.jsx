import React from "react";
import './ProfileEditIdent.css';
import MainBtn from "../../MainBtnComponent/MainBtnComponent";
import Select from "./SelectComponent/SelectComponent";

const ProfileEditIdent = (props) => {
    const selectors = {
        idType: [
            'Passport',
            'idType1',
            'idType2',
        ],
        province: [
            'Passport',
            'Passport1',
            'Passport2',
        ],
        citizenship: [
            'Canada',
            'USA',
            'Ukraine',
        ]
    }

    return (
        <div className='indent__comp__wrap'>
            <h2 className="indent__wrap__title">
                Identification
            </h2>
            <div className="indent__info__block edit">
                <div className="left__block">
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Identification
                        </h3>
                        <div className="input__block">
                            <input className="info__block___text" placeholder='Vishal Middle Bhatia'/>
                        </div>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            ID Type
                        </h3>
                        <Select selectData={selectors.idType}/>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            ID Number
                        </h3>
                        <div className="input__block">
                            <input className="info__block___text" placeholder='12345678'/>
                        </div>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            ID Expiration
                        </h3>
                        <div className="input__block">
                            <input className="info__block___text" placeholder='05/23/2030'/>
                        </div>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Province in which ID was issued
                        </h3>
                        <Select selectData={selectors.province}/>
                    </div>
                </div>
                <div className="right__block">
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Date of Birth
                        </h3>
                        <div className="input__block">
                            <input className="info__block___text" placeholder='10/29/1996'/>
                        </div>
                    </div>
                    <div className="info__block">
                        <h3 className="info__block__title">
                            Citizenship
                        </h3>
                        <Select selectData={selectors.citizenship}/>
                    </div>
                </div>
            </div>
            <MainBtn className='save' btnText={'Save'}/>
        </div>
    )
}

export default ProfileEditIdent;