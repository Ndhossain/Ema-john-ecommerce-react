import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Orders from '../Shop/Orders';

function OrderPage() {
    const { products, initialCart } = useLoaderData();

    return (
        <main className="mt-24">
            <div>
                <h1>This is Order Page {products.length}</h1>
                <p>this is cart {initialCart.length}</p>
            </div>
            <div>
                <Orders cart={initialCart} />
            </div>
        </main>
    );
}

export default OrderPage;
