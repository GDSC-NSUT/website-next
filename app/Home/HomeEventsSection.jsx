import React from 'react'
import Link from 'next/link';
import Carousel from '../Events/Carousel';
// import Image from '../../Assets/Images/events-workshop.jpg';


export default function HomeEventsSection() {

    const data = [
        { key: 1, Image: '/Assets2/Images/feed/nsut_ai.jpg', title: "NSUT-AI x GDSC NSUT", desc: "Machine Learning Challenge" },
        { key: 2, Image: '/Assets2/Images/feed/orientation.jpg', title: "Orientation 2023-24", desc: "Orientation session for the batch of 2023-24" },
        { key: 3, Image: '/Assets2/Images/feed/Deeplearning.jpg', title: "Deep Learning Sprint", desc: "A fun filled and informative deep learning sprint session." },
        { key: 4, Image: '/Assets2/Images/feed/flutter_forward.jpg', title: "Flutter forward Xtended", desc: "An exciting new workshop on Flutter." },
        { key: 5, Image: '/Assets2/Images/feed/orientation2022.jpg', title: "Orientation 2022-23", desc: "Orientation session for the batch of 2022-23." }
      ];

    console.log(data.length);

    return (
        <>
            {
                data.length > 0 ?
                    (
                        <section className="home-section events-section">
                            <div className="title home-carousel-title">Featured Events</div>
                            <div className={'carousel-container'}>
                                <Carousel data={data} />
                            </div>
                        </section>
                    ) :
                    (
                        <section className="home-section events-section">
                            <div className="wrapper">
                                <div className="home-triangle-box"></div>
                                <div className="home-triangle-box-2"></div>
                                <div className="home-events-inner-container">
                                    <div className="content">
                                        <h1 className="title">No upcoming events</h1>
                                        <p className="info">Stay tuned with us for amazing events, workshops and other incredible opporutinities.</p>
                                        <Link className="home-know-more-btn" href="/">Know More</Link>
                                        <div className="home-events-host">
                                            <p>Want to host an event with GDSC NSUT?</p>
                                            <Link href="/">Connect with us</Link>
                                        </div>
                                    </div>
                                    <img className="home-events-image" src={'/assets/images/calender.png'} alt="Events"></img>
                                </div>
                            </div>
                        </section>
                    )
            }
        </>

    )
}
