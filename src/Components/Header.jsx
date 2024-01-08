import React from "react";
import Logo from "../img/logo.png";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Scale } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const HEADER_MENU = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "menu",
      name: "Menu",
    },
    {
      id: "aboutUs",
      name: "About Us",
    },
    {
      id: "services",
      name: "Services",
    },
  ];
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };

  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      <div className="sm:flex w-full h-full items-center justify-between ">
        <Link t0="/" className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ml-auto">
            {[...HEADER_MENU].map((item) => {
              const { name = "", id = "" } = item || {};
              return (
                <li
                  key={id + "str"}
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                >
                  {name}
                </li>
              );
            })}
          </ul>
          <div className="relative flex items-center justify-center">
            <ShoppingBasketSharpIcon className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
              alt="userprofile"
              onClick={login}
            />
          </div>
        </div>
      </div>
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
