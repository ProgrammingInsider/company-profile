'use client'

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
    const [hideMenu, setHideMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isSticky, setIsSticky] = useState(false);

    const navLinks = [
        { id: "hero", name: "Home" },
        { id: "about", name: "About Us" },
        { id: "service", name: "Services" },
        { id: "whyus", name: "Why Us" },
        { id: "contact", name: "Contact Us" },
    ];

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (!hash) {
                setActiveSection("hero"); 
            } else {
                setActiveSection(hash);
            }
        };

        handleHashChange(); 
        window.addEventListener("hashchange", handleHashChange); 

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log(isSticky);
    

    return (
        <div>
            {/* Top Contact Bar */}
            <div className="secondaryBg flex flex-col gap-2 justify-center items-center footerText p-4 md:flex-row md:justify-between md:px-20 md:p-3">
                <div className="flex items-center text-sm">
                    <MdEmail className="mr-2"/>info@amgholdingsplc.com
                </div>
                <div className="flex gap-3 items-center text-sm">
                    <span className="flex gap-1 items-center"><FaPhoneAlt className="mr-2" />+251922112208</span>
                    <span className="flex gap-1 items-center"><FaPhoneAlt className="mr-2" />+251924434904</span>
                </div>
            </div>

            {/* Header Section */}
            <div className={`lg:flex justify-between items-center background w-full overflow-hidden  z-50 ${isSticky ? "fixed top-0 z-50 rounded-none h-28 shadow-md" : "max-w-7xl lg:absolute right-0 lg:rounded-s-full h-36 md:h-24"}`}>
                <div className="lg:flex h-full w-full max-w-7xl px-4 mx-auto">
                    {/* <div className="lg:rounded-s-full bg-yellow-200 flex justify-center items-center  z-10">
                    </div> */}
                        <div className={`lg:rounded-s-full flex h-full justify-between items-center w-full md:w-4/5 mx-auto lg:max-w-7xl lg:pl-8`}>
                            <h1 className="text-6xl primaryText">Logo</h1>
                            <RxHamburgerMenu 
                                className="text-3xl cursor-pointer lg:hidden" 
                                onClick={() => setHideMenu(true)} 
                            />
                        </div>
                </div>

                {/* Overlay when the menu is open */}
                {hideMenu && (
                    <div 
                        className="fixed top-0 left-0 w-full h-full secondaryBg opacity-80 z-40 lg:hidden"
                        onClick={() => setHideMenu(false)} 
                    />
                )}

                {/* Navigation */}
                <nav 
                    className={`fixed background top-0 left-0 bottom-0 w-full sm:w-80 flex flex-col justify-center lg:items-center text-xl heading font-medium p-8 transform transition-transform duration-500 z-50 lg:z-0 ${
                        hideMenu ? "translate-x-0" : "-translate-x-full"
                    } lg:relative lg:flex-row lg:justify-end lg:gap-7 lg:translate-x-0 lg:w-auto`}
                >
                    <MdOutlineClose  
                        className="absolute text-5xl para top-2 right-2 cursor-pointer border rounded-full p-2 para lg:hidden" 
                        onClick={() => setHideMenu(false)}
                    />
                    {navLinks.map(({ id, name }) => (
                        <Link 
                            key={id} 
                            href={`#${id}`} 
                            className={`navLink py-5 border-b border-gray-200 lg:border-0 lg:py-0 text-nowrap ${
                                activeSection === id ? "activeLink" : ""
                            }`}
                            onClick={() => {
                                setActiveSection(id); 
                                setHideMenu(false);  
                            }}
                        >
                            {name}
                        </Link>
                    ))}
                    <Link href={"#contact"} className={`hidden w-40 lg:block text-base text-center font-medium border px-5 py-3 rounded-ss-lg rounded-ee-lg primaryBg text-white ${isSticky ? "lg:hidden" : "lg:block"}`}>Get In Touch</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
