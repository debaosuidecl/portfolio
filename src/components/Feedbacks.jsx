import React from 'react';
import { motion } from "framer-motion"
import { styles } from "../style"
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants"
import { SectionWrapper } from "../hoc"

const FeedbackCard = ({
    index, testimonial, name, designation, company, image
}) => {

    return (
        <motion.div
            variants={fadeIn("", "spring", index * .5, .75)}

            className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col"
        >
            <p className="text-white font-black text-[48px]">"</p>
            <div className="mt-1 flex-1">
                <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

            </div>
            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]" ><span className="blue-text-gradient">@</span> {name}</p>
                    <p className="mt-1 text-secondary text-[12px]"  >{designation} of {company}</p>
                </div>
                <img src={image} alt={`feedback-by-${name}`}
                    className="rounded-full h-6 w-6 object-cover"
                />
            </div>
        </motion.div>
    )
}

const Feedbacks = () => {
    return (
        <div className="mt-12  rounded-[20px] bg-tertiary">
            <div className={`${styles.padding} bg-black-100   rounded-2xl min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>What others say</h2>
                </motion.div>
            </div>

            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {
                    testimonials.map((testimonial, index) => <FeedbackCard key={testimonial.name} index={index} {...testimonial} />)
                }
            </div>
        </div>
    );
}

export default SectionWrapper(Feedbacks, 'feedback');
