import React, { useEffect, useState } from 'react';
import Orders from './Orders';
import Products from './Products';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
        )
            .then((res) => res.json())
            .then((data) => setProducts([...data]))
            .catch((error) => console.log(error));
    }, []);

    const addToCart = (product) => setCart([...cart, product]);

    return (
        <main className="">
            <Products products={products} addToCart={addToCart} />
            <Orders cart={cart} />
        </main>
    );
}

export default Shop;
