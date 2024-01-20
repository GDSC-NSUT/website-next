'use client'

import styles from "./contact.module.css";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillMediumCircle, AiFillBehanceCircle, AiFillTwitterCircle } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

const SocialLink = ({ children, to = "https://www.linkedin.com/company/gdscnsut/" }) => {
    return (
        <a href={to} target="_blank" rel="noreferrer" className={styles.social}>
            {children}
        </a>
    );
};

const Contact = () => {
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.form);
    };

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.formDiv}>
                    <div className={styles.formTitle}>
                        <h2>Let's talk.</h2>
                        <lottie-player
                            src="/assets/animations/contactlottie.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                    <form>
                        <input type="text" placeholder="Name" name="name" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <textarea type="text" placeholder="Message" name="message" required></textarea>
                        <input type="submit" onClick={formSubmit} value="Submit" />
                    </form>
                </div>
                <div className={styles.iframeDiv}>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.741298381271!2d77.04494813621827!3d28.60365705403583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1661844926165!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className={styles.socials}>
                <h3>Connect with us on</h3>
                <div>
                    <SocialLink>
                        <BsFacebook fill="#4267B2" />
                    </SocialLink>
                    <SocialLink>
                        <BsGithub />
                    </SocialLink>
                    <SocialLink to="https://www.linkedin.com/company/gdscnsut/">
                        <div className={styles.linkedInCircle}>
                            <GrLinkedinOption />
                        </div>
                    </SocialLink>
                    <SocialLink>
                        <AiFillTwitterCircle fill="#1DA1F2" />
                    </SocialLink>
                    <SocialLink>
                        <AiFillBehanceCircle fill="#053EFF" />
                    </SocialLink>
                    <SocialLink>
                        <AiFillMediumCircle fill="" />
                    </SocialLink>
                </div>
            </div>
        </div>
    );
};

export default Contact;
