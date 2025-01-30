import heroSection from "../../assets/heroSection.jpg";


const Home = () => {

    return (
        <div>
            <div className="position-relative">
                <img src={heroSection} alt="A.P.J kalam" className=" hero-image" />
                <div className="position-absolute bottom-0 end-0 pb-5 quotes mx-5">
                    என்னால் முடியும் என்ற மன உறுதியை மாணவர்களிடையே உருவாக்குவதே கல்வியின் மிக உயர்ந்த நோக்கமாகும்.  <span className="">– A.P.J. அப்துல் கலாம்</span>
                </div>
            </div>
        </div>
    );
}

export default Home;