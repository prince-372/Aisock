import React from "react";
import nvidia from '../assets/image/nvidiaImg.png'
import windowImg from '../assets/image/windowImg.png'
import amozonImg from '../assets/image/amazonImg.png'
import palantirImg from '../assets/image/palantirImg.png'
import crowdImg from '../assets/image/crowdImg.png'
import uipathImag from '../assets/image/uipathImag.png'
import aristaImg from '../assets/image/aristaImg.png'
import rocketImg from '../assets/image/rockatImg.png'
import firstElipes from '../assets/image/secFirstelipes1.png';
import secElipes from '../assets/image/secFirstelipes2.png';

const myarray = [
  
  {
    Img: nvidia ,
    heading: "Nvidia - AI GPU 1 year 228% Growth",
    pera:
      "NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.",
  },
   {
    margin: "lg:mt-[158px] mt-[20px]",
  Img: windowImg,
     heading: "Microsoft - Co-pilot 1 year 64% Growt",
    pera: "Microsoft A tech giant with diverse solutions for investors, including Azure cloud services. With market dominance in software, cloud, and hardware, Microsoft shows strong growth potential. Its leadership in enterprise software, Azure cloud computing, and innovation make it an attractive investment.",
    },
   {
    margin: "lg:mt-[-100px] mt-[20px]",
  Img: amozonImg,
     heading: "Amazon AWS - AI 1 year 69% Growth",
    pera: "Amazon A tech juggernaut with AWS cloud services, offering diverse solutions for investors. With market leadership in cloud computing, e-commerce, and more, Amazon shows strong growth potential. Its dominance in AWS cloud services, e-commerce, and innovation make it an attractive investment. Backed by technological prowess, Amazon remains a top choice for investors",
    },
    {
      margin: "lg:mt-[108px] mt-[20px]",
    Img: palantirImg,
       heading: "Palantir - AI Analytics 1 year 157% Growth",
      pera: "Palantir Technologies, a leading data analytics company, revolutionizes decision-making with its powerful software platforms. With a track record of serving government agencies and commercial enterprises, Palantir's innovative solutions and market dominance make it a top choice for investors seeking growth and technological prowess in the AI stock market.",
      },
      {
        margin: "lg:mt-[-100px] mt-[20px]",
      Img: crowdImg,
         heading: "Crowd strike - Cyber 1 year 156% Growth ",
        pera: "CrowdStrike Shaping the Future of Cybersecurity with Advanced AI Solutions. As a trailblazer in threat detection and response, CrowdStrike integrates AI-driven capabilities to fortify defenses against evolving cyber threats. With its innovative technology portfolio, including machine learning and behavioral analytics, CrowdStrike stands as a formidable force in the AI stock market, offering investors unparalleled growth potential and technological excellence.",
        },
        {
          margin: "lg:mt-[108px] mt-[20px]",
        Img: uipathImag,
           heading: "UI Path - Robotic Automations 1 year 82% Growth ",
          pera: "UiPath Powering Automation with Intelligent AI Solutions. As a leader in robotic process automation (RPA), UiPath leverages cutting-edge AI technologies to streamline business processes and drive efficiency. With its innovative AI-driven platform and market dominance, UiPath presents a compelling investment opportunity for investors seeking growth and innovation in the AI stock sector",
          },
          {
            margin: "lg:mt-[-100px] mt-[20px]",
          Img: aristaImg,
             heading: "Arista Networks - AI Cloud Computing 1 year 111% Growth ",
            pera: "Arista Networks: Transforming Networking with AI-Driven Solutions. Leading the charge in cloud networking, Arista harnesses the power of AI to deliver high-performance, scalable solutions. With its innovative AI-driven approach and industry-leading technology, Arista Networks offers investors a prime opportunity to capitalize on the evolution of networking in the AI stock market.",
            },
           
];

const Topai = () => {
  const cardcomponent = myarray.map((myarray) => (
    <div data-aos="fade-down" 
      key={myarray.heading}
      className={` ${myarray.margin} lg:max-w-[542px] sm:h-[637px] rounded-[25px] p-[20px] bg-blackgradiunt relative overflow-hidden ,`}
    >
       <div className=" flex justify-center"><img src={myarray.Img} alt="aristaImg" /> </div>
      <p className=" font-Opensans font-bold sm:text-2xl text-[16px] text-white sm:pt-8 pt-2 text-center lg:text-start">
        {myarray.heading}
      </p>
      <p className=" font-Opensans font-normal sm:text-base text-[14px] text-lightgray sm:pt-4 text-center lg:text-start">
        {myarray.pera}
      </p>
      <div className=" w-[238px] h-[143px] bg-commangradiunt headerElipes left-[28%] absolute"></div>
    </div>
  ));

  return (
    <>
      <section className=" md:py-44 py-10 relative">
        <img className=" absolute left-0 top-[52%]" src={firstElipes} alt="firstElipes" />
        <div className=" w-[146px] h-[146px] bg-commangradiunt absolute left-0 top-[52%] elipesFirst"></div>
        <div className=" w-[146px] h-[146px] bg-commangradiunt absolute right-0 top-[36%] elipesFirst"></div>
        <img className=" absolute right-0 top-[36%]" src={secElipes} alt="firstElipes" />
        <div className=" container mx-auto px-3">
          <div className=" flex justify-center">
            <button className=" duration-300 hover:bg-commangradiunt tracking-[10px] uppercase text-white font-Opensans text-base font-bold border border-lightblue py-4 px-8 rounded-[75px] gap-3">
              TOP AI
            </button>
          </div>
          <p className=" pt-2 font-Opensans font-light sm:text-5xl text-3xl leading-[60px] text-white text-center">
            Top Seven Ai Sock
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:pt-24 pt-2 justify-items-center max-w-[1140px] mx-auto ">
            {cardcomponent}
            <div data-aos="fade-down" className=" flex justify-center"><img className=" lg:pt-14 pt-5" src={rocketImg} alt="rocketImg" /></div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Topai;
