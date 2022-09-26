import React from 'react';

function SingleProduct({ product }) {
    const { img, name, price } = product;
    return (
        <div className="flex flex-col justify-between gap-3 bg-gray-100 rounded-xl">
            <img className="rounded-xl" src={img} alt="Product" />
            <div className="flex flex-col gap-3 p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <span>Price: ${price}</span>
                <button type="button" className="btn block w-full py-3 bg-orange-400">
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default SingleProduct;
