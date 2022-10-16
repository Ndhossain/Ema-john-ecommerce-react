import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../Navbar/Nav';

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

function Main() {
    const [cart, setCart] = useState([]);
    const products = JSON.parse(useLoaderData());

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <ProductsContext.Provider value={products}>
                <Nav />
                <Outlet />
            </ProductsContext.Provider>
        </CartContext.Provider>
    );
}

export default Main;
