import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import data from "./data";
import Header from "./Header";
import About from "./About";
import Button from "./Button";
import Products from "./Products";
import Contact from "./contact";
import Main from "./Main";
import Cart from "./Cart";
import Footer from "./footer";
import { useState } from "react";

function App() {
	const [products, setProducts] = useState(data);
	const [cartItems, setCartItems] = useState([]);
	const menuItems = [...new Set(data.map((Val) => Val.brand))];

	const filterItem = (curcat) => {
		const newItem = data.filter((newVal) => {
			return newVal.brand === curcat;
		});
		setProducts(newItem);
	};

	console.log(menuItems);

	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header countCartItems={cartItems.length} />
							<Main
								setProducts={setProducts}
								filterItem={filterItem}
								menuItems={menuItems}
								products={products}
								cartItems={cartItems}
								onAdd={onAdd}
								onRemove={onRemove}
							/>
							<Footer />
						</>
					}
				/>
				<Route
					path="/about"
					element={
						<>
							<Header countCartItems={cartItems.length} />
							<About />
							<Contact />
						</>
					}
				/>
				<Route
					path="/contact"
					element={
						<>
							<Header countCartItems={cartItems.length} />
							<Contact />
						</>
					}
				/>
				<Route
					path="/products"
					element={
						<>
							<Header countCartItems={cartItems.length} />
							<section id="products" className="products">
								<h2>Checkout The Offers</h2>
							</section>

							<Button
								setProducts={setProducts}
								filterItem={filterItem}
								menuItems={menuItems}
							/>

							<article className="brands">
								{products.map((product) => (
									<Products
										onAdd={onAdd}
										key={product.id}
										product={product}
									></Products>
								))}
							</article>
							<Cart
								cartItems={cartItems}
								onAdd={onAdd}
								onRemove={onRemove}
							/>
						</>
					}
				/>
				<Route
					path="/cart"
					element={
						<>
							<Header countCartItems={cartItems.length} />
							<Cart
								cartItems={cartItems}
								onAdd={onAdd}
								onRemove={onRemove}
							/>
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
