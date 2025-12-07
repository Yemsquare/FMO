import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'MO-small',
        name: 'Michael Orimobi',
        designation: 'Chairman',
        location: 'Lagos, NIgeria', 
        description: 'Michael is an astute capital markets & finance lawyer, global business leader and philanthropist.',
        socialNetwork: [
            // {
            //     icon: <FiFacebook />,
            //     url: '#'
            // },
            // {
            //     icon: <FiTwitter />,
            //     url: '#'
            // },
            // {
            //     icon: <FiInstagram />,
            //     url: '#'
            // },
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/michael-orimobi/'
            },
            {
                icon: <FiMail />,
                url: 'mailto:chairman@fmoholdings.com'
            },
            {
                icon: <FiPhone />,
                url: 'tel: +2348055190020'
            }
        ]
       
    },
    {
        image: 'COS-small',
        name: 'Olubusayo Ajayi',
        designation: 'COO',
        location: 'Lagos, Nigeria', 
        description: 'Oyindamola is the Chief of Staff at FMO Holdings with over 17 years’ experience as a business support professional.',
        socialNetwork: [
            // {
            //     icon: <FiFacebook />,
            //     url: '#'
            // },
            // {
            //     icon: <FiTwitter />,
            //     url: '#'
            // },
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/damola-ade-alli-9831b721/'
            },
            {
                icon: <FiMail />,
                url: 'mailto:cos@fmoholdings.com'
            },
            {
                icon: <FiPhone />,
                url: 'tel:+2349088814362'
            }
        ]
      
    },
    // {
    //     image: 'team-03',
    //     name: 'Afanan Sifa',
    //     designation: 'Accounts Manager',
    //     location: 'Poland', 
    //     description: 'Yes, I am a product designer. I have a passion for product design.',
    //     socialNetwork: [
    //         {
    //             icon: <FiFacebook />,
    //             url: '#'
    //         },
    //         {
    //             icon: <FiTwitter />,
    //             url: '#'
    //         },
    //         {
    //             icon: <FiInstagram />,
    //             url: '#'
    //         },
    //     ]
        
    // },
]


const TeamOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`rn-team ${teamStyle}`}>
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.png`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    <span className="team-form">
                                        <img src="./images/team/location.svg" alt="Corporate React Template" />
                                        <span className="location">{data.location}</span>
                                    </span>
                                    <p className="description">{data.description}</p>

                                    <ul className="social-icon social-default icon-naked mt--20" >
                                        {data.socialNetwork.map((social, index) =>
                                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                        )}
                                    </ul>
                                </figcaption>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamOne;
