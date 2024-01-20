import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

const images = [
  "/assets/images/home-events-img.png",
  "/assets/images/home-feed-img.png",
  "/assets/images/home-projects-img.png",
];

export function EFPCard({
  Image = "",
  Title = "Events",
  Content = "Lorem ipsum dolor sit, sjhd lawb jhwfgebhifs b aufgeprug egfhapji bghjbgv chid nwe maxime ducimus debitis voluptatem.",
  To = "/",
}) {
  return (
    <Link href={To}>
      <div className="home-card">
        <div
          style={{ backgroundImage: `url("${Image}")` }}
          className="img"
        ></div>
        <div className="title">{Title}</div>
        <div className="content">{Content}</div>
        <div className="spacer" style={{ flex: 1 }}></div>
        <div className="arrow">
          <VscArrowRight />
        </div>
      </div>
    </Link>
  );
}

/* EFPCard.defaultProps = {
  Image: "",
  Title: "Events",
  Content:
    "Lorem ipsum dolor sit, sjhd lawb jhwfgebhifs b aufgeprug egfhapji bghjbgv chid nwe maxime ducimus debitis voluptatem.",
  To: "/",
};
 */
EFPCard.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
};

export default function EFPSection() {
  return (
    <section className="home-section efp-section">
      <div className="wrapper">
        <div className="home-card-container">
          <EFPCard
            Image={images[0]}
            Title="Events"
            To="/Events"
            Content="We host multiple events throughout the year such as Solution Challenge, Android Jams, Speaker sessions and much more."
          />
          <EFPCard
            Image={images[1]}
            Title="Feed"
            To="/Feed"
            Content="Have a sneak peak at our GDSC's Experience on our socials and discover the power of Technology and Collaboration"
          />
          <EFPCard
            Image={images[2]}
            Title="Team"
            To="/Team"
            Content="From fostering collaboration to driving innovation, our members contribute significantly. Get to know them here."
          />
        </div>
      </div>
    </section>
  );
}
