import React from 'react'
import './Home.css'
import MainSlider from '../../components/Home/MainSlider'
import TabPanel from '../../components/Home/TabPanel'

const Home = () => {
    return (
        <div className='home mt-20'>
            <div className="container p-0">
                <div className="row m-0 p-0">
                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 m-0 p-0">
                        <TabPanel />
                    </div>
                    <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <MainSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home