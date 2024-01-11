// import React from "react";
import Logo from "../img/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
// import { Scale } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";

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

  const [isMenu, setIsMenu] = useState(false);


  const [{ user }, dispatch] = useStateValue();
  const login = async () => {
    // let response = await signInWithPopup(firebaseAuth, provider);
    // console.log(response)
    if(!user){
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));

    }
    else {
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
    <header className="fixed z-50 w-screen  p-6 px-16">
      <div className="sm:flex w-full h-full items-center justify-between ">
        <Link t0="/" className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
             className="flex items-center gap-8 ml-auto">
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
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
              alt="userprofile"
              onClick={login}
            />
              {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "sowmiya.2005139@srec.ac.in" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
