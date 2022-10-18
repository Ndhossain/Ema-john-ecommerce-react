import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/Logo.svg';
import useAuth from '../hooks/useAuth';

function Nav() {
    const { user, signOutUser, error } = useAuth();
    console.log(user);
    return (
        <nav className="bg-[#1C2B35] fixed top-0 w-full">
            <div className="flex justify-between max-w-[1280px] mx-auto px-5 py-3 items-center">
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className="flex items-center gap-5 text-white">
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/orders">Order</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/inventory">Inventory</Link>
                    </li>
                    {!error && user && user?.uid ? (
                        <>
                            <li>{user.displayName}</li>
                            <li>
                                <button
                                    type="button"
                                    className="px-3 py-2 bg-orange-400 text-white rounded-md"
                                    onClick={() => signOutUser()}
                                >
                                    Sign Out
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
