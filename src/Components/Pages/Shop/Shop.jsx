import React, { useEffect, useState } from 'react';
import Orders from './Orders';
import Products from './Products';

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
        )
            .then((res) => res.json())
            .then((data) => setProducts([...data]))
            .catch((error) => console.log(error));
    }, []);

    return (
        <main className="flex">
            <Products products={products} />
            <Orders />
        </main>
    );
}

export default Shop;
