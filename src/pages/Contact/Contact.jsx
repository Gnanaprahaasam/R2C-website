import React from 'react';
import "../../App.css";
import contactUs from "../../assets/ContactUs.svg";
import { BsWhatsapp } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
    return (
        <div className='container font-style mt-5'>
            <div className="row  d-flex flex-sm-row-reverse justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <div className='h-100 d-flex justify-content-center align-items-center mb-4'>
                        <img src={contactUs} alt="contactUs" width={"100%"} className='contactus-image' />
                    </div>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                        <h1><span className='keyword'>Contact</span> Us</h1>
                        <p className='semi-bold'>For any queries, please contact us at:</p>
                        <div className='mb-3'>
                            <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <button className="inquire-btn">  <BsWhatsapp size={20} /> Click here to inquire</button>
                            </a>
                        </div>
                        <div>
                            <a  href="mailto:r2cudt@gmail.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <button className="mail-btn px-3">  <IoIosMail size={20} /> r2cudt@gmail.com</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Contact;