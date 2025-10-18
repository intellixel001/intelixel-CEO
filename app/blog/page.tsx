import { getPosts } from "@/lib/getPosts";
import { FiSearch } from "react-icons/fi";
import BlogCard from "./components/BLogCard";
import FeaturedPost from "./components/FeaturedPost";
import styles from "./styles/blog.module.css";

export default async function BlogPage() {
  const postData = await getPosts();
  const posts = postData.posts ?? [];

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);
  
  //infinite scroll to apply

  return (
    <div className={`${styles.container}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Blog</h1>
        <p className={styles.subtitle}>
          Insights, tutorials, and thoughts on web development, design, and
          technology.
        </p>

        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search articles..."
              className={styles.searchField}
            />
          </div>
        </div>
      </header>

      {featuredPost && <FeaturedPost post={featuredPost} />}

      <div className={styles.blogGrid}>
        {regularPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
