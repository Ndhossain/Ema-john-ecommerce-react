import React from 'react';

function Orders({ cart }) {
    return (
        <section className="fixed w-[200px] bg-orange-400 h-full right-0 top-[67px] p-2">
            <h1 className="text-center text-white font-semibold text-lg px-4 py-2 rounded border border-black">
                Order Details
            </h1>
            <div className="mt-10">
                <p className="flex justify-between mb-3">
                    <span>Selected Items</span> <span> {cart.length ?? 0}</span>
                </p>
                <p className="flex justify-between mb-3">
                    <span>Total Price</span> <span> {cart.length ?? 0}</span>
                </p>
                <p className="flex justify-between mb-3">
                    <span>Delivery Charge</span> <span> {cart.length ?? 0}</span>
                </p>
                <p className="flex justify-between mb-3">
                    <span>Tax</span> <span> {cart.length ?? 0}</span>
                </p>
            </div>
        </section>
    );
}

export default Orders;
