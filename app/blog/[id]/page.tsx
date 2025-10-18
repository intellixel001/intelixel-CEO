import { getPost } from "@/lib/getPost";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from "react-icons/fi";
import AuthorBio from "../components/Authorbio";
import RelatedPosts from "../components/RelatedPosts";
import styles from "../styles/post.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;

  const post = await getPost(id);
  if (!post) {
    return notFound();
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.short_desc,
    openGraph: {
      title: post.title,
      description: post.short_desc,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`,
      siteName: "Intellixel",
      images: [post.image, ...previousImages],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  
  if (!post) {
    return notFound();
  }
  const date = new Date((post as any).createdAt).toDateString();
  console.log(post.title5)

  return (
    <div className={`${styles.container}`}>
      <div className={styles.header}>
        <Link href="/blog" className={styles.backButton}>
          <FiArrowLeft className={styles.backIcon} /> Back to Blog
        </Link>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <FiCalendar className={styles.icon} /> {date}
          </span>
          <span className={styles.metaItem}>
            <FiClock className={styles.icon} /> {post.readTime}
          </span>
          <span className={styles.metaItem}>
            <FiTag className={styles.icon} /> {post.category}
          </span>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.featuredImageContainer}>
          <img
            src={post.image}
            alt={post.title}
            className={styles.featuredImage}
          />
        </div>
      </div>

      <div className={styles.content}>
        <article className={styles.article}>
          <p className={styles.intro}>{post.short_desc}</p>

          <h2>{post.title1}</h2>
          <p>{post.title1_desc}</p>

          <h2>{post.title2}</h2>
          <p>{post.title2_desc}</p>
          {post.note && (
            <div className={styles.highlight}>
              <p>
                <strong>Note : </strong> {post.note}
              </p>
            </div>
          )}

          <h2>{post.title3}</h2>
          <p>{post.title3_desc}</p>

          <h3>{post.title4}</h3>
          <p>{post.title4_desc}</p>

          <h2>{post.title5}</h2>
          <p>{post.title5_desc}</p>
        </article>

        <div className={styles.sidebar}>
          <AuthorBio post={post} />
          <RelatedPosts currentPostId={post.id} />
        </div>
      </div>
    </div>
  );
}
