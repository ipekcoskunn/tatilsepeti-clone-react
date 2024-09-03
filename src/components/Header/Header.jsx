import React from 'react'
import './Header.css'
import { header_list } from '../../data/header_list'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-main-menu">
                <div className="container p-0">
                    <div className="megamenu" id="otelMegaMenu">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <ul>
                                <li>Antalya Otelleri</li>
                                <li>Marmaris Otelleri</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <ul>
                                <li>Marmaris Otelleri</li>
                                <li>Antalya Otelleri</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <ul>
                                <li>Marmaris Otelleri</li>
                                <li>Antalya Otelleri</li>
                                <li>Antalya Otelleri</li>
                                <li>Antalya Otelleri</li>
                                <li>Antalya Otelleri</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="megamenuImage">
                                <img src="https://cdn.tatilsepeti.com/Files/Banner/0038/Cippara-Agustos-Banner.jpg"
                                    style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>
                    <nav className="bigmegamenu">
                        <ul>
                            {header_list.map((item, index) => {
                                return (
                                    <li key={index} className="dropdown-items">
                                        {item.header_name}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <div className="mobile-menu" id="mobile-menu">
                <div className="col-12 mobile-menu-header">
                    <div className="col-9">
                        <i className="fa-solid fa-bars" onclick="mobileMenuOpen();" id="openMenu"></i>
                        <i className="fa-solid fa-xmark" onclick="mobileMenuClose();" id="closeMenu" style={{ display: 'none' }}></i>
                        <img className="logo-img" width="150" height="50"
                            src="https://cdn.tatilsepeti.com/wwwroot/images/tatilsepeti-logo2.svg" />
                    </div>
                    <div className="col-3">
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-solid fa-user"></i>
                        <i className="fa-solid fa-bell"><span className="notif"></span></i>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mobile-menu-open" style={{ display: 'none' }} id="mobile-menu-open">
                        <ul>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-bed"></i>
                                    Otel
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-bus"></i>
                                    Tur
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-ship"></i>
                                    Gemi
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-plane"></i>
                                    Uçak
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-car"></i>
                                    Araç
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-heart"></i>
                                    Balayı Otelleri
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-bullhorn"></i>
                                    Fırsatlar
                                </a>
                            </li>
                        </ul>
                        <div className="col-12">
                            <div className="mobile-menu-buttons">
                                <a href="" className="mobile-btn login">
                                    Giriş Yap
                                </a>
                                <a href="" className="mobile-btn register">
                                    Kayıt Ol
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-seperator">Tatilsepeti</div>
                        </div>
                        <ul>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-bell-concierge"></i> Müşteri Hizmetleri
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-briefcase"></i> Hakkımızda
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-location-dot"></i> Satış Ofisleri
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-map"></i> Tatil Rehberi
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-mobile"></i> Uygulama İndir
                                </a>
                            </li>
                        </ul>
                        <div className="col-12">
                            <div className="mobile-seperator">Sosyal Medya</div>
                        </div>
                        <div className="col-12 socialMediaIcons">
                            <div className="socialMedia"><a href=""><i className="fa-brands fa-facebook-f"></i></a></div>
                            <div className="socialMedia"><a href=""><i className="fa-brands fa-x-twitter"></i></a></div>
                            <div className="socialMedia"><a href=""><i className="fa-brands fa-instagram"></i></a></div>
                            <div className="socialMedia"><a href=""><i className="fa-brands fa-youtube"></i></a></div>
                            <div className="socialMedia"><a href=""><i className="fa-brands fa-linkedin-in"></i></a></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Header