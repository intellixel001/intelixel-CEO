import Link from "next/link";
import { FiCalendar, FiClock, FiTag } from "react-icons/fi";
import styles from "../styles/blog.module.css";

const FeaturedPost = ({ post }) => {
  const date = new Date((post as any).createdAt).toDateString();

  return (
    <div className={styles.featuredPost}>
      <div className={styles.featuredImageContainer}>
        <img
          src={post.image}
          alt={post.title}
          className={styles.featuredImage}
        />
      </div>
      <div className={styles.featuredContent}>
        <span className={styles.featuredCategory}>
          <FiTag className={styles.icon} /> {post.category} • Featured
        </span>
        <h2 className={styles.featuredTitle}>{post.title}</h2>
        <p className={styles.featuredExcerpt}>{post.short_desc}</p>
        <div className={styles.featuredMeta}>
          <span className={styles.metaItem}>
            <FiCalendar className={styles.icon} /> {date}
          </span>
          <span className={styles.metaItem}>
            <FiClock className={styles.icon} /> {post.readTime}
          </span>
        </div>
        <Link href={`/blog/${post.id}`} className={styles.featuredReadMore}>
          Read Full Article →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
