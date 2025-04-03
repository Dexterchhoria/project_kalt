import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = {
    Home: "",
    Events: "events",
    Merchandise: "merchandise",
    Schedule: "schedule",
    Gallery: "gallery",
    Sponsors: "sponsors",
    Contacts: "contacts",
  };

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-2 sm:p-4 lg:px-12 text-white bg-black/40 sm:bg-black/10 border-b border-white/10 z-20">
      {/* Logo */}
      <Link to="">
        <div className="flex items-center">
          <img src={logo} alt="KALTARANG" className="h-16" />
          <span className="text-2xl font-bold text">KALTARANG</span>
        </div>
      </Link>
      {/* Desktop Nav */}
      <nav className="hidden xl:flex gap-6 text-lg text uppercase">
        {Object.entries(navLinks).map(([name, path]) => (
          <Link key={name} to={`/${path}`} className="hover:text-gray-300">
            {name}
          </Link>
        ))}
      </nav>
{/* added link,target  */}
      <a
        href="https://docs.google.com/forms/d/1zBTANV2TTpEjqfSpKjV50Nj9CX3jqF4q-G_MK00951Y/edit" target="_blank"
        className="hidden xl:block bg-yellow-500 text text-black font-bold px-4 py-2 rounded hover:bg-yellow-600 text-sm"
      >
        Register
      </a>

      <button
        onClick={toggleMenu}
        className="xl:hidden text-white text text-2xl z-30"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/80 bg-opacity-90 text flex flex-col items-center justify-center gap-6 text-white text-xl uppercase transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        {Object.entries(navLinks).map(([name, path]) => (
          <Link
            key={name}
            to={`/${path}`}
            onClick={closeMenu}
            className="hover:text-gray-300"
          >
            {name}
          </Link>
        ))}
        <a
          href="https://docs.google.com/forms/d/1zBTANV2TTpEjqfSpKjV50Nj9CX3jqF4q-G_MK00951Y/edit"
          target="_blank"
          className="bg-yellow-500 text-black font-bold px-6 py-3 rounded hover:bg-yellow-600 text-lg"
        >
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
