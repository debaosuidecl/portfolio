import React from 'react';
import Tilt from 'react-tilt'

import { motion } from 'framer-motion'

import { styles } from "../style"

import { services } from "../constants"

import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, icon, title }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            >

                <div
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                >

                    <img src={icon} alt={title}
                        className="w-16 h-16 object-contain"
                    />

                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>

            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} >
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a skilled full stack software developer with over 6 years  of experience in TypeScript and Javascript. I have detailed expertise in frameworks like: ReactJS, Node.JS and three JS.
                I'm a experienced in building web applications and mobile applications and collaborate closely with clients to create efficient, scalable, and user friendly solutions that solve real world issues. I am a good team player and I know how to code and collaborate in an agile envirnoment. Let's work together and you will be impressed.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services && services.map((service, index) => <ServiceCard
                    key={service.title}
                    index={index}
                    icon={service.icon}
                    title={service.title} />)}
            </div>
        </>
    );
}

export default SectionWrapper(About, "about");
