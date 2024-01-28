import React from 'react';
import "./footer.css";
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaBehance } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="vertical-container">
            <div className="horizontal-container">
                <Image className="footer-logo" src={"/Assets2/Images/DSC-Logo.png"} alt="DSC Logo" height={100} width={100} />
                <div className="vertical-container">
                    <span className="society-name">Google Developer Student Clubs</span>
                    <span className="college-name">Netaji Subhas University of Technology</span>
                </div>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="instagram"><FaInstagram /></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="facebook"><FaFacebookF /></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="linkedin"><RiLinkedinFill /></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="behance"><FaBehance /></a>
            </div>
        </div>
        <ul className="nav-links">
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/Events" >Events</Link></li>
            <li><Link href="/Team" >Our Team</Link></li>
            <li><Link href="/Blogs" >Blogs</Link></li>
            <li><Link href="/Feed" >Feed</Link></li>
            <li><Link href="/Contact" >Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}