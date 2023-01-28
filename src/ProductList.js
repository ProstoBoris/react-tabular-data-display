import React from 'react';

const ProductList = (props) => {
    return (
        <ul className="product-list">
            {props.products.map((item) => (
                <div key={item.id}>
                    <span>{item.title} - </span>
                    <span>{item.price}</span>
                </div>
            ))}
        </ul>
    );
};

export default ProductList;
