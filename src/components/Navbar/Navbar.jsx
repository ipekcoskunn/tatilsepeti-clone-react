import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [menu, setMenu] = useState("home")

    return (
        <div className="navbar-area j-center">
            <div className="header-info-area">
                <div className="container p-0">
                    <div className="row flex-row">
                        <div className="header-left-info col-3">
                            <a href="#">
                                <img className="logo-img" width="211" height="52"
                                    src="https://cdn.tatilsepeti.com/wwwroot/images/tatilsepeti-logo2.svg"></img>
                            </a>
                        </div>
                        <div className="header-right-info col-9">
                            <div className="row flex-row">
                                <div className="right-info-menu">
                                    <ul>
                                        <li className={menu === "home" ? "active" : ""}>
                                            <a className="info-phone">
                                                <FontAwesomeIcon icon={faPhone} className='info-icons' />
                                                444 44 20
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="info-sales-offices">
                                                <FontAwesomeIcon icon={faLocationDot} className='info-icons' />
                                                Satış Ofisleri
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="info-notifications">
                                                <FontAwesomeIcon icon={faBell} className='info-icons' />
                                                Bildirimler
                                            </a>
                                        </li>
                                        <li><a href="/" classNameName="info-sign-up">Kayıt Ol</a></li>
                                        <li>
                                            <a href="/" className="info-login">
                                                <FontAwesomeIcon icon={faUser} className='info-icons' />
                                                Giriş Yap
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
