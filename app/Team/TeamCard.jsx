import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function TeamCard(props) {
  const {memberImage, memberName, memberStatus, memberAbout, memberSocialLinkedinPath, memberSocialGithubPath, memberSocialMailPath} = props;
  return (
    <div className="team-card">
      <div className="overlay">
        <div className="member-about">{memberAbout}</div>
        <div className="social">
          <a className="social-icons linkedin" href={memberSocialLinkedinPath}><FaLinkedinIn /></a>
          <a className="social-icons github" href={memberSocialGithubPath}><FaGithub /></a>
          <a className="social-icons mail" href={memberSocialMailPath}><GrMail /></a>
        </div>
      </div>
      <div className="static">
        <div className="image-container">
          <img className="member-image" src={memberImage} alt={memberName} />
        </div>
        <div className="member-name">{memberName}</div>
        <div className="member-status">{memberStatus}</div>
      </div>
    </div>
  );
}