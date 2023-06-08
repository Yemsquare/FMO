import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Typed from 'react-typed';

const AboutOne = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-us-page.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">FMO HOLDINGS <br /> {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Investment",
                                            "Company",
                                            // "Agency.",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                                <p>We are FMO Holdings, a family-owned investment company dedicated to creating long-term value and growth opportunities in Africa & beyond.</p>
                                <p>With our expertise in strategic investments and portfolio management, we aim to generate sustainable returns for our stakeholders and contribute to the overall development of the global economy.</p>
                                <div className="read-more-btn mt--40">
                                    <Link className="btn-default" to="/about-us"><span>More About Us</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutOne
