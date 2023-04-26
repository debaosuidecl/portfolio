import React, { useState, useRef } from 'react';
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
// template_qdioygp
// service_ms0tgik
// 8vEnbrg4DoU7zMfLI
const Contact = () => {
    const [form, setform] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [loading, setloading] = useState(false);

    const formRef = useRef();
    const handleChange = (e) => {
        const { name, value } = e.target

        setform(f => ({
            ...f,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);

        try {
            await emailjs.send("service_ms0tgik",
                "template_qdioygp",
                {
                    from_name: form.name,
                    to_name: "Osuide",
                    from_email: form.email,
                    to_email: "debaosuidecl@gmail.com",
                    message: form.message,

                },
                "8vEnbrg4DoU7zMfLI"
            )
            setloading(false);
            alert("Thank you! I will get back to you as soon as possible :)")
            setform({
                name: "",
                email: "",
                message: "",
            })
        } catch (error) {
            setloading(false)
            console.log(error);
            alert("Something went wrong :(")
        }
    }
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  ">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={`${styles.sectionSubText}`} >Get in touch</p>
                <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
                <form ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input type="text" name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What is your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input type="email" name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What is your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea row="7" name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"

                    >{
                            loading ? "Sending..." : "Send"
                        }</button>
                </form>
            </motion.div>

            <motion.div
                // variants={}
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>


        </div>
    );
}

export default SectionWrapper(Contact, "contact");
