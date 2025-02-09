import React from 'react';
import "../../App.css";
import AIML from '../../assets/Training/AIML.svg';
import DataScience from "../../assets/Training/DataScience.svg";
import FullStack from "../../assets/Training/FullStack.svg";
import language from "../../assets/Training/Language.svg";
import Tally from "../../assets/Training/Tally.svg";
import DigitalMarketing from "../../assets/Training/DigitalMarketing.svg";
import Embedded from "../../assets/Training/Embedded.svg";

const Training = () => {
    return (
        <div className="container font-style mt-5">
            {/* fullStack Development */}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={FullStack} alt="fullstack" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Full Stack </span>Development</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Master the art of building complete web applications from frontend to backend. Learn technologies like HTML, CSS, JavaScript, React, Node.js, and databases. Gain hands-on experience with real-world projects and deployment strategies. Become a job-ready Full Stack Developer with in-demand coding skills.
                        </p>
                    </div>
                </div>
            </div>

            {/* Embedded & Iot */}
            <div className="row d-flex  justify-content-center align-items-center g-4">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={Embedded} alt="Embedded" className='training-image embedded' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Embedded Systems </span>& IoT</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Dive into the world of embedded programming and Internet of Things (IoT).
                            Learn microcontrollers, sensors, communication protocols, and real-time OS.
                            Develop smart, connected devices with hands-on practical projects.
                            Enhance your skills to build the future of automation and smart technologies.
                        </p>
                    </div>
                </div>

            </div>

            {/* Python & Java */}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={language} alt="Language" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Python </span>& Java</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Learn two of the most powerful programming languages for software development. Master Python for scripting, automation, and data science applications. Explore Java for enterprise-level applications, OOP concepts, and frameworks. Gain industry-ready coding skills with practical projects and exercises.
                        </p>
                    </div>
                </div>
            </div>

            {/* AI & ML */}
            <div className="row d-flex  justify-content-center align-items-center g-3">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={AIML} alt="AI&ML" className='training-image embedded' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>AI </span>& ML</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Unlock the potential of Artificial Intelligence and Machine Learning.
                            Learn algorithms, deep learning, and neural networks for real-world applications.
                            Work on data-driven projects using Python, TensorFlow, and AI models.
                            Build intelligent systems and advance your career in AI-driven technologies.
                        </p>
                    </div>
                </div>

            </div>

            {/*DigitalMarketing*/}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={DigitalMarketing} alt="DigitalMarketing" className='training-image digitalMarketing' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Digital </span>Marketing</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Master the strategies of online marketing and brand promotion.
                            Learn SEO, social media marketing, PPC, and content creation.
                            Understand analytics, campaign optimization, and audience targeting.
                            Boost your career in the growing field of digital marketing.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tally */}
            <div className="row d-flex justify-content-center align-items-center g-3">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container  mb-3">
                        <img src={Tally} alt="Tally" className='training-image embedded' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5  mb-3'>
                        <h2 className='mb-3 text-center'> <span className='keyword'>T</span>ally</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Gain expertise in Tally for accounting, GST, and financial management.
                            Learn to manage ledgers, taxation, payroll, and business transactions.
                            Understand business compliance and financial reporting with ease.
                            Become a certified Tally professional for better job opportunities.
                        </p>
                    </div>
                </div>

            </div>

            {/* DataScience */}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={DataScience} alt="DataScience" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Data </span>Science</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Learn how to analyze and interpret complex data for business insights.
                            Master tools like Python, R, SQL, and machine learning algorithms.
                            Work on real-world data-driven projects for predictive analytics.
                            Start your journey toward becoming a data science expert.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;