import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import "./intern.css";

const Internships = () => {
    const experiences = [
              {
                "companyName": "SeaSalus Maritime Pvt Limited",
                "role": "Software Developer",
                "location": "Remote",
                "duration": "Nov 2024 - Present",
                "description": "Developed an Online Learning Management System (LMS) for maritime health and safety training.\nImplemented JWT authentication with Google Sign-In for secure access.\nDesigned dynamic dashboards with Chart.js analytics for students and companies.\nIntegrated SCORM/xAPI support for course imports, tracking, and seamless SCORM Cloud launching.\nDeveloped billing and invoicing using Stripe for secure payments.\nBuilt a company analytics dashboard with key metrics, leaderboards, and score comparisons.\nDesigned progress tracking models for users, courses, modules, quizzes, and tests.\nDeployed a scalable AWS infrastructure using EC2, RDS, S3, CloudFront, and Amplify.\nUtilized Git and GitHub for version control and collaboration.",
                "skillsLearned": "HTML | CSS | Python | Django | React | JWT | Google Sign-In | Chart.js | SCORM | xAPI | Stripe | AWS EC2 | AWS RDS | AWS S3 | AWS CloudFront | AWS Amplify | Git | GitHub"
              },
              {
                "companyName": "Testpress",
                "role": "Software Developer",
                "location": "Chennai",
                "duration": "May 2024 - Nov 2024",
                "description": "Worked on the ERP project, gaining experience in production-level application development with Django.\nDeveloped HTMX-based views and integrated Preline UI for an enhanced user experience.\nConfigured AWS S3 and CloudFront for media storage and delivery.\nStrengthened backend development skills in Django and Python while following industry standards.\nUtilized Git and GitHub for version control and collaboration.",
                "skillsLearned": "HTML | CSS | Python | Django | HTMX | AWS S3 | AWS CloudFront | Preline UI | Git | GitHub"
              },
              {
                "companyName": "Zoho Corporation",
                "role": "Incubation Trainee - Internship",
                "location": "Chennai",
                "duration": "Dec 2023 - Mar 2024",
                "description": "Created dynamic web applications, enhancing user interaction and functionality.\nBuilt web applications using Java Servlets and PostgreSQL (PSQL), demonstrating robust backend development capabilities.\nUtilized JavaScript libraries like jQuery and implemented AJAX for asynchronous web page updates.\nImproved problem-solving and competitive programming skills.",
                "skillsLearned": "HTML | CSS | Java | Java Servlets | JSP | Postgres | Javascript | AJAX | Jquery"
              },
              {
                "companyName": "Zoho Corporation",
                "role": "Project Trainee - Internship",
                "location": "Mohanur",
                "duration": "Sept 2022 - Feb 2023",
                "description": "Developed a dynamic web application, improving interactivity and user engagement.\nImplemented JAAS authentication to enhance application security.\nCreated a custom export module, tailored to specific business needs and functionalities.",
                "skillsLearned": "HTML | CSS | Java | Java Servlets | JSP | Postgres | Javascript"
              }       

    ];

    return (
        <section className="Internship">
            <PageHeader title="Professional Experience" />
            <Timeline lineColor={'#FFD700'}>
                {experiences.map((internship, index) => (
                    <TimelineItem
                        key={index}
                        dateText={internship.duration}
                        style={{ color: '#fff', backgroundColor: '#000' }}
                        dateInnerStyle={{ backgroundColor: '#FFD700', color: '#000' }}
                        bodyContainerStyle={{
                            backgroundColor: '#101010',
                            color: '#FFD700',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            border: '1px solid #FFD700',
                        }}
                    >
                        <h3 style={{ color: '#FFD700' }}>{internship.companyName}</h3>
                        <h4 style={{ color: '#FFD700' }}>{internship.role}</h4>
                        <p>
                            {internship.description.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                        <p><strong>Skills Learned:</strong> {internship.skillsLearned}</p>
                    </TimelineItem>
                ))}
            </Timeline>
            <div className="socialIcons">
                <SocialIcons />
            </div>
        </section>
    );
};

export default Internships;
