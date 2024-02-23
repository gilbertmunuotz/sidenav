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
        <div className='Sidebar'>
            <h1>This is Sidebar</h1>
        </div>
    )
}

export default Sidebar