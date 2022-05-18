import React from "react";
import Bike from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

function HomeContainer() {
  return (
    <section
      className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full "
      id="home"
    >
      <div className="py-2  flex flex-col items-start gap-6 justify-center flex-1 lg:pb-40">
        <div className="flex items-center rounded-full justify-center bg-orange-100 p-2 gap-2">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 bg-white h-6 rounded-full overfelow-hidden  drop-shadow-xl">
            <img
              className="w-full h-full object-contain"
              src={Bike}
              alt="Delivery"
            />
          </div>
        </div>
        <p className=" text-[2.5rem] md:text-[1.5rem] lg:text-[3.6rem] tracking tracking-wide text-headingColor font-bold">
          The Fastest Delivery in
          <span className="text-orange-500 text-[2.8rem] md:text-[1.8rem] lg:text-[3.6rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left lg:w-[80%] md:text-[1rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          odit distinctio quidem iste saepe eveniet consectetur debitis
          architecto possimus quibusdam ea autem unde ipsa exercitationem, vel
          beatae
        </p>
        <button
          type="button"
          className=" bg-gradient-to-br rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 w-full md:w-auto px-4 py-2 from-orange-400 to-orange-500"
        >
          New Order
        </button>
      </div>
      <div className="p-4 flex-1 felx items-center relative py-2">
        <img
          src={HeroBg}
          className="h-[420px] lg:h-[420px] 2xl:h-[650px] w-full lg:w-[440px] md:w-auto ml-auto"
          alt="background"
        />
        <div className="w-full h-full absolute  xl:ml-14 flex top-0 left-0 items-center justify-center lg:px-12 2xl:px-32 2xl:py-[64px]  py-4 xl:py-20  lg:py-12 gap-8 lg:gap-6 xl:gap-10  flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-[160px] xl:w-[190px] p-4 lg:mb-20 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  className="w-20 lg:w-34 2xl:w-36 md:w-28 -mt-10 lg:-mt-20"
                  src={n.imageSrc}
                  alt="I1"
                />
                <p className="text-sm md:text-[12px] lg:text-[12px] xl:text-base  font-semibold text-textColor mt-2 xl:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] md:text-[12px] lg:text-[12px] xl:text-base font-semibold text-lighttextGray my-1 xl:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
