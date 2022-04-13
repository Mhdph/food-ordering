import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firbase";

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return (
    <header className="fixed z-50 p-6  w-screen px-16">
      {/* desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-xl text-headingColor font-semibold  ">City </p>
        </Link>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor cursor-pointer transition-all ease-out hover:text-headingColor">
            Home
          </li>
          <li className="text-base text-textColor cursor-pointer transition-all ease-out hover:text-headingColor">
            Menu
          </li>
          <li className="text-base text-textColor cursor-pointer transition-all ease-out hover:text-headingColor">
            About Us
          </li>
          <li className="text-base text-textColor cursor-pointer transition-all ease-out hover:text-headingColor">
            Service
          </li>
        </ul>
        <div className="realative flex items-center">
          <MdShoppingBasket className="ml-6 cursor-pointer text-textColor text-2xl" />
          <div className="absolute top-5 right-[120px] w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs font-semibold  text-white">2</p>
          </div>
        </div>
        <div className="relative ">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 h-10 min-h-[40px] minw-[40px] cursor-pointer ml-6  drop-shadow-xl"
            alt="avatar"
            onClick={login}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden h-full  p-4"></div>
    </header>
  );
}

export default Header;
