import React, { Component } from "react";
function Products(props) {
	const { product, onAdd } = props;
	return (
		<>
			<div className="phoneitem">
				<p>{product.name}</p>
				<img src={require(`${product.image}`)} alt={product.name} />
				<p>Price : ${product.price}</p>
				<a href="#cart">
					<button className="btn" onClick={() => onAdd(product)}>
						Order Now
					</button>
				</a>
			</div>
		</>
	);
}

export default Products;
