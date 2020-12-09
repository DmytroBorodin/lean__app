import React from "react";
import './SearchItem.css';

const SearchItem = (props) => {
    return (
        <div className='search__item'>
            <span className="search__item__name">
                {props.itemName}
            </span>
            <span className="icon-add_to_fav"></span>
        </div>
    )
}

export default SearchItem;