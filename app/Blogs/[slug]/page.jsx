import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";
import quill from "react-quill/dist/quill.snow.css";
import styles from "../blog.module.css";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

const getFormattedDate = (inputTime) => {
  const dateComponents = inputTime.match(
    /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d+)([+-]\d{2}:\d{2})/
  );

  if (dateComponents) {
    const [
      ,
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds,
      timezone,
    ] = dateComponents;
    const dateObj = new Date(
      `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezone}`
    );
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    return formattedDate;
  } else {
    return "Date Conversion Error";
  }
};

export const revalidate = 60

export async function generateStaticParams() {
  const { data: posts } = await supabase.from('blogs').select('slug')

  return posts?.map(({ slug }) => ({
    slug,
  }))
}

export default async function Post({ params: { slug } }) {
  const { data } = await supabase.from("blogs").select().match({ slug }).single();

  if (!data) {
    notFound();
  }  
  
  return (
    <div className={styles.blogWrapper}>
      <div className={styles.blogSectionHeader}>
        <div className={styles.blogDate}>
          {getFormattedDate(data.created_at)}
        </div>
        <div>
          <div className={styles.blogTitle}>{data.title}</div>
          <div className={styles.blogAuthor}>~ {data.author}</div>
        </div>
        <div className={styles.blogLinks}>
          <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
          <SocialIcon network="youtube" style={{ height: 25, width: 25 }} />
          <SocialIcon network="telegram" style={{ height: 25, width: 25 }} />
          <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} />
        </div>
      </div>
      <div className={styles.blogCoverImage}>
        <Image
          src={data.cover_image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Cover Image"
        />
      </div>
      <div className={`${styles.blogContentWrapper} ql-snow`}>
        <div    
        className={`${styles.blogContent} ql-editor`}   
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
        <div className={styles.blogTags}>
          {(data.tagsArr ?? []).map((tag, index) => {
            return (
              <div className={styles.blogTag} key={index}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
