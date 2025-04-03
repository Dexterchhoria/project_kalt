import React from "react";
import logo from "../assets/logo.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import pdf from "../assets/broucher.pdf";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 text px-10 border-t border-gray-300">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4 mb-4 md:mb-0">
          <div className="flex items-center">
            <img src={logo} alt="KALTARANG" className="h-16" />
            <span className="text-2xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text">
              KALTARANG
            </span>
          </div>

          <a
            href="https://docs.google.com/forms/d/1zBTANV2TTpEjqfSpKjV50Nj9CX3jqF4q-G_MK00951Y/edit"
            target="_blank"
            className="mt-0 sm:mt-2 ml-12 sm:ml-16 bg-yellow-500 text text-black py-1 px-2 rounded font-bold"
          >
            Register
          </a>
        </div>

        <div className="w-full lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-gray-400 font-semibold">Participate</h2>
          <Link to="events" className="block text-white hover:text-yellow-500">
            Events Portal
          </Link>
          <a
            href="https://whatsapp.com/channel/0029Vb0uF0lK0IBZB9vG2Q3f"
            target="_blank"
            className="block text-white hover:text-yellow-500"
          >
            Join The Community
          </a>
        </div>

        <div className="w-full lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-gray-400 font-semibold">Explore More</h2>
          <Link to="gallery" className="block text-white hover:text-yellow-500">
            Gallery
          </Link>
          <a
            href={pdf}
            download="Broucher.pdf"
            className="block text-white hover:text-yellow-500"
          >
            Brochure
          </a>
        </div>

        <div className="w-full lg:w-1/4">
          <h2 className="text-gray-400 font-semibold">Reach Out To Us</h2>
          <Link
            to="contacts"
            className="block text-white hover:text-yellow-500"
          >
            Have Any Queries?
          </Link>
          <Link
            to="contacts"
            className="block text-white hover:text-yellow-500"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright & Made with Love Section */}
      <div className="text-center flex md:flex-row flex-col gap-2 items-center justify-between mt-12 text-gray-400 text-sm">
        <p>Made with ❤️ by Kaltarang Team.</p>
        <div className="flex justify-center items-start space-x-4 ">
          <a
            href="https://whatsapp.com/channel/0029Vb0uF0lK0IBZB9vG2Q3f"
            target="_blank"
          >
            <FaWhatsapp className="text-white text-2xl hover:text-yellow-500" />
          </a>
          <a href="https://www.instagram.com/kaltarang_rgipt/" target="_blank">
            <FaInstagram className="text-white text-2xl hover:text-yellow-500" />
          </a>
          <a href="https://www.youtube.com/@kaltarang_RGIPT" target="_blank">
            <FaYoutube className="text-white text-2xl hover:text-yellow-500" />
          </a>
          <a
            href="https://www.linkedin.com/company/kaltarang-rgipt/"
            target="_blank"
          >
            <FaLinkedin className="text-white text-2xl hover:text-yellow-500" />
          </a>
          <a href="https://www.facebook.com/kaltarang" target="_blank">
            <FaFacebook className="text-white text-2xl hover:text-yellow-500" />
          </a>
        </div>
        <p> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
