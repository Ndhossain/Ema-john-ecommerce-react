import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../Navbar/Nav';

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

function Main() {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState([...initialCart]);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <CartContext.Provider value={{ cart, setCart }}>
            <ProductsContext.Provider value={products}>
                <Nav />
                <Outlet />
            </ProductsContext.Provider>
        </CartContext.Provider>
    );
}

export default Main;
