import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blogSlug, blogTitle, blogAuthor, blogDate, blogImage }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <Image
          src={blogImage}
          fill={true}
          alt="Blog Image"
          className={styles.cardImg}
        />
      </div>
      <div className={styles.cardBody}>
        <div>
          <Link href={`/Blogs/${blogSlug}`} className={styles.cardTitle}>{blogTitle}</Link>
          <div className={styles.cardAuthor}>{blogAuthor}</div>
        </div>
        <div className={styles.cardDate}>{blogDate}</div>
      </div>
    </div>
  );
}
