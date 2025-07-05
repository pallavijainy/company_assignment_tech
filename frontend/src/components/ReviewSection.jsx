import React, { useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { getReview } from "../api/review.api";

import img1 from "../assets/review/1.jpg";
import img2 from "../assets/review/2.jpg";
import img3 from "../assets/review/3.jpg";

const ReviewSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReview = async () => {
        try {
            const response = await getReview();
            if (response) {
                setData(response?.reviews);
                console.log("Fetched reviews:", response.reviews);
            }
        } catch (error) {
            console.error("Error fetching review:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReview();
    }, []);

    const reviews = [
        {
            title: "How to work with prototype design with adobe xd featuring tools",
            rating: 5,
            ratingtext: "5.0 (392 reviews)",
            author: "2,538 students watched",
            image: img1,
        },
        {
            title: "Create multiple artboard by using figma prototyping tools development",
            rating: 5,
            ratingtext: "4.5 (524 reviews)",
            author: "3,532 students watched",
            image: img2,
        },
        {
            title: "Convert your web layout theming easily with sketch zeplin extension",
            rating: 5,
            ratingtext: "5.0 (392 reviews)",
            author: "1,037 students watched",
            image: img3,
        },
        {
            title: "How to work with prototype design with adobe xd featuring tools",
            rating: 5,
            ratingtext: "5.0 (392 reviews)",
            author: "2,538 students watched",
            image: img1,
        },
        {
            title: "Create multiple artboard by using figma prototyping tools development",
            rating: 5,
            ratingtext: "4.5 (524 reviews)",
            author: "3,532 students watched",
            image: img2,
        },
        {
            title: "Convert your web layout theming easily with sketch zeplin extension",
            rating: 5,
            ratingtext: "5.0 (392 reviews)",
            author: "1,037 students watched",
            image: img3,
        },
    ];


    return (
        <div>
            <section className="md:pt-20 py-10 bg-white px-4 overflow-visible">
                <p className="uppercase text-sm text-center text-[#EF9E48]">
                    Quality features
                </p>
                <h2 className="text-3xl font-bold text-center mb-12">
                    Tutorials that people love most
                </h2>

                <div className="relative overflow-visible">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        className="overflow-visible px-1"
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-b-lg border border-gray-100 hover:shadow-[0px_20px_30px_rgba(0,0,0,0.05)] duration-500 transition-all bg-white">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 flex flex-col gap-2">
                                        <div className="text-sm">
                                            <span className="text-yellow-400 text-lg">
                                                {"★".repeat(item.rating)}
                                            </span>{" "}
                                            {item.ratingtext}
                                        </div>
                                        <h3 className="text-sm font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <IoMdEye />
                                            {item.author}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* {loading && (
                <div className="text-center py-10">Loading reviews...</div>
            )} */}
        </div>
    );
};

export default ReviewSection;
