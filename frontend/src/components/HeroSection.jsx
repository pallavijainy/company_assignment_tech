import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { MdSearch } from "react-icons/md";
import heroVideo from "../assets/video.mp4";
import pattern from "../assets/pattern.svg";
import { FaPlay, FaPause } from "react-icons/fa";

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="h-screen w-full flex items-center">
            <div className="w-2/3 h-full bg-gradient-to-l rounded-br-[100px] to-[#E0F5FA] from-[#FFFDE6]"></div>
            <div className="w-1/3 h-full bg-white"></div>
            <div className="absolute top-0 left-0 h-full w-full">
                <div className="max-w-6xl mx-auto">
                    <Navbar />
                    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
                        <div className="max-w-lg">
                            <p className="text-sm text-gray-500">Trusted by over 4,332 students</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mt-2 mb-6">
                                Learn Design with Nia Matos
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Get your blood tests delivered at let home collect sample from the victory of the managements that supply the best
                                design system guidelines ever.
                            </p>
                            <div className="flex p-2 px-4 gap-2 border border-gray-100 bg-white rounded-lg">
                                <input
                                    type="text"
                                    placeholder="Search Course Name"
                                    className="p-1 outline-none w-full text-gray-400"
                                />
                                <div className="flex items-center justify-center">
                                    <MdSearch className="opacity-60" />
                                </div>
                            </div>
                            <div className="mt-4 flex space-x-4 text-gray-500 text-sm">
                                <span>✓ Paypal</span>
                                <span>✓ Google</span>
                                <span>✓ Dropbox</span>
                            </div>
                        </div>

                        <div className="relative w-full md:w-[380px] hidden lg:block h-96">
                            <div className="w-full h-full z-50 relative">
                                <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center absolute top-0 left-0 z-10">
                                    <div
                                        onClick={togglePlayPause}
                                        className="w-14 h-14 flex items-center justify-center rounded-full bg-white  shadow-lg"
                                    >
                                        {isPlaying ? <FaPause size={20} className="cursor-pointer" /> : <FaPlay size={20}  className="cursor-pointer"/>}
                                    </div>
                                </div>

                                <video
                                    ref={videoRef}
                                    src={heroVideo}
                                    className="w-full h-full object-cover"
                                    muted
                                />
                            </div>

                            <div className="absolute w-full h-full top-7 -right-7 border-2 border-yellow-400"></div>
                            <div className="absolute -top-10 -right-12 w-52 z-10 h-52">
                                <img src={pattern} className="w-full h-full object-cover" alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
