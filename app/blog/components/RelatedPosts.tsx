import { getPosts } from "@/lib/getPosts";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/post.module.css";

const RelatedPosts = async ({ currentPostId }) => {
  // unoptimized 
  const posts = await getPosts();
  const relatedPosts = posts.posts
    .filter((post) => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className={styles.relatedPosts}>
      <h3 className={styles.relatedPostsTitle}>You Might Also Like</h3>
      <div className={styles.relatedPostsList}>
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className={styles.relatedPost}
          >
            <div className={styles.relatedPostImage}>
              <Image fill src={post.image} alt={post.title} />
            </div>
            <div className={styles.relatedPostContent}>
              <h4 className={styles.relatedPostTitle}>{post.title}</h4>
              <span className={styles.relatedPostReadMore}>
                Read article <FiArrowRight className={styles.arrowIcon} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
