import React, { Component } from "react";
import Slider from "./Slider";

function Home() {
	return (
		<>
			<section className="home">
				<h2>Welcome to TeleStore!</h2>

				<p>What's the brand you want?</p>

				<Slider />
			</section>
		</>
	);
}

export default Home;
