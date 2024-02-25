import React from 'react'
import { Fatch, FaUserAlt, FaShoppingBag } from "react-icons";

function Sidebar() {

    const menuItem = [
        {
            path: "/",
            name: "name",
            icon: <Fatch />
        },
        {
            path: "/",
            name: "contactus",
            icon: <FaUserAlt />
        },
        {
            path: "/",
            name: "about",
            icon: <FaShoppingBag />
        },
    ]

    return (
        <div className='container'>
            <div className="sidebar">
                <div className="top-section">

                </div>
            </div>
        </div>
    )
}

export default Sidebar