import React from 'react'
import bollElipes from '../assets/image/bollElipes.png'

const Statistics = () => {
  return (
    <>
    <section className=' md:pt-40 md:pb-[324px] pb-10 pt-10 relative z-10 overflow-hidden'>
        <img className=' absolute left-0 top-[34%] -z-10' src={bollElipes} alt="bollElipes" />
        <div className=" w-[146px] h-[146px] bg-commangradiunt absolute left-[-5%] top-[28%] elipesFirst"></div>
        <div className=' container px-3 mx-auto'>
       <div data-aos="zoom-in" className=' flex justify-center'>
        <button className=' font-Opensans font-bold text-base text-white rounded-[75px] bg-blackgradiunt py-4 px-8 border border-lightblue tracking-[10px] duration-300 hover:bg-commangradiunt'>STATISTICS</button>
       </div>
       <p data-aos="zoom-in" className=' font-Opensans font-light text-white sm:text-5xl text-3xl sm:leading-[60px] leading-[31px] text-center pt-2'>Statistics For Today</p>
       <div data-aos="fade-down" className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-[1320px] mx-auto sm:pt-[58px] pt-2 justify-items-center'>
         <div className=' lg:max-w-[363px] w-full lg:h-[293px] border border-skyblue py-2 px-2 rounded-[18px] bg-blackgradiunt mt-5'>
         <div className=' lg:max-w-[346px] w-full lg:h-[218px] border border-skyblue  flex justify-center items-center rounded-[18px] relative overflow-hidden'>
           <p className=' font-Roboto font-bold sm:text-[128px] text-[76px] sm:leading-[150px] leading-[119px] stroke'>01</p>
           <div className=' w-[172px] h-[104px] bg-commangradiunt absolute elipesStatistics bottom-[-28%] rounded-[64%]'></div>
         </div>
           <p className=' font-Opensans font-semibold sm:text-xl text-base text-white text-center sm:pt-7 '>Places left to register</p>
         </div>
         <div className=' lg:max-w-[363px] w-full lg:h-[293px] border border-skyblue py-2 px-2 rounded-[18px] bg-blackgradiunt mt-5'>
         <div className=' lg:max-w-[346px] w-full lg:h-[218px] border border-skyblue  flex justify-center items-center rounded-[18px] relative overflow-hidden'>
           <p className=' font-Roboto font-bold sm:text-[128px] text-[76px] sm:leading-[150px] leading-[119px] stroke'>135</p>
           <div className=' w-[172px] h-[104px] bg-commangradiunt absolute elipesStatistics bottom-[-28%] rounded-[64%]'></div>
         </div>
           <p className=' font-Opensans font-semibold sm:text-xl text-base text-white text-center sm:pt-7'>Average Registrations per day</p>
         </div>
         <div className=' lg:max-w-[363px] w-full lg:h-[293px] border border-skyblue py-2 px-2 rounded-[18px] bg-blackgradiunt relative mt-5'>
         <div className=' lg:max-w-[346px] w-full lg:h-[218px] border border-skyblue  flex justify-center items-center rounded-[18px] relative overflow-hidden'>
           <p className=' font-Roboto font-bold sm:text-[128px] text-[76px] sm:leading-[150px] leading-[119px] stroke'>5X</p>
           <div className=' w-[172px] h-[104px] bg-commangradiunt absolute elipesStatistics bottom-[-28%] rounded-[64%]'></div>
         </div>
           <p className=' font-Opensans font-semibold sm:text-xl text-base text-white text-center sm:pt-7'>The Average Earnings Increase</p>
         </div>
       </div>
        </div>
    </section>
    </>
  )
}

export default Statistics