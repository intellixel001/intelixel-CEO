import Link from "next/link";
import { FiCalendar, FiClock, FiTag } from "react-icons/fi";
import styles from "../styles/blog.module.css";

const BlogCard = ({ post }) => {
  const date = new Date((post as any).createdAt).toDateString();

  return (
    <div className={styles.blogCard}>
      <div className={styles.blogImageContainer}>
        <img src={post.image} alt={post.title} className={styles.blogImage} />
      </div>
      <div className={styles.blogContent}>
        <span className={styles.blogCategory}>
          <FiTag className={styles.icon} /> {post.category}
        </span>
        <h3 className={styles.blogTitle}>{post.title}</h3>
        <p className={styles.blogExcerpt}>{post.short_desc}</p>
        <div className={styles.blogMeta}>
          <span className={styles.metaItem}>
            <FiCalendar className={styles.icon} /> {date}
          </span>
          <span className={styles.metaItem}>
            <FiClock className={styles.icon} /> {post.readTime}
          </span>
        </div>
        <Link href={`/blog/${post.id}`} className={styles.readMore}>
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
