import React from "react";
import arrow from '../assets/arrow.png'

const steps = [
    {
        id: 1,
        title: "Set disbursement\nInstructions",
        desc:
            "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
        id: 2,
        title: "Assembly retrieves\nfunds from your account",
        desc:
            "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
        id: 3,
        title: "Assembly initiates\ndisbursement",
        desc:
            "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
        id: 4,
        title: "Customer receives\nfunds payment",
        desc:
            "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
];

const HowItWorks = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 lg:px-0">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <p className="text-xs tracking-widest font-semibold text-orange-400 uppercase mb-2">
                    What’s the function
                </p>
                <h2 className="text-3xl font-bold text-slate-800">
                    Let’s see how it works
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                {steps.map((step, idx) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-start text-center lg:text-left lg:items-start relative"
                    >
                        <div className="flex items-center justify-center gap-5">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-xl font-semibold text-slate-900">
                                {step.id.toString().padStart(2, "0")}

                            </div>
                            <img src={arrow} className="w-40" alt="" />
                        </div>

                        <h3 className="font-semibold text-slate-900 leading-snug mb-4 whitespace-pre-line">
                            {step.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed max-w-xs whitespace-pre-line">
                            {step.desc}
                        </p>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
