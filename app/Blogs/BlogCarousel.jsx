'use client'

import '../Events/events.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { MdArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link';

const BlogCarousel = ( { data } ) => {

	const pagination = {
		el: '.carousel-dots',
		type: 'bullets',
		clickable: true,
		bulletClass: 'carousel-dot',
		bulletActiveClass: 'carousel-dot-active',
	}

	const navigation = {
		nextEl: ".carousel-arrow.arrow-right",
		prevEl: ".carousel-arrow.arrow-left",
		clickable: true,
	}

	return (
		<>
			<Swiper
				className="carousel"
				loop={true}
				speed={800}
				slidesPerView={1}
				modules={[Pagination, Navigation]}
				pagination={pagination}
				navigation={navigation}
			>
				{
					data.map(item => (
						<SwiperSlide key={item.id}>
							<div className={'carousel-item'}>
								<img src={item.cover_image} alt="hello" />
								<div className={'carousel-item-content'}>
									<Link href={`/Blogs/${item.slug}`} className={'carousel-item-title'}>{item.title}</Link>
									<p className={'carousel-item-desc'}>{item.author}</p>
								</div>
							</div>
						</SwiperSlide>
					))
				}
				<MdArrowBackIosNew className="carousel-arrow arrow-left" />
				<MdArrowBackIosNew className="carousel-arrow arrow-right" />
			</Swiper>
			<div className={'carousel-dots'}>
				<div className={'carousel-dot carousel-dot-active'}></div>
				<div className={'carousel-dot'}></div>
				<div className={'carousel-dot'}></div>
			</div>
		</>
	)
}

export default BlogCarousel