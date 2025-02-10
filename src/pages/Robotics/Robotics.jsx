import robotic from "../../assets/robotics_coding.jpg";
import codingStart from "../../assets/codingStarting.jpg";
import codingMiddle from "../../assets/codingMiddle.jpg";
import codingAdvance from "../../assets/codingAdvance.jpg";
import roboticStart from "../../assets/robotStarting.jpg";
import roboticsMiddle from "../../assets/robotMiddle.jpg";
import roboticsAdvance from "../../assets/robotAdvance.jpg";
import drone from "../../assets/drone.png";
import statellite from "../../assets/satellite.jpeg";
import analyticalThinking from "../../assets/analyticalThinking.gif";
import certificate from "../../assets/certificate.gif";
import confidence from "../../assets/confidence.gif";
import creativity from "../../assets/creativity.gif";
import kitSoftware from "../../assets/kitSoftware.gif";
import onlineLive from "../../assets/onlineLive.gif";
import personalized from "../../assets/personalized.gif";
import workingProject from "../../assets/workingProject.gif";
import stemCourse from "../../assets/stemcourse.jpeg";
import stem from "../../assets/stem.jpeg";

import boobalan from "../../assets/Boobalan.jpg";
import lakshmipriya from "../../assets/Lakshmipriya.jpg";

import { AiOutlineCheck } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "./Robotics.css";

const Robotics = () => {
    return (
        <div className="robotics container-fluid">
            <div className="row d-flex flex-row-reverse align-items-center robotics-heroSection mb-5 ">
                <div className="col-12 col-md-6 p-sm-5 p-3">
                    <div>
                        <img src={robotic} alt="robotic" className="img-fluid shadow-lg" width={"100%"} />
                    </div>
                </div>
                <div className="col-12 col-md-6 p-5 ">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="">Robotics, Coding, Drones and Satellite</h1>
                        <h5 className="bold">Both Online and Offline Live 1:1 classNamees for Kids (Ages 8+)</h5>
                        <ul className="list-unstyled lh-lg">
                            <li ><AiOutlineCheck size={20} className="text-white" /> Live 1:1 classNamees from experts</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Learn the concepts</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Develop project(s) from scratch</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Kit shipped to you in 24 hours</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Earn smart certificate & showcase skills</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* course designed person */}
            <div className="container">
                <div>
                    <h2 className="bold">Learn from the best</h2>
                    <h3 className="mb-2 bold">Courses designed by alumni of TCS and Anna University.</h3>

                    <div className="row my-3 g-3">
                        <div className="col-sm-12 col-md-6">
                            <div className="border rounded-2 p-3 clearfix h-100">
                                <img src={boobalan} alt="userProfile" className="img-fluid float-start m-2 me-3" width="100" />
                                <div>
                                    <p className="text-wrap">"Over the last 20 years, Prof. Boobalan T., an esteemed professor in Electronics at Anna University, has achieved remarkable success in the field of robotics, completing 12 patents and inspiring countless students with his expertise and innovation."
                                    </p>
                                    <div className="author float-end ">-Prof. Boobalan.T, Professor in Electronics, Anna University</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="border rounded-2 p-3  clearfix h-100">
                                <img src={lakshmipriya} alt="userProfile" className="img-fluid float-start m-2 me-3" width="100" />
                                <div className="">
                                    <p className="text-wrap">"
                                        With over 13 years of experience, L. Lakshmipriya, a Software Engineer at TCS, has made significant contributions to various projects, demonstrating expertise in software development. She has been involved in all stages of backend application development, including analysis, production, and support."</p>
                                    <div className="author float-end align-self-bottom"> -Mrs.Lakshmipriya, Software Engineer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" container mb-5">
                <h2 className="mb-3">Choose Between <span className="keyword">Robotics</span>, <span className="keyword">Coding</span> and <span className="keyword">Drones</span>.</h2>
                <h3 className="mb-2">Robotics Courses for Kids.</h3>
                <h6 className="mb-3">Mode <span>Online / Offline</span></h6>
                <div className="row mb-3 g-4">
                    <div className=" col-sm-12 col-md-6 col-lg-4 ">
                        <div className="shadow p-2 rounded-4 h-100">
                            <div className="image-container">
                                <img src={roboticStart} alt="roboticsStart" className="thumbnail-image rounded-4" />
                            </div>
                            <div className=" p-3">
                                <h5 className="keyword">Basic Level</h5>
                                <p className="description">The perfect course for your kid to start mastering skills in the world of Robotics</p>
                            </div>
                            <div className="row px-3 flex-nowrap">
                                <div className="col d-flex flex-column fw-bold align-items-center">
                                    <span className="keyword">10+</span>
                                    <span>classNamees</span>
                                </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center">
                                    <span className="keyword">5+</span>
                                    <span>Projects</span>
                                </div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center">
                                        <span className="keyword">10+</span>
                                        <span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="align-self-end">
                                    <div className="text-break">
                                        <h6 className="bold">Strarts from  <span className="text-decoration-line-through">Rs 1999/-</span> <span className="keyword">Rs 999/-</span>
                                        </h6>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <button className="inquire-btn">
                                                <BsWhatsapp size={20} />
                                                Click here to inquire
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  ">
                        <div className="shadow p-2 rounded-4  h-100">
                            <div className="image-container">
                                <img src={roboticsMiddle} alt="roboticsMiddle" className="thumbnail-image rounded-4" />
                            </div>
                            <div className=" p-3">
                                <h5 className="keyword">Intermediate Level</h5>
                                <p className="description">The ideal course for your child to deepen their skills and expertise in Robotics</p></div><div className="row px-3 flex-nowrap">
                                <div className="col d-flex flex-column fw-bold align-items-center">
                                    <span className="keyword">20+</span>
                                    <span>classNamees</span>
                                </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center">
                                    <span className="keyword">10+</span>
                                    <span>Projects</span></div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center">
                                        <span className="keyword">10+</span><span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" row p-3"><div className="align-self-end">
                                <div className=" text-break">
                                    <h6 className="bold">Strarts from  <span className="text-decoration-line-through">Rs 2999/</span> <span className="keyword">Rs 1999/-</span>
                                    </h6>
                                </div>
                                <div>
                                    <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <button className="inquire-btn"> <BsWhatsapp size={20} /> Click here to inquire</button>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="shadow p-2 rounded-4  h-100">
                            <div className="image-container">
                                <img src={roboticsAdvance} alt="roboticsAdvance" className="thumbnail-image rounded-4" />
                            </div><div className=" p-3">
                                <h5 className="keyword">Advance Level</h5>
                                <p className="description">The advanced course for your child to excel and become a master in the world of Robotics.</p>
                            </div><div className="row px-3 flex-nowrap">
                                <div className="col d-flex flex-column fw-bold align-items-center">
                                    <span className="keyword">30+</span>
                                    <span>classNamees</span>
                                </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center">
                                    <span className="keyword">15+</span>
                                    <span>Projects</span>
                                </div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center">
                                        <span className="keyword">10+</span>
                                        <span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="align-self-end">
                                    <div className="d-flex flex-wrap text-break">
                                        <h6 className="bold">Strarts from  <span className="text-decoration-line-through">Rs 3999/</span> <span className="keyword">Rs 2999/-</span>
                                        </h6>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <button className="inquire-btn"> <BsWhatsapp size={20} /> Click here to inquire</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="mb-2">Coding Courses for Kids.</h3>
                <h6 className="mb-3">Mode Online / Offline</h6>
                <div className="row mb-3 g-4">
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="shadow p-2 rounded-4  h-100">
                            <div className="image-container">
                                <img src={codingStart} alt="codingStart" className="thumbnail-image rounded-4" />
                            </div>
                            <div className=" p-3">
                                <h5 className="keyword">Basic Level</h5>
                                <p className="description">The perfect course for your kid to start mastering skills in the world of Coding</p>
                            </div>
                            <div className="row px-3 flex-nowrap">
                                <div className="col d-flex flex-column fw-bold align-items-center">
                                    <span className="keyword">10+</span>
                                    <span>classNamees</span>
                                </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center">
                                    <span className="keyword">5+</span>
                                    <span>Projects</span>
                                </div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center">
                                        <span className="keyword">10+</span>
                                        <span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" row p-3">
                                <div className="align-self-end">
                                    <div className="d-flex flex-wrap text-break ">
                                        <h6 className="bold">Strarts from <span className="text-decoration-line-through">Rs 1999/</span><span className="keyword"> Rs 999/-</span></h6>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <button className="inquire-btn">  <BsWhatsapp size={20} /> Click here to inquire</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  ">
                        <div className="shadow p-2 rounded-4  h-100">
                            <div className="image-container">
                                <img src={codingMiddle} alt="codingMiddle" className="thumbnail-image rounded-4" />
                            </div>
                            <div className=" p-3">
                                <h5 className="keyword">Intermediate Level</h5>
                                <p className="description">The ideal course for your child to deepen their skills and expertise in Coding</p>
                            </div>
                            <div className="row px-3 flex-nowrap">
                                <div className="col d-flex flex-column fw-bold align-items-center">
                                    <span className="keyword">20+</span>
                                    <span>classNamees</span>
                                </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center">
                                    <span className="keyword">10+</span>
                                    <span>Projects</span>
                                </div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center"><span className="keyword">10+</span>
                                        <span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="align-self-end">
                                    <div className="d-flex flex-wrap text-break">
                                        <h6 className="bold">Strarts from <span className="text-decoration-line-through">Rs 2999/</span><span className="keyword"> Rs 1999/-</span>
                                        </h6>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <button className="inquire-btn">
                                                <BsWhatsapp size={20} />
                                                Click here to inquire
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="shadow p-2 rounded-4  h-100">
                            <div className="image-container">
                                <img src={codingAdvance} alt="codingAdvance" className="thumbnail-image rounded-4" />
                            </div><div className=" p-3">
                                <h5 className="keyword">Advance Level</h5>
                                <p className="description">The advanced course for your child to excel and become a master in the world of Coding.</p>
                            </div><div className="row px-3 flex-nowrap">
                                <div className="col d-flex flex-column fw-bold align-items-center"><span className="keyword">30+</span>
                                    <span>classNamees</span>
                                </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center">
                                    <span className="keyword">30+</span><span>Projects</span>
                                </div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center">
                                        <span className="keyword">15+</span>
                                        <span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" row p-3 ">
                                <div className="align-self-end">
                                    <div className="d-flex flex-wrap text-break">
                                        <h6 className="bold">Strarts from <span className="text-decoration-line-through">Rs 3999/</span><span className="keyword"> Rs 2999/-</span>
                                        </h6>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <button className="inquire-btn">  <BsWhatsapp size={20} /> Click here to inquire</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="mb-2">Drones Courses for Kids.</h3>
                <h6 className="mb-3">Mode Online / Offline</h6>
                <div className="row mb-3 g-4">
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="shadow p-2 rounded-4  h-100">
                            <div className="image-container">
                                <img src={drone} alt="drone" className="thumbnail-image rounded-4" />
                            </div>
                            <div className=" p-3">
                                <h5 className="keyword">Drones</h5>
                                <p className="description">The advanced drone course to elevate your child’s skills and help them dominate the skies of technology.</p>
                            </div>
                            <div className="row px-3 flex-nowrap"><div className="col d-flex flex-column fw-bold align-items-center">
                                <span className="keyword">30+</span><span>classNamees</span>
                            </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center"><span className="keyword">10+</span><span>Projects</span>
                                </div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center">
                                        <span className="keyword">10+</span>
                                        <span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="align-self-end">
                                    <div className="d-flex flex-wrap text-break">
                                        <h6 className="bold">Strarts from  <span className="text-decoration-line-through">Rs 3999/</span> <span className="keyword">Rs 2999/-</span>
                                        </h6>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <button className="inquire-btn">
                                                <BsWhatsapp size={20} />
                                                Click here to inquire
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className="shadow p-2 rounded-4  h-100">
                            <div className="image-container">
                                <img src={statellite} alt="Satellite" className="thumbnail-image rounded-4" />
                            </div>
                            <div className=" p-3">
                                <h5 className="keyword">Advance Science</h5>
                                <p className="description">The advanced course for your child to explore and master the fascinating world of Satellite technology and space communication.</p>
                            </div><div className="row px-3 flex-nowrap">
                                <div className="col d-flex flex-column fw-bold align-items-center">
                                    <span className="keyword">30+</span>
                                    <span>classNamees</span>
                                </div>
                                <div className="col d-flex flex-column fw-bold  align-items-center">
                                    <span className="keyword">10+</span>
                                    <span>Projects</span>
                                </div>
                                <div className="col">
                                    <div className="col d-flex flex-column fw-bold  align-items-center">
                                        <span className="keyword">10+</span>
                                        <span>Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="align-self-end">
                                    <div className="d-flex flex-wrap text-break">
                                        <h6 className="bold">Strarts from  <span className="text-decoration-line-through">Rs 3999/</span> <span className="keyword">Rs 2999/-</span>
                                        </h6>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/+917904189145" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <button className="inquire-btn">  <BsWhatsapp size={20} /> Click here to inquire</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-6">
                        <h2 className="bold text-center">What your kid will receive</h2>
                        <div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={kitSoftware} alt="kitsoftware" className="img-fluid" />
                            </div><div className="col-9">
                                <h4 className="semi-bold">Kit/ Software tools</h4>
                                <p> Your kit/ software sent within 24 Hours</p>
                            </div>
                        </div>
                        <div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={onlineLive} alt="onlineLive" className="img-fluid" />
                            </div>
                            <div className="col-9">
                                <h4 className="semi-bold">1:1 Online Live className</h4>
                                <p> 1-1 live online sessions with the educator for your kid</p></div></div><div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={certificate} alt="certificate" className="img-fluid" />
                            </div>
                            <div className="col-9">
                                <h4 className="semi-bold">Smart Certificate</h4>
                                <p> Showcase your kid's skills to the world</p>
                            </div>
                        </div>
                        <div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={personalized} alt="personalized" className="img-fluid" />
                            </div>
                            <div className="col-9">
                                <h4 className="semi-bold">Personalized classNamees</h4>
                                <p> Help your kid learn directly from experts &amp; build projects from anywhere</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h2 className="bold text-center">What your kid will build</h2>
                        <div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={workingProject} alt="workingProject" className="img-fluid" />
                            </div>
                            <div className="col-9">
                                <h4 className="semi-bold">Working Projects</h4>
                                <p> Help your kid build cool projects in a super easy way</p>
                            </div>
                        </div>
                        <div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={analyticalThinking} alt="analyticalThinking" className="img-fluid" />
                            </div><div className="col-9">
                                <h4 className="semi-bold">Analytical thinking</h4>
                                <p> Help your kid develop analytical skills and logical thinking</p>
                            </div>
                        </div>
                        <div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={creativity} alt="creativity" className="img-fluid" />
                            </div>
                            <div className="col-9">
                                <h4 className="semi-bold">Creativity and Problem Solving</h4>
                                <p> Ability to identify and solve problems</p>
                            </div>
                        </div>
                        <div className="row flex-nowrap d-flex align-items-center">
                            <div className="col-3">
                                <img src={confidence} alt="confidence" className="img-fluid" />
                            </div>
                            <div className="col-9">
                                <h4 className="semi-bold">Confidence</h4>
                                <p> Your kids will develop confidence and begin to dream big</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STEM course details */}
            <div className="container mb-4">
                <div className=" bg-light row d-flex align-items-center g-4 ">
                    <div className="col-12 col-md-5 pb-4 px-4">
                        <img src={stemCourse} alt="STEMCourse" width="100%" />
                    </div><div className="col-md-7 col-12 px-5">
                        <h5 className="bold mb-2">Why Choose STEM Courses for Your Child?</h5>
                        <p className="pb-3" style={{ textAlign: "justify" }}>Give your child the opportunity to shape the future of technology. By nurturing curiosity and building confidence at a young age, you can set the foundation for their successful career. These courses are designed to do just that—help your child grasp how technology is transforming the world and how to solve real-world problems with it. More importantly, the classNamees inspire a love for technology while instilling the confidence to dream big and achieve greatness.
                        </p>
                    </div>
                </div>
            </div>

            {/* why children learn a STEM ? */}

            <div className="container mb-5">
                <div className=" bg-light row d-flex flex-sm-row-reverse align-items-center ">
                    <div className="col-12 col-md-5 p-4  ">
                        <img src={stem} alt="stemLearn" width="100%" />
                    </div>
                    <div className="col-md-7 col-12 p-5">
                        <h5 className="bold">What Will Your Child Learn in These STEM Online Courses?</h5>
                        <p style={{ textAlign: "justify" }}>These STEM online courses are thoughtfully designed to nurture your child's analytical and logical thinking skills. They aim to enhance creativity and problem-solving abilities while making technology an enjoyable and engaging experience. By fostering curiosity, these courses encourage your child to explore deeper and discover new possibilities. The confidence gained from building projects will inspire them to dream big and aspire to create transformative technologies or companies in the future. All classNamees are conducted in a live 1:1 setting by experienced instructors, ensuring personalized attention and focus. Your child will not only learn but also enjoy the hands-on process of creating projects.</p>
                    </div>
                </div>
            </div>

            {/* Frequently asked question? */}
            <div className="container mb-5 p-5 bg-light">
                <h2 className="bold text-center mb-3">Frequently Asked Questions about STEM Online Courses</h2>
                <div>
                    <h4 className="semi-bold">How Will My Child Learn and Build Projects?</h4>
                    <p>Once you enroll, a mentor will contact you to finalize a schedule that fits your convenience. All required kits or software tools will be dispatched within 24 hours and come with a 100% replacement guarantee. You can start with a free demo className to see how the program works. Payment is only required once you're confident in the unique learning approach we offer.</p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">Are the Learning Modules in These STEM Online Courses Difficult?</h4>
                    <p>The courses are designed for students with no prior experience, ensuring accessibility for all learners. Our expert instructors adapt the pace and teaching methods to suit your child’s individual needs. With personalized 1:1 classNamees, the learning process becomes both efficient and effective.
                    </p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">How Long Will It Take for My Child to Complete These Courses?</h4>
                    <p>Course durations range from 10 to 150 classNamees, with each className lasting 1 hour. We recommend scheduling 2 classNamees per week for the best results. After completing a trial className, you’ll have a clearer understanding of the course options and can choose the one that best meets your requirements.</p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">Are the Components in the STEM Kit Safe for My Child?</h4>
                    <p>Absolutely! The components are specifically designed with kids in mind and are completely safe to use.</p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">Why Does the Kit Look Rugged?</h4>
                    <p>Our kits are designed to let your child build projects from scratch—truly hands-on. By working with rugged materials like wood, nuts, and bolts, kids develop the confidence of creators, learning that products are meant to be “created” and not just “assembled.” We aim to instill a mindset of innovation, encouraging children to use readily available components around them instead of relying on factory-made kits or pre-assembled tools. This approach fosters creativity and builds “real” innovators who can think outside the box.
                    </p>
                    <p><b>Note:</b>
                        <br />
                        For children in the early stages of learning, using readymade kits can simplify the process and make learning more enjoyable. As they advance, we transition to more hands-on methods, as recommended by our instructors during the free trial className.
                    </p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">Can the Kit Be Reused After the Course?</h4>
                    <p>Yes! The kit is 100% reusable, allowing your child to create additional projects even after completing the course.</p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">Who Will Clarify My Child’s Doubts?</h4>
                    <p>During live 1:1 classNamees, your child can ask our experts any number of questions, ensuring their doubts are resolved instantly. Personalized attention ensures no query goes unanswered.</p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">Do We Need to Return the Kit After Completing the Projects?</h4>
                    <p>No, the kit is yours to keep! Your child can continue exploring and building new projects with it even after the course ends.</p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">When Will the classNamees Be Scheduled?</h4>
                    <p>Once you enroll, a mentor will contact you to coordinate and finalize a schedule that works best for your child.</p>
                </div>
                <hr />
                <div>
                    <h4 className="semi-bold">What Happens If My Child Misses a className?</h4><p>Since these are 1:1 sessions, you can easily request the mentor to reschedule missed classNamees at a convenient time.</p></div><hr />
                <div>
                    <h4 className="semi-bold">When Will the Kit Arrive?</h4><p>The kit is thoroughly tested, sanitized, and dispatched within 24 hours of enrollment. Depending on your location, it typically arrives within 2–3 working days.</p></div>
                <hr />
                <div>
                    <h4 className="semi-bold">What If the Components Are Damaged During Delivery?</h4>
                    <p>We offer a 100% replacement guarantee. Though every kit is carefully tested before shipping, if any component is damaged during transit, we’ll replace it at no extra cost.</p>
                </div>
            </div>

        </div>
    );
}

export default Robotics;