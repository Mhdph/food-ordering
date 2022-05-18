import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firbase";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 p-1 w-screen px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-xl text-headingColor font-semibold  ">City </p>
        </Link>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-8 ml-auto"
        >
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
        </motion.ul>
        <div className="realative flex items-center">
          <MdShoppingBasket className="ml-6 cursor-pointer text-textColor text-2xl" />
          <div className="absolute top-5 right-[120px] w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs font-semibold  text-white">2</p>
          </div>
        </div>
        <div className="relative ">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 h-10 min-h-[40px] minw-[40px] cursor-pointer ml-6 rounded-full drop-shadow-xl"
            alt="avatar"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "mahdihood0@gmail.com" && (
                <Link to={"/CreateContainer"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <p
                onClick={logout}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor"
              >
                LogOut <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between h-full  p-4">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-xl text-headingColor font-semibold  ">City </p>
        </Link>

        <div className="relative ">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-9 h-9 cursor-pointer rounded-full drop-shadow-xl"
            alt="avatar"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl top-[42px] right-0 rounded-lg flex flex-col absolute "
            >
              {user && user.email === "mahdihood0@gmail.com" && (
                <Link to={"/CreateContainer"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <Link to="/">
                  <li className="text-base px-4 py-2 text-textColor cursor-pointer transition-all ease-out hover:text-headingColor  hover:bg-slate-100 ">
                    Home
                  </li>
                </Link>
                <li className="text-base px-4 py-2 text-textColor cursor-pointer transition-all ease-out hover:text-headingColor  hover:bg-slate-100 ">
                  Menu
                </li>
                <li className="text-base px-4 py-2 text-textColor cursor-pointer transition-all ease-out hover:text-headingColor  hover:bg-slate-100 ">
                  About Us
                </li>
                <li className="text-base px-4 py-2 text-textColor cursor-pointer transition-all ease-out hover:text-headingColor  hover:bg-slate-100 ">
                  Service
                </li>
              </ul>

              <p
                onClick={logout}
                className="m2 bg-gray-200 p-2 hover:bg-gray-300 rounded-md shadow-md flex items-center gap-3 cursor-pointer justify-center transition-all duration-100 ease-in-out text-textColor"
              >
                LogOut <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
