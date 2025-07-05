import React, { useState } from "react";

const PricingPlans = () => {
    const [planType, setPlanType] = useState("monthly");

    return (
        <section className="md:p-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <p className="text-sm text-[#EF9E48] uppercase font-semibold">Pricing Plan</p>
                    <h2 className="text-3xl font-bold mt-2">Choose your pricing policy</h2>

                    <div className="mt-6 inline-flex p-1 bg-[#F7F8FB] rounded-md overflow-hidden">
                        <button
                            onClick={() => setPlanType("monthly")}
                            className={`px-5 py-2 text-sm font-medium rounded-md ${planType === "monthly"
                                ? "bg-white"
                                : "bg-transparent"
                                } transition`}
                        >
                            Monthly Plan
                        </button>
                        <button
                            onClick={() => setPlanType("annual")}
                            className={`px-5 py-2 text-sm font-medium rounded-md ${planType === "annual"
                                ? "bg-white"
                                : "bg-transparent"
                                } transition`}
                        >
                            Annual Plan
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="border border-gray-50  hover:border-[#3FDBB1] hover:border-2 p-5 rounded-lg duration-500 transition-all flex flex-col gap-5 ">
                        <div>
                            <h3 className="text-xl font-bold mb-1">Free Plan</h3>
                            <p className="text-sm text-gray-500 mb-4">For small teams or office</p>
                        </div>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                ✅ Ultimate access to all courses, exercises and assessments
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Free access for all kind of exercise corrections with downloads
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Total assessment corrections with free download access system
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 line-through">
                                ❌ Unlimited download of courses on the mobile app contents
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 line-through">
                                ❌ Download and print courses and exercises in PDF
                            </li>
                        </ul>


                        <div className="flex items-center justify-center">
                            <button className="bg-[#FCF2E8] font-semibold text-[#EF9E48] px-5 py-2 rounded-lg transition">
                                Start free trial
                            </button>
                        </div>
                    </div>

                    <div className="border border-gray-50  hover:border-[#3FDBB1] hover:border-2 p-5 rounded-lg duration-500 transition-all flex flex-col gap-5 ">
                        <div>
                            <div className="bg-[#EF9E48] text-white text-xs w-fit px-3 py-1 rounded-md font-medium">
                                Recommended
                            </div>

                            <div className="flex items-center justify-between gap-5">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Premium</h3>
                                    <p className="text-sm text-gray-500 mb-1">For startup enterprise</p>
                                </div>
                                <div>
                                    <p>Starting from </p>
                                    <p className="text-2xl text-[#3FDBB1] font-bold ">
                                        {planType === "monthly" ? "49.99/mo" : "499.99/yr"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                ✅ Ultimate access to all courses, exercises and assessments
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Free access for all kind of exercise corrections with downloads
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Total assessment corrections with free download access system
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Unlimited download of courses on the mobile app contents
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Download and print courses and exercises in PDF
                            </li>
                        </ul>

                        <div className="flex items-center justify-center">
                            <button className="bg-[#FCF2E8] font-semibold text-[#EF9E48] px-5 py-2 rounded-lg transition">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
