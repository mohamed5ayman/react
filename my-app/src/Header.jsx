import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

function Header(props) {
	const { countCartItems } = props;
	return (
		<>
			<nav className="navbar navbar-expand-lg fixed-top">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<h1>TeleStore</h1>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mb-2 mb-lg-0 nav-right">
							<li className="nav-item">
								<Link className="nav-link active" to="/">
									<h3>Home</h3>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									<h3>About</h3>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/products">
									<h3>Products</h3>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									<h3>Contact</h3>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/cart">
									<h3>
										<FontAwesomeIcon icon={faOpencart} />
										{countCartItems ? (
											<span className="cart-counter badge badge-light">
												{countCartItems}
											</span>
										) : (
											""
										)}
									</h3>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
