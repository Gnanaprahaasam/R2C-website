import heroSection from "../../assets/heroSection.jpg";
import about from "../../assets/About1.jpg";
import about1 from "../../assets/About2.jpg";
import about2 from "../../assets/About3.jpg";
import about3 from "../../assets/About4.jpeg";


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

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
                bottom: '10%',
                cursor: 'pointer',
                padding: '8px',
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
                bottom: '10%',
                cursor: 'pointer',
                padding: '8px',
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


const testimonials = [
    {
        name: "John Doe",
        position: "CEO, ABC Company",
        text: "I am very pleased with the quality of service provided by the team at our firm. They have been professional, efficient, and responsive to our needs, delivering exceptional results.",
        image: about,
    },
    {
        name: "Jane Smith",
        position: "Marketing Director, XYZ Ltd.",
        text: "The team exceeded our expectations with their outstanding service and attention to detail. We highly recommend their expertise!",
        image: about,
    },
    {
        name: "Michael Brown",
        position: "COO, Tech Solutions Inc.",
        text: "Their professionalism and dedication to delivering quality results are truly commendable. We are very satisfied with their work.",
        image: about,
    },
    {
        name: "Emily Davis",
        position: "Founder, Green Energy Co.",
        text: "We appreciate their innovative approach and commitment to our project. Their support has been invaluable in achieving our goals.",
        image: about,
    },
    {
        name: "Robert Wilson",
        position: "HR Manager, Global Enterprises",
        text: "Their customer service is top-notch, and their solutions have significantly improved our efficiency. We are grateful for their partnership.",
        image: about,
    }
];


const useScroll = () => {
    const scrollRef = useRef(null);
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setLeftArrow(scrollLeft > 0);
            setRightArrow(scrollLeft + clientWidth < scrollWidth);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            handleScroll(); // Initialize the visibility of arrows
            ref.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (ref) ref.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollRef, leftArrow, rightArrow, scrollLeft, scrollRight };
};

const Home = () => {

    const testimonialScroll = useScroll();

    return (
        <div className="font-style overflow-hidden m-0">
            <div className="position-relative">
                <img src={heroSection} alt="A.P.J kalam" className=" hero-image" />
                <div className="position-absolute bottom-0 end-0  pb-5 quotes m-auto mx-5 px-sm-5">
                    என்னால் முடியும் என்ற மன உறுதியை மாணவர்களிடையே உருவாக்குவதே கல்வியின் மிக உயர்ந்த நோக்கமாகும். <br /> <span className="float-end">– A.P.J அப்துல் கலாம்</span>
                </div>
            </div>

            {/* About Us */}
            <div className="container">
                <h2 className="text-center py-2 keyword"> <span className="text-black">About</span> Us</h2>
                <div className="row d-flex flex-sm-row-reserve justify-content-center align-items-center ">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="px-2 mb-3" style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus urna nisi, at vulputate leo cursus vel. Vestibulum feugiat arcu posuere arcu blandit, nec efficitur massa interdum. Vivamus blandit tempor dolor, eget luctus lacus. Fusce non justo eros. Aliquam consectetur ligula sit amet lectus varius faucibus. Vivamus vitae ipsum in magna sollicitudin accumsan. Nullam dignissim elit in arcu sagittis, faucibus blandit odio lobortis. Curabitur congue risus elit, eu viverra sem consequat sed. Suspendisse porta sodales sapien, et varius magna hendrerit non.
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 ">
                        <div className="px-2 mb-3 abouts-image-container">
                            <img src={about} alt="abouts"  className="about-image" />
                        </div>
                    </div>

                </div>
            </div>

            {/* our Team */}
            <div className="bg-light">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <h2 className="text-center py-2 keyword"> <span className="text-black">Our</span> Team</h2>
                        <div className="col-12 col-sm-12 col-md-6 ">
                            <div className="position-relative px-2 ">
                                <TeamData />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="py-3">
                                <span>Driven by innovation and expertise, our firm is committed to delivering exceptional solutions that empower businesses. With a team of skilled professionals, we ensure excellence, integrity, and customer satisfaction in every endeavor.</span>

                                <ul className="list-style lh-lg">
                                    <li><b>Training</b> – Our expert-led training programs provide hands-on experience, equipping you with the skills .</li>
                                    <li><b>Internship</b> – Guided by industry professionals, our structured internship programs offer real-world exposure, preparing you for a successful career.</li>
                                    <li><b>Services</b>  – Backed by a team of specialists, our comprehensive services are designed to address diverse business and technology challenges with precision.</li>
                                    <li><b>Industries</b> – With a focus on innovation, we deliver tailored solutions across various industries, ensuring efficiency and growth.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Our Testimonials */}

            <div className="container pb-5 ">
                <h2 className="text-center text-wrap py-2 keyword">
                    <span className="text-black">Our Client </span>Testimonials
                </h2>

                <div className=" testimonial-container m-0 p-4 gap-4" ref={testimonialScroll.scrollRef}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-6">
                            <div className="shadow testimonial-Card  ">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <div className="mb-3">
                                        <p className="testimonial-content">“{testimonial.text}”</p>
                                    </div>
                                    <div className="">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="bold">{testimonial.name}</h6>
                                                <small className="text-white semi-bold">{testimonial.position}</small>
                                            </div>
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-circle"
                                                width="50"
                                                height="50"
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-end gap-3 p-2">
                    <button className=" arrow-btn shadow" onClick={testimonialScroll.scrollLeft}
                        disabled={!testimonialScroll.leftArrow}>
                        <FaAngleLeft size={18} />
                    </button>

                    <button
                        className="arrow-btn shadow"
                        onClick={testimonialScroll.scrollRight}
                        disabled={!testimonialScroll.rightArrow}
                    >
                        <FaAngleRight size={18} />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Home;