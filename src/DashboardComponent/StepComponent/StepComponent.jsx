import React from "react";
import './Step.css';
import MainBtn from "../../MainBtnComponent/MainBtnComponent";

const Step = (props) => {

    const stepContainer = React.createRef();
    const addClass = () => {
        stepContainer.current.classList.toggle('active');
    }


    return (
        <div className={'step__container'} ref={stepContainer}>
            <h2 className="step__title">
                {props.stepTitle}
                <span className="icon-arrow_1" onClick={addClass}></span>
            </h2>
               <div className="step__content__block">
                   <div className="step__body">
                       <p className="step__text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       </p>
                   </div>
                   <div className="step__footer">
                       <MainBtn className={'step__btn'} btnText={'Finish Step'}/>
                   </div>
               </div>
        </div>
    )
}

export default Step;