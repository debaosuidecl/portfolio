import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'

import { styles } from "../style"
import { experiences } from "../constants"

import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({ experience }) => {
    return <VerticalTimelineElement
        contentStyle={{ background: "rgba(69,0,190,.2)", color: "#fff", }}
        contentArrowStyle={{ borderRight: "7px solid rgba(69,0,190,.2)" }}
        date={experience.date}
        iconStyle={{
            background: experience.iconBg
        }}
        icon={<div className="items-center flex justify-center w-full h-full">
            <img

                src={experience.icon}
                className="w-[60%] h-[60%] object-contain"
                alt={experience.company_name}
            />
        </div>}
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>

        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">

            {
                experience.points.map((point, index) => (<li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                </li>))
            }

        </ul>
    </VerticalTimelineElement>
}
const Experience = () => {
    return (
        <>
            <motion.div variant={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Check out my cool projects</p>
                <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {
                        experiences.map((experience, index) => <ExperienceCard key={index} experience={experience} />)
                    }
                </VerticalTimeline>
            </div>
        </>
    );
}

export default SectionWrapper(Experience, 'work');
