import React from "react";

const footerData = [
    {
        title: "About Us",
        links: [
            "Support Center",
            "Customer Support",
            "About Us",
            "Copyright",
            "Popular Campaign",
        ],
    },
    {
        title: "Our Information",
        links: [
            "Return Policy",
            "Privacy Policy",
            "Terms & Conditions",
            "Site Map",
            "Store Hours",
        ],
    },
    {
        title: "My Account",
        links: [
            "Press inquiries",
            "Social media directories",
            "Images & B-roll",
            "Permissions",
        ],
    },
    {
        title: "Policy",
        links: [
            "Application security",
            "Software principles",
            "Unwanted software policy",
            "Responsible supply chain",
        ],
    },
];

const Footer = () => {
    return (
        <footer className="">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8  max-w-4xl p-5 border-t  mx-auto text-[#0F2137]">
                {footerData.map((section, idx) => (
                    <div key={idx}>
                        <h4 className="text-base font-semibold mb-6">{section.title}</h4>
                        <ul className="space-y-2 text-sm text-[#343D48]">
                            {section.links.map((link, i) => (
                                <li
                                    key={i}
                                    className="hover:text-[#EF9E48] transition cursor-pointer"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
