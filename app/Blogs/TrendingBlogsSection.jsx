import React from "react";
import Link from "next/link";
import BlogCarousel from "./BlogCarousel";

export default function TrendingBlogsSection({data}) {
  return (
    <>
      {data.length > 0 ? (
        <section className="home-section events-section">
          <div className="title home-carousel-title">Trending</div>
          <div className={"carousel-container"}>
            <BlogCarousel data={data} />
          </div>
        </section>
      ) : (
        <section className="home-section events-section">
          <div className="wrapper">
            <div className="home-triangle-box"></div>
            <div className="home-triangle-box-2"></div>
            <div className="home-events-inner-container">
              <div className="content">
                <h1 className="title">No Blogs Out Yet</h1>
                <p className="info">
                  Stay tuned with us for amazing events, workshops and other
                  incredible opporutinities.
                </p>
                <Link className="home-know-more-btn" href="/">
                  Know More
                </Link>               
              </div>
              <img
                className="home-events-image"
                src={"/assets/images/calender.png"}
                alt="Events"
              ></img>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
