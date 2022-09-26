import React, { useEffect, useState } from 'react';
import Orders from './Orders';
import Products from './Products';

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../../../Assets/Database/products.json')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <main className="flex">
            <Products products={products} />
            <Orders />
        </main>
    );
}

export default Shop;
