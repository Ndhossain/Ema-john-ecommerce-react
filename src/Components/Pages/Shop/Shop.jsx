import React, { useContext } from 'react';
import { CartContext, ProductsContext } from '../../Main/Main';
import { setLocalStorage } from '../../utilities/useLocalStorageForCart';
import Orders from './Orders';
import Products from './Products';

function Shop() {
    const { cart, setCart } = useContext(CartContext);
    const products = useContext(ProductsContext);

    const addToCart = (product) => {
        setCart([...cart, product]);
        setLocalStorage(product.id);
    };

    return (
        <main>
            <Products products={products} addToCart={addToCart} />
            <Orders cart={cart} />
        </main>
    );
}

export default Shop;
