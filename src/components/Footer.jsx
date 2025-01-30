
const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="row pt-4 ">
                <div className="col-12 col-md-4 mb-3">
                    <div className="h-100">
                        <h2 className="bold mb-3 footer-heading">R2C Technologies</h2>
                        <div className="">
                            Established in 2020, R2C Technologies has emerged as a leading center for technical education and career advancement, serving both students and interns.
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="mb-3">
                        <h5 className="bold footer-heading">Address:</h5>
                        <p className="mb-4">
                            19, II FLOOR, By Pass Rd, SreeKumaran Travels, near Bus stand, Udumalaipettai, Tamil Nadu-642126.
                        </p>

                        <h5 className="bold footer-heading">Email:</h5>
                        <p className="mb-4">r2cudt@gmail.com</p>

                        <h5 className="bold footer-heading">Phone Number:</h5>
                        <p>7904189145 (or) 6369948175</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="">
                        <h5 className="bold footer-heading">Open & Close (Timing)</h5>
                        <span className="d-flex text-nowrap gap-2">from <h5 className="keyword">Monday</h5> to <h5 className="keyword">Satruday</h5></span>
                        <span>from 10.00 AM to 07.00 PM</span>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Footer;