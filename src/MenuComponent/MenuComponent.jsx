import React from "react";
import './Menu.css';
import logo from '../assets/imgs/logo.png';
import user_icon from '../assets/imgs/user.svg';
import logo_min from '../assets/imgs/logo_min.png';
import {NavLink} from "react-router-dom";


const Menu = (props) => {

    const sublinks = React.createRef();
    const sSublinks = React.createRef();
    const menuBlock = React.createRef();
    const menu = React.createRef();

    let makeActive = (block) => {
        let winWIdth = window.innerWidth;
        if (winWIdth < 768) {
            block.current.classList.add('active__mobile');
        }if (winWIdth < 576) {
            menu.current.classList.add('active');
        }else {
            block.current.classList.add('active');
        }
    }
    let removeActive = () => {
        let winWIdth = window.innerWidth;
        if (winWIdth < 768) {
            sublinks.current.classList.remove('active__mobile');
            sSublinks.current.classList.remove('active__mobile');
        }if (winWIdth < 576) {
            menu.current.classList.remove('active');
        }else {
            sublinks.current.classList.remove('active');
            sSublinks.current.classList.remove('active');
        }
    }
    let makeActiveMobile = (block) => {
        let winWIdth = window.innerWidth;
        if (winWIdth < 768) {
            block.current.classList.add('active__mobile');
        }if (winWIdth < 576) {
            menu.current.classList.add('active');
        }
    }
    let removeActiveMobile = () => {
        let winWIdth = window.innerWidth;
        if (winWIdth < 768) {
            sublinks.current.classList.remove('active__mobile');
            sublinks.current.classList.remove('active');
            menu.current.classList.remove('active');
        }
    }


    return (
        <div className='menu' ref={menu}>
            <div className="user__block">
                <img src={logo} className="logo"/>
                <img src={logo_min} className='logo__min'/>
                <div className="menu__user__block" onClick={removeActive}>
                    <NavLink to='/profile' className="user__icon__block" >
                        <img src={user_icon} className="user__icon"/>
                    </NavLink>
                    <div className="menu__user__info__block">
                        <p className="user__name">Vishal Bhatia</p>
                        <p className="user__email">koolguy@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="menu__block" ref={menuBlock}>
                <NavLink to='/dashboard' activeClassName={'active'} className="menu__link" onClick={removeActive}>
                    <span className="icon-menu_icon_1 link__icon"></span>
                    <span className="link__title">Dashboard</span>
                </NavLink>
                <NavLink to='/businesses' className="menu__link" onClick={() => {makeActive(sublinks)}} onMouseEnter={() => {makeActiveMobile(sublinks)}} onMouseLeave={removeActiveMobile}>
                    <span className="icon-menu_icon_2 link__icon"></span>
                    <span className="link__title">Businesses</span>
                </NavLink>
                <div className="sublinks__block" ref={sublinks}>
                    <NavLink to='/create_business' className="menu__link sublink" onMouseEnter={() => {makeActiveMobile(sublinks)}}
                             onMouseLeave={removeActiveMobile}>
                        <span className='link__icon plus__icon'>+</span>
                        <span className="link__title">Create a Business</span>
                    </NavLink>
                    <NavLink to='/business_profile' className="menu__link sublink" onClick={() => {makeActive(sSublinks)}} onMouseOver={() => {makeActiveMobile(sSublinks)}}
                             onMouseEnter={() => {makeActiveMobile(sublinks)}}
                             onMouseLeave={removeActiveMobile}>
                        <span className="icon-menu_icon_2 link__icon sublink__icon"></span>
                        <span className="link__title">Kool Company</span>
                    </NavLink>
                    <div className="sublinks__block s__sublinks__block" ref={sSublinks}>
                        <NavLink to='/business/payees' className="menu__link sublink"  onMouseEnter={() => {makeActiveMobile(sublinks)}} onMouseLeave={removeActiveMobile}>
                            <span className="icon-menu_icon_5 link__icon sublink__icon"></span>
                            <span className="link__title">Payees</span>
                        </NavLink>
                        <NavLink to='/business/members' className="menu__link sublink"  onMouseEnter={() => {makeActiveMobile(sublinks)}} onMouseLeave={removeActiveMobile}>
                            <span className="icon-menu_icon_6 link__icon sublink__icon"></span>
                            <span className="link__title">Members</span>
                        </NavLink>
                    </div>
                </div>
                <div className="menu__border__div"></div>
                <NavLink to='/logout' className="menu__link" onClick={removeActive}>
                    <span className="icon-menu_icon_4 link__icon"></span>
                    <span className="link__title">Logout</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;