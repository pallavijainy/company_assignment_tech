import React from "react";
import { IoMdEye } from "react-icons/io";

const courses = [
    {
        title: "Professional graphic design tutorial full course with exercise file",
        ratingtext: "4.0 (392 reviews)",
        rating: 4,
        students: "2,350 students watched",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managements.",
        tag: "7 Video Classes | 4 hrs",
        bullets: [],
    },
    {
        title: "Become ultimate photoshop expert within 30 days",
        ratingtext: "5.0 (392 reviews)",
        rating: 5,
        students: "2,538 students watched",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managements.",
        tag: "7 Video Classes | 4 hrs",
        bullets: [
            "How to make pixel perfect UI with different extension",
            "Create vector file from raster image like pro",
            "Make color gradient with photoshop built-in tools"
        ]
    },
    {
        title: "After effects animation tutorial with photoshop documents",
        ratingtext: "5.0 (392 reviews)",
        rating: 4,
        students: "2,356 students watched",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managements.",
        tag: "7 Video Classes | 4 hrs",
        bullets: [],
    },
    {
        title: "Adobe illustrator vector art design mockup",
        ratingtext: "5.0 (392 reviews)",
        rating: 4,
        students: "2,355 students watched",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managements.",
        tag: "7 Video Classes | 4 hrs",
        bullets: [],
    },
];

const PopularCourses = () => {
    return (
        <section className="lg:px-20 bg-white">
            <p className="uppercase text-sm text-center text-[#EF9E48]">Quality features</p>
            <h2 className="text-3xl font-bold text-center mb-12">Popular Designing Course</h2>

            <div className="space-y-4">
                {courses.map((course, index) => (
                    <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center bg-white  rounded-lg border border-gray-50 duration-500 transition-all hover:shadow-[0px_10px_30px_#F3F4F5] p-5 gap-6">
                        <div className="flex-shrink-0 bg-[#FCF2E8] text-[#EF9E48] p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
                            </svg>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-sm text-gray-500 mb-2">
                                <span>{"⭐".repeat(course.rating)} {course.ratingtext}</span>
                                <p className="text-sm text-gray-500 flex items-center gap-1"><IoMdEye />
                                    {course.students}</p>
                            </div>
                            <h3 className="text-lg font-semibold mb-1 text-gray-900">{course.title}</h3>
                            <p className="text-sm text-gray-600">{course.description}</p>
                            {course.bullets.length > 0 && (
                                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                                    {course.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="mt-4 lg:mt-0">
                            <span className="bg-[#3FDBB1] text-white px-4 py-2 rounded-md text-sm font-normal">
                                {course.tag}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCourses;
