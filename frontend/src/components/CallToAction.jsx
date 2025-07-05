import React from "react";

const CallToAction = () => {
    return (
        <section className="md:p-20 p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#02073E] mb-6">
                Ready to learn design <br className="hidden md:block" />
                with Nia Matos
            </h2>

            <button className="bg-[#FFF0E4] text-[#EF9E48] text-sm font-semibold px-6 py-2 rounded-md shadow-sm hover:bg-[#ffe4cd] transition">
                Start Learning Today
            </button>
        </section>
    );
};

export default CallToAction;
