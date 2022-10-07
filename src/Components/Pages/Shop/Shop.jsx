import React, { useEffect, useState } from 'react';
import useLocalStorageForCart from '../../Hooks/useLocalStorageForCart';
import Orders from './Orders';
import Products from './Products';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const { setLocalStorage, getLocalStorage } = useLocalStorageForCart();

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
        )
            .then((res) => res.json())
            .then((data) => setProducts([...data]))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        const cartProduct = getLocalStorage() || {};
        const savedCart = [];
        Object.keys(cartProduct).forEach((keys) => {
            const addedProduct = products.find((product) => product.id === keys);
            if (addedProduct) {
                console.log(addedProduct);
                addedProduct.quantity = cartProduct[keys];
                savedCart.push(addedProduct);
            }
        });
        setCart([...savedCart]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        setLocalStorage(product.id);
    };

    return (
        <main className="">
            <Products products={products} addToCart={addToCart} />
            <Orders cart={cart} />
        </main>
    );
}

export default Shop;
