import React from "react";
import './BankAccount.css';
import ba_1_img from '../../assets/imgs/bc_img_1.png';
import ba_2_img from '../../assets/imgs/bc_img_2.svg';
import MainBtn from "../../MainBtnComponent/MainBtnComponent";

const BankAccount = (props) => {
    return (
        <div className='ba__comp__wrap'>
            <div className="ba__row row">
                <div className="ba__left__block">
                    <h2 className="cb__title">
                        Why use Flinks to retrieve your bank information?
                    </h2>
                    <p className="ba__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="ba__accept__block">
                        <input className="ba__accept__btn" type="checkbox"/>
                        <p className="ba__text">
                            By creating an account, you are agreeing to our terms.
                        </p>
                    </div>
                    <img className="mob__screen__img" src={ba_1_img}/>
                    <MainBtn btnText={'Continue Online'} className='ba__main__btn'/>
                </div>
                <div className="ba__right__block">
                    <img className="desktop__img" src={ba_1_img}/>
                </div>
            </div>
            <div className="ba__main__footer__block">
                <h2 className="cb__title">
                    Want to speak with an agent?
                </h2>
                <p className="cb__text">
                    Call <a className="text__link">+1 855 747 LEAN (5326)</a> to manually retrieve your bank information with our agents, or get in touch <a className="text__link">here</a>.
                </p>
                <div className="ba__footer__block">
                    <img className="ba__footer__img" src={ba_2_img}/>
                    <p className="ba__text">
                        Your financial information is encrypted and stored on secure servers.
                        We verify account details and ownership as one part of ensuring your company’s account is safe and secured.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BankAccount;