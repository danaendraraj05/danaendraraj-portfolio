import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SocialIcons from "../components/SocialIcons";
import aboutMeImg from "../images/Danaendraraj.jpeg";
import resume from "../pages/about/danaendraraj-resume.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
     threshold: 0.2,
     triggerOnce: true,
   });

   const [downloading, setDownloading] = useState(false);

   useEffect(() => {
     setDownloading(false);
   }, [downloading]);

   const handleDownload = () => {
     setDownloading(true);
     const link = document.createElement("a");
     link.href = resume;
     link.download = "Danaendraraj-Resume.pdf";
     link.onload = () => {
       link.remove();
       setDownloading(false);
     };
     document.body.appendChild(link);
     link.click();
   };

  return (

    <div className="aboutContainer container">
       <div className="row">
         <motion.div
           className="personalImage col-12 col-lg-4"
           ref={ref}
           initial={{ x: "-10vw", opacity: 0 }}
           animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
           transition={{ duration: 0.4, ease: "easeInOut" }}
         >
         <img src={aboutMeImg} alt={name} />
         </motion.div>
         <motion.div
           className="personalInfo col-12 col-lg-8"
           ref={ref}
           initial={{ x: "10vw", opacity: 0 }}
           animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
           transition={{ duration: 0.4, ease: "easeInOut" }}
         >
           <div className="contentContainer">
             <h4>Nice to meet you</h4>
             <h5>I'm a Software Developer who crafts amazing digital experiences!</h5>
            <div className="contentDescription"><p>Enthusiastic and motivated computer science graduate with a strong foundation in programming
               languages such as Java, C, and Python. Completed multiple projects during academic studies,
               demonstrating skills in software development, problem-solving, and collaboration. Eager to kick-start a
               career in software development, with a passion for learning and a dedication to delivering high-quality
               code. Seeking an opportunity to apply my technical knowledge and contribute to innovative projects as a
               software developer.</p>
             </div>
             <div className="infoContainer">
               <div className="row">
                 <div className="col-12 col-md-6 info">
                   <span>Name:</span>
                   <p>Danaendraraj R</p>
                 </div>
                 <div className="col-12 col-md-6 info">
               <span>Email:</span>
                   <p>
                     <a href={`mailto:${email}`}>rajdr039@gmail.com</a>
                   </p>
                </div>
             </div>


               <div className="row">
                 <div className="col-12 col-md-6 info">
                   <span>Location:</span>
                   <p>Tiruchengode,India</p>
                 </div>
                 <div className="col-12 col-md-6 info">
                   <span>Availability:</span>
               <p>{availability}</p>
                 </div>
               </div>
             </div>
             <div className="buttonContainer">
               <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                 {downloading ? "Downloading..." : "Download Resume"}
               </button>{" "}
               <SocialIcons />
             </div>
           </div>
         </motion.div>
       </div>
     </div>
  );
};

export default AboutMe;
