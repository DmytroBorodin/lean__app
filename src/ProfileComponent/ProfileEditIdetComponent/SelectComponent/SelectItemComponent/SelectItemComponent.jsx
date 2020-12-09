import React from "react";
import './SelectItem.css'

const SelectItem = (props) => {
    return (
        <div className='select__item'>
            <p>
                {props.innerText}
            </p>
        </div>
    )
}

export default SelectItem;