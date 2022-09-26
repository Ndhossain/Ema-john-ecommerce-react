import React from 'react';
import logo from '../../Assets/Images/Logo.svg';

function Nav() {
    return (
        <nav className="bg-[#1C2B35]">
            <div className="flex justify-between max-w-[1280px] mx-auto px-5 py-3 items-center">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul className="flex gap-5 text-white">
                    <li>Order</li>
                    <li>Order Review</li>
                    <li>Manage Inventory</li>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
