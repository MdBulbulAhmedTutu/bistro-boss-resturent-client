
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom"; const Footer = () => {
    return (
        <div>
            <div className="flex items-center flex-col lg:flex-row justify-between">
                <div className="bg-[#1F2937] w-full text-white py-10 text-center h-[300px]">
                    <h2>CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] w-full text-white py-10 text-center h-[300px]">
                    <h2>Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex items-center space-x-2 justify-center text-2xl mt-4">
                        <Link><FaFacebookF></FaFacebookF></Link>
                        <Link><FaInstagram></FaInstagram></Link>
                        <Link><IoLogoTwitter></IoLogoTwitter></Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] py-4">
                <p className="text-center text-white">Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;