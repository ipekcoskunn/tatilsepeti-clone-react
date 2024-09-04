import React, { useState } from 'react'
import "./TabPanel.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaBed, FaSuitcase, FaPlane } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function TabPanel() {
    const [key, setKey] = useState('otel');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="tabs-navbar"
            justify
            style={{
                border: 'none'
            }}

        >
            <Tab eventKey="otel" title={<><FaBed /> Otel</>} className='search-panel '>
                <div class="form-group col-lg-12 col-sm-12">
                    <h5 class="search-panel-title">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        Tatil Ara
                    </h5>
                    <label class="" for="bolge">Bölge / Otel / Kampanya</label>
                    <input type="text" class="form-control form-control-sm" id="bolge"
                        placeholder="Şehir, ilçe veya tatil bölgesi yazınız" />
                    <div class="row">
                        <div class="col">
                            <label class="" for="start-date">Giriş Tarihi</label>
                            <input type="date" class="form-control form-control-sm" placeholder="Ad Soyad"
                                id="start-date" />
                        </div>
                        <div class="col">
                            <label class="" for="start-date">Çıkış Tarihi</label>
                            <input type="date" class="form-control form-control-sm" placeholder="Ad Soyad" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="" for="adult">Yetişkin</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Ad Soyad"
                                id="start-date" />
                        </div>
                        <div class="col">
                            <label class="" for="child">Çocuk</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Ad Soyad" />
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="only-avaliable-hotels" />
                        <label class="form-check-label" for="only-avaliable-hotels">
                            Sadece Müsait Oteller
                        </label>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="search-btn btn btn-primary">Otel Ara</button>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="tur" title={<><FaSuitcase /> Paket Tur</>} className='search-panel '>
                <div class="form-group col-lg-12 col-sm-12">
                    <h5 class="search-panel-title">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        Tur Ara
                    </h5>
                    <label class="" for="bolge">Bölge / Otel / Kampanya</label>
                    <input type="text" class="form-control form-control-sm" id="bolge"
                        placeholder="Şehir, ilçe veya tatil bölgesi yazınız" />
                    <div class="row">
                        <div class="col">
                            <label class="" for="start-date">Giriş Tarihi</label>
                            <input type="text" class="form-control form-control-sm" placeholder="First name"
                                id="start-date" />
                        </div>
                        <div class="col">
                            <label class="" for="start-date">Çıkış Tarihi</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="" for="adult">Yetişkin</label>
                            <input type="text" class="form-control form-control-sm" placeholder="First name"
                                id="start-date" />
                        </div>
                        <div class="col">
                            <label class="" for="child">Çocuk</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="only-avaliable-hotels" />
                        <label class="form-check-label" for="only-avaliable-hotels">
                            Sadece Müsait Oteller
                        </label>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="search-btn btn btn-primary">Otel Ara</button>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="ucak" title={<><FaPlane /> Uçak</>} className='search-panel '>
                <div class="form-group col-lg-12 col-sm-12">
                    <h5 class="search-panel-title">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        Uçak Ara
                    </h5>
                    <label class="" for="bolge">Bölge / Otel / Kampanya</label>
                    <input type="text" class="form-control form-control-sm" id="bolge"
                        placeholder="Şehir, ilçe veya tatil bölgesi yazınız" />
                    <div class="row">
                        <div class="col">
                            <label class="" for="start-date">Giriş Tarihi</label>
                            <input type="text" class="form-control form-control-sm" placeholder="First name"
                                id="start-date" />
                        </div>
                        <div class="col">
                            <label class="" for="start-date">Çıkış Tarihi</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="" for="adult">Yetişkin</label>
                            <input type="text" class="form-control form-control-sm" placeholder="First name"
                                id="start-date" />
                        </div>
                        <div class="col">
                            <label class="" for="child">Çocuk</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="only-avaliable-hotels" />
                        <label class="form-check-label" for="only-avaliable-hotels">
                            Sadece Müsait Oteller
                        </label>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="search-btn btn btn-primary">Otel Ara</button>
                    </div>
                </div>
            </Tab>
        </Tabs>
    );
}

export default TabPanel;