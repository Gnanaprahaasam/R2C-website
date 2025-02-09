import React from 'react';
import "../../App.css";
import Agriculture from "../../assets/Industry/Agriculture.svg";
import CommunicationService from "../../assets/Industry/CommunicationService.svg";
import Education from "../../assets/Industry/Education.svg";
import RemoteMonitoring from "../../assets/Industry/RemoteMonitoring.svg";
import solar from "../../assets/Industry/solar.svg";

const Industry = () => {
    return (
        <div className="container font-style mt-5">
            {/* Agriculture*/}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={Agriculture} alt="Agriculture" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Agri </span>Industry</h2>
                        <p style={{ textAlign: 'justify' }}>
                            We provide advanced agricultural support through technology-driven solutions, improving productivity and sustainability. Our services include precision farming, soil analysis, irrigation automation, and supply chain optimization. We help farmers enhance yield quality, reduce costs, and implement eco-friendly practices. Our expertise ensures efficient resource utilization and long-term agricultural success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Commmunication Service */}
            <div className="row d-flex  justify-content-center align-items-center g-4">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={CommunicationService} alt="CommunicationService" className='training-image embedded' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Communication </span>Service</h2>
                        <p style={{ textAlign: 'justify' }}>
                            We offer reliable communication solutions to enhance connectivity and collaboration across industries. Our services include network infrastructure, VoIP solutions, digital communication platforms, and data security. We help businesses streamline communication, improve customer engagement, and ensure seamless operations. Our tailored solutions meet the evolving needs of modern enterprises.
                        </p>
                    </div>
                </div>

            </div>

            {/* Education */}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={Education} alt="education" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>E</span>ducation</h2>
                        <p style={{ textAlign: 'justify' }}>
                            We support the education sector with digital transformation, e-learning solutions, and smart classroom technologies. Our services include LMS implementation, virtual labs, and IT infrastructure for institutions. We help educational organizations enhance learning experiences, accessibility, and administrative efficiency. Our solutions bridge the gap between traditional and modern education systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Solar */}
            <div className="row d-flex  justify-content-center align-items-center g-3">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={solar} alt="Solar" className='training-image embedded' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>S</span>olar</h2>
                        <p style={{ textAlign: 'justify' }}>
                            We provide end-to-end solar energy solutions, from design and installation to maintenance and monitoring. Our services include solar panel setup, energy storage solutions, and grid integration. We help businesses and individuals transition to renewable energy, reducing costs and carbon footprints. Our expertise ensures sustainable and efficient energy management.
                        </p>
                    </div>
                </div>

            </div>

            {/* RemoteMonitoring */}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={RemoteMonitoring} alt="RemoteMonitoring" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Remote </span>Monitoring</h2>
                        <p style={{ textAlign: 'justify' }}>
                            We offer advanced remote monitoring solutions to track and manage assets, equipment, and operations in real-time. Our services include IoT-based monitoring, predictive maintenance, and automated alerts for critical systems. We help industries optimize performance, minimize downtime, and enhance operational security. Our solutions provide actionable insights for smarter decision-making.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industry;