import dbConnect from "@/actions/dbConnect";
import PostModel from "@/models/Post.model";

export async function getPosts() {
  try {
    await dbConnect();
    const posts = await PostModel.find({}).sort({ createdAt: -1 });

    if (!posts || posts.length === 0) {
      return {
        success: false,
        message: "No posts found",
        posts: []
      };
    }

    return {
      success: true,
      message: "Posts fetched successfully",
      posts: JSON.parse(JSON.stringify(posts)), 
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      success: false,
      message: "An error occurred while fetching posts",
      posts: []
    };
  }
}
