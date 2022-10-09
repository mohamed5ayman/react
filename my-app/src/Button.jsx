import React from "react";
import data from "./data";

export default function Button({ filterItem, setProducts, menuItems }) {
	return (
		<>
			<div className="btns-container">
				{menuItems.map((Val, id) => {
					return (
						<button
							className="btn-dark text-white btn fw-bold"
							key={id}
							onClick={() => filterItem(Val)}
						>
							{Val}
						</button>
					);
				})}
				<button
					className="btn-dark text-white fw-bold btn"
					onClick={() => setProducts(data)}
				>
					All
				</button>
			</div>
		</>
	);
}
