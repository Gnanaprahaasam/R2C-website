import robotic from "../../assets/robotics_coding.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import "./Robotics.css";

const Robotics = () => {
    return (
        <div className="robotics container-fluid">
            <div className="row d-flex flex-row-reverse align-items-center robotics-heroSection ">
                <div className="col-12 col-md-6 p-sm-5 p-3">
                    <div>
                        <img src={robotic} alt="robotic" className="img-fluid shadow-lg" width={"100%"} />
                    </div>
                </div>
                <div className="col-12 col-md-6 p-5 ">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="">Robotics, Coding, Drones and Satellite</h1>
                        <h5 className="bold">Both Online and Offline Live 1:1 Classes for Kids (Ages 8+)</h5>
                        <ul className="list-unstyled lh-lg">
                            <li ><AiOutlineCheck size={20} className="text-white" /> Live 1:1 classes from experts</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Learn the concepts</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Develop project(s) from scratch</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Kit shipped to you in 24 hours</li>
                            <li><AiOutlineCheck size={20} className="text-white" /> Earn smart certificate & showcase skills</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Robotics;