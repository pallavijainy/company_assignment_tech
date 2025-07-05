import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdEye } from "react-icons/io";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../assets/review/1.jpg";
import img2 from "../assets/review/2.jpg";
import img3 from "../assets/review/3.jpg";
import map from '../assets/map.svg'
const reviews = [
    {
        title: "Convert your web layout theming easily with sketch zeplin extension",
        rating: 5,
        ratingtext: "5.0 (392 reviews)",
        author: "1,037 students watched",
        image: img3,
    },
    {
        title: "Create multiple artboard by using figma prototyping tools development",
        rating: 4,
        ratingtext: "4.5 (524 reviews)",
        author: "3,532 students watched",
        image: img2,
    },
    {
        title: "How to work with prototype design with adobe xd featuring tools",
        rating: 5,
        ratingtext: "5.0 (392 reviews)",
        author: "2,538 students watched",
        image: img1,
    },
];



const TutorialHighlightSection = () => {
    return (
        <section className="md:p-20 py-10" style={{ backgroundImage: `url(${map})`, backgroundRepeat:"no-repeat" }} >
            <div className="max-w-4xl mx-auto">
                <div className="w-full flex flex-col lg:flex-row grid-cols-10 md:gap-20">
                    <div className="w-full lg:w-1/2">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000 }}
                            loop
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                            {reviews.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="rounded-b-lg border border-gray-50">
                                        <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                                        <div className="p-4 bg-white relative">
                                            <span className="text-yellow-400 text-base">{"★".repeat(item.rating)}</span>{" "}
                                            <span className="text-sm text-gray-600">{item.ratingtext}</span>
                                            <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                                            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                                                <IoMdEye />
                                                {item.author}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="">
                            <p className="text-[#EF9E48] uppercase text-sm mb-2">Free Tutorial</p>
                            <h2 className="text-3xl font-bold leading-snug mb-4">
                                More than thousand of free tutorial upload every weeks
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Get your tasks delivered at let home collect sample from the victory of the managements
                                that supplies best design system guidelines ever. Get your tasks delivered at let home
                                collect sample.
                            </p>
                            <button className="bg-[#FCF2E8] font-semibold text-[#EF9E48] px-5 py-2 rounded-lg transition">
                                Explore details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorialHighlightSection;
