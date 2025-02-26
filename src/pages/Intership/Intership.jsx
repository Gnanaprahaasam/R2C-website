import React from 'react';
import "../../App.css";
import intership from "../../assets/Intership.svg";
import science from "../../assets/Science.jpg";
import arts from "../../assets/Arts.jpg";
import engineering from "../../assets/Engineering.jpg";
import { BsWhatsapp } from 'react-icons/bs';


const Intership = () => {
    return (
        <div className="container font-style mt-5">
            <div className="row d-flex flex-sm-row-reverse  justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex justify-content-center align-items-center mb-4'>
                        <img src={intership} alt="Intership" className='intership-heroSection' width={"100%"} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
                        <h2 className=" bold mb-3"> <span className='keyword'>Find Your Passion and Build a Fulfilling Internship</span> Journey with Us!</h2>
                        <p>
                            We prioritize learning and growth, fostering a collaborative environment for aspiring professionals.
                            Our internship program is designed to balance hands-on experience with personal development.
                            We encourage open communication and embrace diverse perspectives to nurture future talent.
                        </p>
                    </div>
                </div>

            </div>
            <hr />
            <div>
                <h4 className="text-wrap text-center mb-3">We offer internships for students from all Science, Arts & Busineess, and  <br />Engineering colleges.</h4>
                <div className='row d-flex justify-content-center g-3'>
                    {/* Engineering */}
                    <div className='col-12 col-sm-12 col-md-4 mb-3'>
                        <div className='h-100 rounded-4 shadow p-3 '>
                            <div className='intership-image-container mb-3'>
                                <img src={engineering} alt="EngineeringGroup" className=' intership-image mb-2 ' />
                            </div>

                            <h5 className='keyword bold'>Engineering Students</h5>
                            <span >We offer internships for Engineering students. Please click below, </span>
                            <div className='mt-3 '>
                                <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" class="text-decoration-none ">
                                    <button class="inquire-btn">  <BsWhatsapp size={20} /> Click here to inquire</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Business */}
                    <div className='col-12 col-sm-12 col-md-4 mb-3'>
                        <div className='h-100 rounded-4 shadow p-3 '>
                            <div className='intership-image-container mb-3'>
                                <img src={science} alt="ScienceGroup" className=' intership-image mb-2 ' />
                            </div>
                            <div>
                                <h5 className='keyword bold'> Business Students</h5>
                                <span >We offer internships for Business students. Please click below, </span>
                                <div className='mt-3 '>
                                    <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" class="text-decoration-none ">
                                        <button class="inquire-btn">  <BsWhatsapp size={20} /> Click here to inquire</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arts & Science*/}
                    <div className='col-12 col-sm-12 col-md-4 mb-3'>
                        <div className='h-100 rounded-4 shadow p-3 '>
                            <div className='intership-image-container mb-3'>
                                <img src={arts} alt="ArtsGroup" className=' intership-image mb-2 ' />
                            </div>

                            <h5 className='keyword bold'>Arts & Science Students</h5>
                            <span >We offer internships for Arts & Science students. Please click below, </span>
                            <div className='mt-3 '>
                                <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" class="text-decoration-none ">
                                    <button class="inquire-btn">  <BsWhatsapp size={20} /> Click here to inquire</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Intership;