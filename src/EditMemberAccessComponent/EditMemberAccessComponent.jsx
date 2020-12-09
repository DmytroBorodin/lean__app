import React, {Component} from "react";
import '../EditUserInfoComponent/EditUserInfo.css';
import Select from "../ProfileComponent/ProfileEditIdetComponent/SelectComponent/SelectComponent";
import MainBtn from "../MainBtnComponent/MainBtnComponent";
import {NavLink} from "react-router-dom";

class EditMemberAccess extends Component {

    questionData = {
        question1: [
            'yes',
            'no',
        ],
        question2:  [
            'yes',
            'no',
        ],
        question3: [
            'yes',
            'no',
        ],
    }

    state = {
        selectionOption: '',
    }

    onChangeValue = (event) => {
        this.setState({selectionOption : event.target.value});
    }

    render() {
        return (
            <div className='popup__wrap'>
                <div className="popup__block">
                    <button className="popup__close__btn">
                        <NavLink to={'/business/members'}>
                            <span className="icon-close_btn"></span>
                        </NavLink>
                    </button>
                    <div className="popup__content__wrap access">
                        <h2 className="component__title">
                            Nadir’s Access
                        </h2>
                        <p className="popup__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="component__block">
                            <div className="edit__access__block">
                                <h3 className="edit__access__title">
                                    Authority
                                </h3>
                                <div className="edit__info__block">
                                    <h5 className="edit__info__title">
                                        Is Nadir a Board of Director?
                                    </h5>
                                    <Select selectData={this.questionData.question1}/>
                                </div>
                                <div className="edit__info__block">
                                    <h5 className="edit__info__title">
                                        Is Nadir the Signing Officer?
                                    </h5>
                                    <Select selectData={this.questionData.question2}/>
                                </div>
                                <div className="edit__info__block">
                                    <h5 className="edit__info__title">
                                        Is Nadir a Shareholder? (with more than 25% ownership)
                                    </h5>
                                    <Select selectData={this.questionData.question3}/>
                                </div>
                            </div>
                            <div className="edit__access__block permission">
                                <h3 className="edit__access__title">
                                    Permissions
                                </h3>
                                <p className="role">
                                    Role
                                </p>
                                <div className="radio__group" onChange={this.onChangeValue}>
                                    <div className="edit__info__block">
                                        <input className="radio__btn" value={'Viewer'}
                                               type='radio'
                                               checked={this.state.selectionOption === 'Viewer'}
                                               onChange={this.onChangeValue}/>
                                        <p className="permission__text">
                                            <span className='role'>Viewer</span>
                                            <span>A Viewer can only view information.</span>
                                        </p>
                                    </div>
                                    <div className="edit__info__block">
                                        <input className="radio__btn" value={'Editor'}
                                               checked={this.state.selectionOption === 'Editor'}
                                               onChange={this.onChangeValue}
                                               type='radio'/>
                                        <p className="permission__text">
                                            <span className='role'>Editor</span>
                                            <span>An Editor can only view and edit information.</span>
                                        </p>
                                    </div>
                                    <div className="edit__info__block">
                                        <input className="radio__btn" value={'Admin'}
                                               checked={this.state.selectionOption === 'Admin'}
                                               onChange={this.onChangeValue}
                                               type='radio'/>
                                        <p className="permission__text">
                                            <span className='role'>Admin</span>
                                            <span>An Admin can view and edit information, as well as add/remove members.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <MainBtn btnText='Save' className='popup__save__btn'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditMemberAccess;