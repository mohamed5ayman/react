import React from "react";

function Cart(props) {
	const { cartItems, onAdd, onRemove } = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
	const shippingPrice = 50;
	const totalPrice = itemsPrice + shippingPrice;

	return (
		<>
			<section className="cart" id="cart">
				<h2>You can add your products here !</h2>
				{cartItems.length === 0 && <p>No thing is Added</p>}
				<div className="cart-style">
					{cartItems.map((item) => (
						<div key={item.id}>
							<div className="phoneitem">
								<p>{item.name}</p>
								<img
									className="cart-image"
									src={require(`${item.image}`)}
									alt={item.name}
								/>
								<div className="cart-buttons">
									<button
										onClick={() => onAdd(item)}
										className="add btn btn-success"
									>
										+
									</button>
									<button
										onClick={() => onRemove(item)}
										className="remove btn btn-danger"
									>
										-
									</button>
									<p>
										{item.qty} x ${item.price}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				{cartItems.length !== 0 && (
					<>
						<div className="check-total">
							<div className="total-price">
								<div>
									<p>Items Price</p>
									<p>${itemsPrice}</p>
								</div>
								<div>
									<p>Shipping Price</p>
									<p>${shippingPrice}</p>
								</div>
								<div className="total">
									<p>Total Price</p>
									<p>${totalPrice}</p>
								</div>
							</div>
							<button
								className="check-btn btn btn-dark"
								onClick={() => alert("Checkout Compelete !")}
							>
								<p>Checkout</p>
							</button>
						</div>
					</>
				)}
			</section>
		</>
	);
}

export default Cart;
