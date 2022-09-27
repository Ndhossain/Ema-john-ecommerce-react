import React from 'react';
import SingleProduct from './SingleProduct';

function Products({ products, addToCart }) {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr p-3 mt-20"
            style={{ width: 'calc(100% - 200px)' }}
        >
            {products?.map((product) => (
                <SingleProduct key={product.id} product={product} addToCart={addToCart} />
            ))}
        </section>
    );
}

export default Products;
