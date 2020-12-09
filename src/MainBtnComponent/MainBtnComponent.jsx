import React from "react";
import './MainBtn.css'

const MainBtn = (props) => {
    return (
        <button className={'main__btn' + ' ' + props.className}>
            {props.btnText}
        </button>
    )
}

export default MainBtn;