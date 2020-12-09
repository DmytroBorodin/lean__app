import React from "react";
import './Select.css';
import SelectItem from "./SelectItemComponent/SelectItemComponent";

const Select = (props) => {

    let selectItems = props.selectData.map(item => <SelectItem innerText={item}/>)

    let itemsBlock = React.createRef();

    let toggleBlock = () => {
        itemsBlock.current.classList.toggle('active');
    }

    return (
        <div className='select__block'>
            <div className="selected__item__block">
                <p className="select__item">
                    {props.selectData[0]}
                </p>
                <span className="icon-arrow_2svg" onClick={toggleBlock}></span>
            </div>
            <div className="select__items__block" ref={itemsBlock}>
                {
                    selectItems
                }
            </div>
        </div>
    )
}

export default Select;