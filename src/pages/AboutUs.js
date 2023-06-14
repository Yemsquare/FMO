import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import Separator from "../elements/separator/Separator";
import BrandThree from '../elements/brand/BrandThree';
import AboutFour from '../elements/about/AboutFour';
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Mission from "../elements/about/Mission";
import { FiAlignJustify } from 'react-icons/fi';

const AboutUs = () => {
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 height-850 bg_image" data-black-overlay="7" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/about-us-banner.png)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    {/* <div>
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's About Details.</span></h3>
                                    </div> */}
                                    <h1 className="title display-one">We are <br />FMO Holdings</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">We are an investment holding firm that looks out for opportunities in order to create growth for Africa & beyond.</h3>
                                </div>
                            </div>
                            <div className="col-lg-6" style={{fontStyle:FiAlignJustify}}>
                                <p className="mb--10">We are FMO Holdings, a family-owned investment company dedicated to creating long-term value and growth opportunities in Africa & beyond.</p>
                                <p className="mb--10">With our expertise in strategic investments and portfolio management, we aim to generate sustainable returns for our stakeholders and contribute to the overall development of the global economy.</p>
                                <p className="mb--10">We believe in a disciplined and prudent approach to investing. Our team of experienced professionals combines in-depth market research, rigorous due diligence, and a comprehensive understanding of industry trends to make informed investment decisions.</p>
                                <p className="mb--10">We are committed to building diversified portfolios that minimize risk while maximizing returns, always with a long-term perspective.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}



                {/* Start Brand Area  */}
                {/* <div className="rwt-brand-area pb--60 pt--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area  */}


                <Separator />

                 {/* Start Mission Area   */}
                <Mission />                    
                {/* Start Mission Area  */}

                {/* Start Service Area  */}
                {/* <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                            textAlign = "text-center"
                            />
                    </div>
                </div> */}
                {/* End Service Area  */}
{/* 
                <div className="rwt-timeline-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <TimelineTwo classVar="no-gradient"  />
                            </div>
                        </div>
                    </div>
                </div> */}

                <Separator />

                {/* <AboutFour image="./images/about/contact-image.jpg" />
                
                {/* Start Elements Area  */}
                {/* <div className="rwt-counterup-area pb--100">
                    <div className="container mt_dec--30">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div> */} 
                {/* End Elements Area  */}

                <Separator />

                {/* Start Elements Area  */}
                {/* <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Corporate Team."
                                    title = "Corporate Team Member."
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div> */}
                {/* End Elements Area  */}






                <FooterFour />
            </main>
        </>
    )
}

export default AboutUs;
