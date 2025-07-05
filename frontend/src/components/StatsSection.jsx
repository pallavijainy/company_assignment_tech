import React from "react";
import { FiArrowDown } from "react-icons/fi";

const StatsSection = () => {
    return (
        <section
            id="stats"
            className="relative flex flex-col lg:flex-row justify-between gap-12 md:p-20 items-center">
            <div className="w-full">
                <div className="grid grid-cols-2 gap-6 ">
                    <div className="bg-white shadow-[10px_10px_20px_#F3F4F5] p-6 py-10 mt-5 rounded-lg text-center">
                        <h2 className="text-4xl font-bold text-orange-500">80K+</h2>
                        <p className="mt-2 text-sm text-gray-600">We have more than students</p>
                    </div>
                    <div className="bg-white shadow-[10px_10px_20px_#F3F4F5] p-6 py-10 mb-5  rounded-lg text-center">
                        <h2 className="text-4xl font-bold text-red-500">150+</h2>
                        <p className="mt-2 text-sm text-gray-600">Free online tutorials videos available</p>
                    </div>
                    <div className="bg-white shadow-[10px_10px_20px_#F3F4F5] p-6 py-10 mt-5  rounded-lg text-center">
                        <h2 className="text-4xl font-bold text-pink-500">90+</h2>
                        <p className="mt-2 text-sm text-gray-600">Daily updated blog post maintain</p>
                    </div>
                    <div className="bg-white shadow-[10px_10px_20px_#F3F4F5] p-6 py-10 mb-5  rounded-lg text-center">
                        <h2 className="text-4xl font-bold text-purple-600">& 3M</h2>
                        <p className="mt-2 text-sm text-gray-600">Job posted everyday with qualification</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-3 items-start">
                <p className="uppercase text-sm  text-[#EF9E48]">Core features</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
                    Smart Jackpots that you may love this anytime &amp; anywhere
                </h3>
                <p className="text-gray-600 leading-9">
                    Get your tests delivered at let home collect sample from the victory of the
                    managements that supplies best design system guidelines ever. Get your tests
                    delivered at let home collect sample.
                </p>
                <button className="bg-[#FCF2E8] font-semibold text-[#EF9E48] px-5 py-2 rounded-lg transition">
                    Explore details
                </button>
            </div>

            <div className="absolute bottom-10 left-1/2">
                <div>
                    <FiArrowDown
                        size={20}
                        className="animate-bounce cursor-pointer"
                        onClick={() => {
                            window.scrollBy({
                                top: window.innerHeight,
                                behavior: "smooth",
                            });
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
