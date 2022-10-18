import React from 'react';
import { Link } from 'react-router-dom';

function Orders({ cart }) {
    const priceReduce = (type) => cart.reduce((prev, curr) => prev + curr[type], 0);
    const tax = parseFloat(priceReduce('price') * 0.1);
    const total = tax + priceReduce('price') + priceReduce('shipping');

    return (
        <section className="fixed w-[200px] bg-orange-400 h-full right-0 top-[67px] p-2">
            <h1 className="text-center text-white font-semibold text-lg px-4 py-2 rounded border border-black">
                Order Details
            </h1>
            <div className="mt-10">
                <p className="flex justify-between mb-3">
                    <span>Selected Items</span> <span> {cart.length}</span>
                </p>
                <p className="flex justify-between mb-3">
                    <span>Total Price</span> <span> ${priceReduce('price').toFixed(2)}</span>
                </p>
                <p className="flex justify-between mb-3">
                    <span>Delivery Charge</span> <span> ${priceReduce('shipping').toFixed(2)}</span>
                </p>
                <p className="flex justify-between mb-3">
                    <span>Tax</span> <span> ${tax.toFixed(2)}</span>
                </p>
                <h1 className="flex justify-between text-lg">
                    <span>Grand Total</span> <span> ${total.toFixed(2)}</span>
                </h1>
                <Link to="/shipping" className="block text-center bg-white rounded mt-4 py-2">
                    Proceed Shipping
                </Link>
            </div>
        </section>
    );
}

export default Orders;
