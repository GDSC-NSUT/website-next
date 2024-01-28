"use client";
import React from "react";
import PropTypes from "prop-types";

function WWDCard({
  Title = "Design",
  Content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quo, velit defehi geyi ugfuiwef gdfsjhd lawb jhwfgebhifs b jhlafbpertiuwe rqwui fbjhewe by aufgeprug egfhapji bghjbgv chid nwe maxime ducimus debitis voluptatem.",
}) {
  return (
    <div className={`home-card ${Title}`}>
      <lottie-player
        src={`/assets/${Title}-lottie.json`}
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
      <div className="title">{Title}</div>
      <div className="content">{Content}</div>
    </div>
  );
}

/* WWDCard.defaultProps = {
    Title: "Design",
    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quo, velit defehi geyi ugfuiwef gdfsjhd lawb jhwfgebhifs b jhlafbpertiuwe rqwui fbjhewe by aufgeprug egfhapji bghjbgv chid nwe maxime ducimus debitis voluptatem."
}
 */
WWDCard.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
};

export default function WWDSection() {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <section className="home-section wwd-section">
      <div className="wrapper">
        <div className="heading">What we do</div>
        <div className="home-card-container">
          <WWDCard
            Title="Design"
            Content="We design state of the art websites and applications keeping the User Experience and User Interface in mind. Our designing department consists of some of the best talent across the campus."
          />
          <WWDCard
            Title="Code"
            Content="We are one of the biggest developer student clubs across the country. All coding departments will give you the opportunity to interact and learn from experienced developers."
          />
          <WWDCard
            Title="Develop"
            Content="We develop industry standard applications be it the society website, social services, hackathons etc. DSC will provide you with the best environment for learning and teaching development skills."
          />
        </div>
      </div>
    </section>
  );
}
