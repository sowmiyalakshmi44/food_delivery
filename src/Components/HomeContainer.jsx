import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full  h-screen "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start md:justify-start gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike delivery
          </p>
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor ">
          The Fastest delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            your city
          </span>{" "}
        </p>
        <p className="text-base  text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tenetur
          nisi facilis dolore ab exercitationem sequi doloremque tempore
          reprehenderit consequuntur? Sit quaerat est officiis earum distinctio
          a reiciendis dolorem esse.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 md:auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100  "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-400 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute  top-0 left-0 flex items-center justify-center  lg:px-32 py-4 gap-4 flex-wrap ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.restaurantName}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">Rs</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
