import React from "react";
import serch_icon from '../assets/imgs/icons/search.svg';
import SearchItem from "./SearchItemComponent/SearchItemComponent";
import {NavLink} from "react-router-dom";

const SearchPayees = (props) => {
    let searchItemsData = [
        {
            id: 1,
            itemName: 'Cheap Kompany',
        },
        {
            id: 1,
            itemName: 'Cheaper Kompany',
        }
    ]

    let searchItemsArr = searchItemsData.map(item => <SearchItem id={item.id} itemName={item.itemName}/>)


    return (
        <div className='popup__wrap payees'>
            <div className="popup__block payees">
                <button className="popup__close__btn">
                    <NavLink to='/business/payees'>
                        <span className="icon-close_btn"></span>
                    </NavLink>
                </button>
                <div className="popup__content__wrap payees">
                    <h2 className="component__title payees">
                        Search Payees
                    </h2>
                    <p className="popup__text payees">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="component__block">
                        <div className="input__block payees">
                            <input className="search__input" placeholder='Search'/>
                            <img src={serch_icon} className='search__icon'/>
                        </div>
                        <div className="search__items__block">
                            {searchItemsArr}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPayees;