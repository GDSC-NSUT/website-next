import React from "react";
import styles from "./blog.module.css";
import BlogCard from "./BlogCard";

const getFormattedDate = (inputTime) => {
  const dateComponents = inputTime.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d+)([+-]\d{2}:\d{2})/);

  if (dateComponents) {
      const [, year, month, day, hours, minutes, seconds, milliseconds, timezone] = dateComponents;  
      const dateObj = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezone}`);      
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = dateObj.toLocaleDateString('en-US', options);  
      return formattedDate;
  } else {
      return "Date Conversion Error";
  }
};

export default function LatestBlogsSection({ blogData }) {
  return (
    <div className={styles.latestBlogSection}>
      <div className={styles.section}>
        <div className={styles.heading}>Latest</div>
        <div className={styles.cardSection}>
          {(blogData ?? []).map((blog, index) => {
            return (
              <BlogCard
                blogAuthor={blog.author}
                blogDate={getFormattedDate(blog.created_at)}
                blogTitle={blog.title}
                blogImage={blog.cover_image}
               blogSlug={blog.slug}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
