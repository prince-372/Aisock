import React from "react";
import step1 from '../assets/image/stap1Img.png'
import step2 from '../assets/image/stap2Img.png'
import step3 from '../assets/image/stap3img.png'
import elipes1 from '../assets/image/aiElipes.png'
import elipes2 from '../assets/image/aiSecondimg.png'
import blurElipes from '../assets/image/blurElipes.png'

const Aistocks = () => {
  return (
    <>
      <section className=" bg-commangradiunt relative md:py-16 py-10">
        <img className=" absolute right-0 top-0" src={elipes1} alt="elipes1" />
        <img className=" absolute right-0 top-[31%]" src={blurElipes} alt="blurElipes" />
        <img className=" absolute left-0 top-[31%]" src={elipes2} alt="elipes2" />
        <div className=" container px-3 mx-auto">
          <div data-aos="zoom-in" className=" flex justify-center ">
            <button className=" tracking-[10px] text-white duration-300 hover:duration-300 hover:bg-commangradiunt hover:border hover:border-transparent font-Opensans font-bold sm:text-base text-[14px] rounded-[75px] border border-white py-4 px-8">
              HOW IT WORKS
            </button>
          </div>
          <p data-aos="zoom-in" className=" font-Opensans font-light sm:text-5xl text-3xl sm:leading-[60px] leading-[31px] text-white text-center pt-2">
            How AI Stocks Workes
          </p>
          <p data-aos="zoom-in" className=" font-Opensans font-normal text-base text-lightgray1 max-w-[891px] text-center mx-auto pt-6">
            If you've used ChatGPT, the OpenAl chatbot that has wowed users by
            writing code and instantly answering complex questions, you've
            gotten a glimpse into the next frontier in artificial intelligence,
            as big tech companies are racing to develop the leading Al chatbot.
          </p>
          <p data-aos="zoom-in" className=" font-Opensans font-normal text-base text-lightgray1 max-w-[891px] text-center mx-auto pt-6">
             If you want to get portfolio exposure to Al companies but don't
            want to identify individual Al stocks, you can invest in an
            Al-focused exchange-traded fund (ETF). AI ETFs provide exposure to a
            broad range of the best Al companies, eliminating the need to
            research and choose individual stocks on your own.
          </p>
          <div data-aos="zoom-in" className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[927px] mx-auto sm:pt-24">
            <div className=" flex flex-col items-center relative z-10 pt-4 md:pt-0">
                <img className=" w-[240px] h-[240px] object-cover " src={step1} alt="step1" />
                <p className=" font-Opensans font-bold text-4xl text-white text-center pt-4">Sign up</p>
                <p className=" font-Opensans sm:text-base text-[14px] font-bold text-center text-lightgray1 pt-2">Fill out the Registration Form to <div className=" block">Get Started.</div></p>
            </div>
            <div className=" flex flex-col items-center relative z-10 pt-4 md:pt-0">
                <img className=" w-[240px] h-[240px] object-cover " src={step2} alt="step2" />
                <p className=" font-Opensans font-bold text-4xl text-white text-center pt-4">Verification</p>
                <p className=" font-Opensans sm:text-base text-[14px] font-bold text-center text-lightgray1 max-w-[240px] mx-auto pt-2">Schedule a Call with Our Verified AI Trading Mentors to Guide You Through Your Investment Journey</p>
            </div>
            <div className=" flex flex-col items-center relative z-10 pt-4 md:pt-0">
                <img className=" w-[240px] h-[240px] object-cover " src={step3} alt="step3 " />
                <p className=" font-Opensans font-bold text-4xl text-white text-center pt-4">Start Investing</p>
                <p className=" font-Opensans sm:text-base text-[14px] font-bold text-center text-lightgray1 pt-2">Begin shaping your financial  <div className=" block">future with confidence and ease</div></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aistocks;
