import React from "react";
import Home from "./home";
import About from "./About";
import Products from "./Products";
import Contact from "./contact";
import Cart from "./Cart";
import Button from "./Button";

function Main(props) {
	const {
		products,
		cartItems,
		onAdd,
		onRemove,
		menuItems,
		filterItem,
		setProducts,
	} = props;

	return (
		<>
			<Home />
			<About />
			<section id="products" className="products">
				<h2>Checkout The Offers</h2>
			</section>
			<Button
				menuItems={menuItems}
				filterItem={filterItem}
				setProducts={setProducts}
			/>
			<article className="brands">
				{products.map((product) => (
					<>
						<Products
							onAdd={onAdd}
							key={product.id}
							product={product}
						></Products>
					</>
				))}
			</article>
			<Cart
				cartItems={cartItems}
				onAdd={onAdd}
				onRemove={onRemove}
			></Cart>
			<Contact />
		</>
	);
}

export default Main;
