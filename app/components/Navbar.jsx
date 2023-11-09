// Navbar.js

import React from 'react';
import { FaDiscord, FaTwitter, FaInstagram, FaWallet } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className="bg-primary p-4 items-center p-4 flex">
            <div className="container mx-auto">
                <div className="flex justify-evenly items-center">
                    <div className="text-white title Orbitron">NFTHub</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-white font-bold">Home</a>
                        <a href="#" className="text-white font-bold">Collection</a>
                        <a href="#" className="text-white font-bold">Choose</a>
                        <a href="#" className="text-white font-bold">About</a>
                        <a href="#" className="text-white font-bold">Roadmap</a>
                        <a href="#" className="text-white font-bold">Blog</a>

                    </div>
                    <div className="hidden md:flex space-x-4 pt-30">
                        <FaDiscord className="text-white text-2xl" />
                        <FaTwitter className="text-white text-2xl " />
                        <FaInstagram className="text-white text-2xl " />
                        <FaWallet className="text-white text-2xl " />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;