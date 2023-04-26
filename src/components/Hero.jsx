import React from 'react';
import { motion } from "framer-motion"
import { styles } from "../style.js";
import { ComputersCanvas } from "./canvas"
import { comp } from '../assets/index.js';
const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#aa14a0]" />

                    <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#aa14a0] to-white-black " />


                </div>
                <div className="">
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi I am <span className="text-[#aa14a0]">Osuide</span> </h1>
                    <p className={`${styles.heroSubText} mt-2  text-white-100`}>
                        I develop web applications, mobile <br className="sm:block hidden" />  applications, UI Designs and 3d visuals.
                    </p>
                </div>
            </div>
            <ComputersCanvas />
            {/* <img src={comp} alt="comp" className="w-[1000px]" /> */}

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center item-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />

                    </div>
                </a>
            </div>
        </section>
    );
}

export default Hero;
