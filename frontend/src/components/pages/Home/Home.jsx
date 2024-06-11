import React from 'react'
import "./Home.css"
import { useScroll, useTransform } from 'framer-motion';
import { GoogleGeminiEffect } from '../../ui/Google_gemni';
import OverView from '../../partials/OverView/OverView';
import HomeAbout from '../../partials/Home-about/HomeAbout';
import WhyChoose from '../../partials/Why-Choose/WhyChoose';
import MovingCard from '../../partials/MovingCard/MovingCard';
const Home = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <>
    <div className='min-h-screen'>
    <div
          className="h-[300vh] bg-black w-full dark:border dark:border-white/[0.1] mt-40 rounded-md relative overflow-clip"
          ref={ref}
        >
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />
          <OverView/>
          <HomeAbout/>
          <div className="mt-52">
          <MovingCard />
          </div>
        </div>
    </div>
        <div className='min-h-screen'>
        <WhyChoose/>
      </div>
      <div className='min-h-screen'>
      
      </div>
      </>
  )
}

export default Home
