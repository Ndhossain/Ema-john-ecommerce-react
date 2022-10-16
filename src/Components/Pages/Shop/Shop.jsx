import React, { useContext, useEffect } from 'react';
import { CartContext, ProductsContext } from '../../Main/Main';
import { getLocalStorage, setLocalStorage } from '../../utilities/useLocalStorageForCart';
import Orders from './Orders';
import Products from './Products';

function Shop() {
    const { cart, setCart } = useContext(CartContext);
    const products = useContext(ProductsContext);

    useEffect(() => {
        const cartProduct = getLocalStorage() || {};
        const savedCart = [];
        Object.keys(cartProduct).forEach((keys) => {
            const addedProduct = products.find((product) => product.id === keys);
            if (addedProduct) {
                addedProduct.quantity = cartProduct[keys];
                savedCart.push(addedProduct);
            }
        });
        setCart([...savedCart]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
