import dbConnect from "@/actions/dbConnect";
import PostModel from "@/models/Post.model";

export async function getPost(id: string) {
  try {
    await dbConnect();
    const post = await PostModel.findOne({ id });
    if (!post) {
      return null;
    }
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
