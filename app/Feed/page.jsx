'use client'

import { useEffect, useState } from "react";
import "./feed.css";
import events from "./Feed_Event.json"
import FeedCard from "./feed";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://graph.instagram.com/me/media?access_token=IGQVJXYmVqc0sxNEM2V3hPbVlqLWZA3TUFIQnBEeS0wYW16UUtZAWWRxajRRcW80b01MSGVEZAkI4OUJsN0M0NVFhdkdVWXF5OGhmRVRqSmx3ejdpaG15ZA3lvZA3hoc2FpVHBoSXhtYVhwRDY1eW1hNXpZAeQZDZD&fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp");
      const data = await res.json();
      setPosts(data.data || events);
      console.log(data.data);
    }
    getPosts();
  }, []);
  return (
    <>
      <section className="feed-section">
        <div className="title">Our Feed</div>
        <div className="content">Follow us on <a href="https://instagram.com/gdsc_nsut" rel="noreferrer" target="_blank" >@GDSC_NSUT</a> and stay tuned in to our upcoming events and announcements.</div>
        <div className="feeds">
          {
            posts.map((post) => (
              <FeedCard permalink={post.permalink} media_type={post.media_type} media_url={post.media_url || ""} caption={post.caption} thumbnail_url={posts.thumbnail_url} alt={post.alt} />
            ))
          }
        </div>
      </section>
    </>
  )
}