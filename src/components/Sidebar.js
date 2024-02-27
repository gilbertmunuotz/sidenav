import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTh, FaUserAlt, FaBars, FaShoppingBag } from "react-icons/fa";

const applyClasses = (isOpen, baseClass, conditionalClass) => {
    return isOpen ? `${baseClass} ${conditionalClass}` : baseClass;
};

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(isOpen ? false : true);
    };

    const menuItems = [
        { path: "/", name: "Home", icon: <FaTh /> },
        { path: "/contactus", name: "Contact Us", icon: <FaUserAlt /> },
        { path: "/about", name: "About", icon: <FaShoppingBag /> },
    ];

    return (
        <div className="container flex">
            <div className={applyClasses(isOpen, 'sidebar bg-black text-white h-screen w-64 transition-all duration-500 ease-in-out transform', 'w-20')}>
                <div className="top_section flex items-center py-4 px-6">
                    {/* <h1 className={applyClasses(isOpen, 'logo text-2xl', 'hidden')}>Logo</h1> */}
                    <div className="bars ml-auto text-2xl cursor-pointer" onClick={toggle}>
                        <FaBars />
                    </div>
                </div>
                {menuItems.map((item, index) => (
                    <NavLink key={index} to={item.path} className={applyClasses(isOpen, 'link flex items-center py-3 px-8 gap-4 hover:bg-[#495057] rounded-lg hover:text-white', 'hover:bg-transparent')}>
                        <div className="icon text-xl mt-3">{item.icon}</div>
                        <span className={applyClasses(isOpen, 'link_text text-base mt-3', 'hidden')}>{item.name}</span>
                    </NavLink>
                ))}
            </div>

            <main className="flex-grow px-4 py-4">{children}</main>

        </div>
    );
}

export default Sidebar;
