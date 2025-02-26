import React from 'react';
import "../../App.css";
import consulting from "../../assets/Service/Consulting.svg";
import electronicSale from "../../assets/Service/ElectronicSalesSupport.png";
import labsetup from "../../assets/Service/labsetup.svg";
import outSourcing from "../../assets/Service/OutSourcing.svg";

const Service = () => {
    return (
        <div className="container font-style mt-5">
            {/* Consulting*/}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={consulting} alt="consulting" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Digital Business Marketing </span>(DBD)</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Digital Business Marketing leverages online channels to enhance brand visibility and customer engagement. It includes SEO, social media, content marketing, PPC advertising, and email campaigns. Businesses use data-driven strategies to attract, convert, and retain customers. Digital marketing improves reach, customer interaction, and sales growth. It ensures long-term success in a competitive online marketplace.
                        </p>
                    </div>
                </div>
            </div>

            {/* OutSourcing */}
            <div className="row d-flex  justify-content-center align-items-center g-4">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={outSourcing} alt="outSourcing" className='training-image embedded' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Out</span>sourcing</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Outsourcing involves contracting external companies to handle specific business functions or processes. It helps organizations reduce costs, improve efficiency, and focus on core business activities. Common outsourced services include IT support, customer service, manufacturing, and back-office operations. Companies choose outsourcing to access specialized expertise and advanced technology without maintaining in-house teams. It enables businesses to scale operations flexibly while optimizing resource utilization.
                        </p>
                    </div>
                </div>

            </div>

            {/* ElectronicSales */}
            <div className="row d-flex flex-sm-row-reverse justify-content-center align-items-center g-3 ">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={electronicSale} alt="ElectronicSale" className='training-image fullStack' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Electronic </span>Sales Support</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Electronic Sales Support refers to digital tools and solutions that enhance the sales process. It includes CRM software, automated email marketing, data analytics, and AI-driven customer insights. These tools help sales teams track leads, manage customer interactions, and streamline sales operations. Electronic sales support improves efficiency, customer engagement, and overall conversion rates. Businesses leverage these technologies to stay competitive and drive revenue growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* LabSetup */}
            <div className="row d-flex  justify-content-center align-items-center g-3">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="training-image-container mb-3">
                        <img src={labsetup} alt="Labsetup" className='training-image embedded' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='d-flex flex-column align-items-center px-5 mb-3'>
                        <h2><span className='keyword mb-3 text-center'>Lab </span>Setup</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Lab setup involves designing and equipping a laboratory with the necessary infrastructure, tools, and technology. It includes selecting appropriate equipment, ensuring safety compliance, and optimizing the workspace for efficiency. Proper lab setup enhances research, testing accuracy, and innovation capabilities. It also involves training personnel, implementing quality control standards, and maintaining regulatory compliance. A well-structured lab setup ensures smooth operations and supports scientific or industrial advancements.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Service;