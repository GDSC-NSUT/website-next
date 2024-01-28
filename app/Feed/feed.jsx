import React from "react";

export default function FeedCard(props) {
    const image = `/Assets2/Images/feed/${props.media_url}`
    return <>
        <div className="feed">
            <a href={props.permalink} target="_blank" rel="noreferrer" >
                <img src={props.media_type !== "VIDEO" ? image : props.thumbnail_url} alt={props.alt} />
            </a>
            {/* <span className="caption">{`${props.caption.slice(0,55)}...`}</span> */}
        </div></>
}