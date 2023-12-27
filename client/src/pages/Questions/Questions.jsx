import React from "react";

import '../../App.css'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import HomeMainbar from '../../components/Home/HomeMainbar';

const Questions = () => {
    return (
        <div className="home-container">
            <LeftSidebar/>
            <div >
                <HomeMainbar />
                <RightSidebar/>
            </div>
        </div>
    )
}

export default Questions