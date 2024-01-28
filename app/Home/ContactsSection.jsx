import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiFillBehanceCircle, AiFillMediumCircle } from 'react-icons/ai';

export default function ContactsSection() {
    return (
        <section className='home-section contacts-section'>
            <div className="wrapper">
                <div className="heading">Contact Us</div>
                <div className="info">We would love to have a conversation</div>
                <div className="icons">
                    <BsFacebook style={{color: 'rgb(65 101 174)'}} />
                    <BsGithub style={{color: 'black'}} />
                    <BsLinkedin style={{color: '#0077b5', borderRadius: "50%"}}/>
                    <BsTwitter style={{borderRadius: "50%", backgroundColor: "#1da1f2", color: "white", padding: "3px"}}/>
                    <AiFillBehanceCircle style={{color: "#1da1f2", fontSize: "30px"}} />
                    <AiFillMediumCircle style={{color: "black", fontSize: "30px"}} />
                </div>
            </div>
        </section>
    )
}
