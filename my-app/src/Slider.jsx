import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Slider() {
	return (
		<>
			<div className="slider">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<a href="#products">
							<img
								className="samsung-slide"
								src={require("./imgs/Samsung.png")}
								alt="Samsung"
							/>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="#products">
							<img
								className="oppo-slide"
								src={require("./imgs/Oppo.jpg")}
								alt="Oppo"
							/>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="#products">
							<img
								className="huawei-slide"
								src={require("./imgs/Huawei.png")}
								alt="Huawei"
							/>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a href="#products">
							<img
								className="nokia-slide"
								src={require("./imgs/Nokia.jpg")}
								alt="Nokia"
							/>
						</a>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
export default Slider;
