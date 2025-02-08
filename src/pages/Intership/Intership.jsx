import React from 'react';
import "./Intership.css";
import intership from "../../assets/Intership.svg";


const Intership = () => {
    return (
        <div className="container font-style mt-5">
            <div className="row d-flex  justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <h2 className=" bold mb-3"> <span className='keyword'>Find Your Passion and Build a Fulfilling Internship</span> Journey with Us!</h2>
                        <p>
                            We prioritize learning and growth, fostering a collaborative environment for aspiring professionals.
                            Our internship program is designed to balance hands-on experience with personal development.
                            We encourage open communication and embrace diverse perspectives to nurture future talent.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <img src={intership} alt="Intership" className='intership-image' />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Intership;