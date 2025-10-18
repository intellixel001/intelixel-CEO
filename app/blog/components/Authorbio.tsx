import Image from "next/image";
import styles from "../styles/post.module.css";
import Link from "next/link";

const AuthorBio = ({ post }) => {
  return (
    <div className={styles.authorBio}>
      <div className={styles.authorImage}>
        <Image
          src={post.author_image}
          alt={post.author_name}
          width={80}
          height={80}
          className={styles.authorImg}
        />
      </div>
      <h3 className={styles.authorName}>{post.author_name}</h3>
      <p className={styles.authorTitle}>{post.author_title}</p>
      <p className={styles.authorDescription}>{post.author_desc}</p>
      <div className={styles.socialLinks}>
        {post.author_socials.map((social, index) => {
          return (
            <Link key={social.url} href={social.url} target="_blank" className={styles.socialLink}>
              {social.platform}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorBio;
