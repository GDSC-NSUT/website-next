import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from 'next/image';

const Card = ({ event, showEventModal }) => {

  const { name, date, description, venue, image } = event;

  function handleClick() {
    showEventModal(event);
  }

  return (
    <div className='event-card'>
      <div className='event-image-container'>
        <Image src={`/Assets2/Images/feed/${image}`} alt={name} width={100} height={100}/>
      </div>
      <div className='event-info-container'>
        <h2 className='event-name'>{name}</h2>
        <h5 className='event-date'>{date}</h5>
        <p className='event-desc'>{description}</p>
        <div className='event-venue-wrapper'>
          <div className='event-venue-icon'>
            <FaMapMarkerAlt />
          </div>
          <span className='event-venue'>{venue}</span>
        </div>
        <button className='event-learn-more-btn' onClick={handleClick}>Learn More</button>
      </div>
    </div>
  )
}

export default Card