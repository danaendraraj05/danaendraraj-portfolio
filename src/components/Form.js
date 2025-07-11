import React, { useRef } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
    const [inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const form = useRef();

    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n5v0ot4', 'template_nf85099', form.current, 'd2P_Tk645c5lJfSvP')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <motion.form
            ref={form}
            className="contactForm"
            initial={{ x: "-10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onSubmit={handleSubmit}
        >
            <h4 className="contentTitle">Message Me</h4>
            <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
                <input
                    type="text"
                    className="formControl"
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    placeholder="Name"
                    required
                />
            </div>
            <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
                <input
                    type="email"
                    className="formControl"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="col-12 formGroup">
                <input
                    type="text"
                    className="formControl"
                    onChange={handleChange}
                    value={formData.subject}
                    name="subject"
                    placeholder="Subject"
                    required
                />
            </div>
            <div className="col-12 formGroup">
        <textarea
            className="formControl"
            onChange={handleChange}
            value={formData.message}
            name="message"
            rows="5"
            placeholder="Message"
            required
        ></textarea>
            </div>

            <div className="col-12 formGroup formSubmit">
                <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
            </div>
        </motion.form>
    );
};

export default Form;
