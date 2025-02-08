import heroSection from "../../assets/heroSection.jpg";
import about from "../../assets/About1.jpg";
import about1 from "../../assets/About2.jpg";
import about2 from "../../assets/About3.jpg";
import about3 from "../../assets/About4.jpeg";
import consulting from "../../assets/ourService/Consulting.jpg";
import electronicSale from "../../assets/ourService/ElectronicSalesSupport.png";
import labsetup from "../../assets/ourService/labsetup.svg";
import outSourcing from "../../assets/ourService/Outsourcing.png";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TeamImage = [about, about1, about2, about3];
const CustomLeftArrow = ({ onClick }) => {
    return (
        <button
            className="custom-left-arrow rounded-circle"
            onClick={onClick}
            style={{
                border: 'none',
                zIndex: 999,
                position: 'absolute',
                right: '65px',
                bottom: '7%',
                cursor: 'pointer',
                padding: '5px',
                background: " rgba(122, 236, 193, 0.253)",
                color: "white",
            }}
        >
            <IoIosArrowBack size={24} className="" />
        </button>
    );
};

const CustomRightArrow = ({ onClick }) => {
    return (
        <button
            className="custom-right-arrow rounded-circle "
            onClick={onClick}
            style={{
                border: 'none',
                zIndex: 999,
                position: 'absolute',
                right: '20px',
                bottom: '7%',
                cursor: 'pointer',
                padding: '5px',
                background: " rgba(122, 236, 193, 0.253)",
                color: "white",
            }}
        >
            <IoIosArrowForward size={24} className="" />
        </button>
    );
};

const TeamData = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        nextArrow: <CustomRightArrow />,
        prevArrow: <CustomLeftArrow />,
    };

    return (
        <div className="slider-container " style={{ position: 'relative' }}>
            <Slider {...settings}>
                {TeamImage.map((item, index) => (
                    <div key={index} className="slider-image-container">
                        <img src={item} alt="Team" className="slider-image" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

const Home = () => {

    return (
        <div className="font-style overflow-hidden m-0">
            <div className="position-relative">
                <img src={heroSection} alt="A.P.J kalam" className=" hero-image" />
                <div className="position-absolute bottom-0 end-0  pb-5 quotes m-auto mx-5 px-sm-5">
                    என்னால் முடியும் என்ற மன உறுதியை மாணவர்களிடையே உருவாக்குவதே கல்வியின் மிக உயர்ந்த நோக்கமாகும். <br /> <span className="float-end">– A.P.J அப்துல் கலாம்</span>
                </div>
            </div>

            {/* our Team */}
            <div className="bg-light">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <h2 className="text-center py-2 keyword"> <span className="text-black">Our</span> Team</h2>
                        <div className="col-12 col-sm-12 col-md-6 ">
                            <div className="position-relative px-2">
                                <TeamData />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="py-3">
                                <span>Driven by innovation and expertise, our firm is committed to delivering exceptional solutions that empower businesses. With a team of skilled professionals, we ensure excellence, integrity, and customer satisfaction in every endeavor.</span>

                                <ul className="list-style lh-lg">
                                    <li><b>Training</b> – Our expert-led training programs provide hands-on experience, equipping you with the skills and industry knowledge needed to excel in your field.</li>
                                    <li><b>Internship</b> – Guided by industry professionals, our structured internship programs offer real-world exposure, preparing you for a successful career.</li>
                                    <li><b>Services</b>  – Backed by a team of specialists, our comprehensive services are designed to address diverse business and technology challenges with precision.</li>
                                    <li><b>Industries</b> – With a focus on innovation, we deliver tailored solutions across various industries, ensuring efficiency and growth.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Our Service */}
            <div className=" container-fluid mb-3 m-0">
                <h2 className="text-center py-2 keyword">
                    <span className="text-black">Our</span> Services
                </h2>
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-6 ">
                        <div className="shadow-sm bg-white h-100 p-2">
                            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                                <div className="service-image-container col-12 col-sm-6 p-4">
                                    <img src={consulting} alt="Consulting" className="service-image" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h5 className="text-center bold py-3">Consulting (DBD)</h5>
                                    <span className="d-none d-sm-block" > we gave a expert guidance to optimize business strategies, improve efficiency, and drive growth. It helps organizations solve challenges and achieve their goals effectively.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 ">
                        <div className="shadow-sm bg-white h-100 p-2">
                            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                                <div className="service-image-container col-12 col-sm-6 p-4">
                                    <img src={outSourcing} alt="Out Sourcing" className="service-image outsourcing-shadow" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h5 className="text-center bold py-3">Out Sourcing</h5>
                                    <span className="d-none d-sm-block"> We offer expert outsourcing solutions to streamline operations, reduce costs, and enhance productivity, enabling businesses to focus on core activities and achieve sustainable growth</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 ">
                        <div className="shadow-sm bg-white h-100 p-2">
                            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                                <div className="service-image-container col-12 col-sm-6 p-4">
                                    <img src={electronicSale} alt="Electronic Sale" className="service-image electronic-shadow" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h5 className="text-center bold py-3">Electronic Sales Support</h5>
                                    <span className="d-none d-sm-block"> We offer expert outsourcing solutions to streamline operations, reduce costs, and enhance productivity, enabling businesses to focus on core activities and achieve sustainable growth</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-12 col-md-6 ">
                        <div className="shadow-sm bg-white h-100 p-2">
                            <div className=" d-flex flex-wrap justify-content-center align-items-center">
                                <div className="service-image-container col-12 col-sm-6 px-4">
                                    <img src={labsetup} alt="Lab Setup" className="service-image lab-shadow mt-0 mt-sm-5" />
                                </div>
                                <div className="col-12 col-sm-6 ">
                                    <h5 className="text-center bold py-3">Lab Setup</h5>
                                    <span className="d-none d-sm-block">We provide comprehensive lab setup solutions for Physics, Chemistry, Robotics, IoT, and Embedded Systems, equipping schools and colleges with state-of-the-art facilities to enhance practical learning and innovation.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Home;