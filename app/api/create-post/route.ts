import dbConnect from "@/actions/dbConnect";
import { uploadToCloudinary } from "@/lib/uploadImage";
import PostModel from "@/models/Post.model";
import { postSchema } from "@/schemas/postSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const formData = await request.formData();

    // getting socials(formData: FormData): SocialMedia[] {
    function transformSocialFields(formData: FormData): SocialMedia[] {
      const socials: SocialMedia[] = [];

      for (let i = 0; i < 3; i++) {
        const platform = formData.get(`platform-${i}`)?.toString().trim();
        const url = formData.get(`url-${i}`)?.toString().trim();

        if (platform && url) {
          socials.push({ platform, url });
        }
      }

      return socials;
    }

    const parsedData = postSchema.safeParse({
      title: formData.get("title"),
      short_desc: formData.get("short_desc"),
      readTime: formData.get("readTime"),
      category: formData.get("category"),
      featured: formData.get("featured") === "on" ? true : false,
      image: formData.get("image"),
      content: formData.get("content"),
      title1: formData.get("title1"),
      title1_desc: formData.get("title1_desc"),
      title2: formData.get("title2"),
      title2_desc: formData.get("title2_desc"),
      title3: formData.get("title3"),
      title3_desc: formData.get("title3_desc"),
      title4: formData.get("title4"),
      title4_desc: formData.get("title4_desc"),
      title5: formData.get("title5"),
      title5_desc: formData.get("title5_desc"),
      note: formData.get("note"),
      author_name: formData.get("author_name"),
      author_title: formData.get("author_title"),
      author_image: formData.get("author_image"),
      author_desc: formData.get("author_desc"),
    });

    if (parsedData.success === false) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation Error",
          errors: parsedData.error.errors,
        },
        { status: 400 }
      );
    }

    parsedData.data.author_socials = await transformSocialFields(formData);
    console.log(parsedData.data);

    //if featured is true, other's should be false, only one post can be featured
    if (parsedData.data.featured) {
      const featuredPost = await PostModel.findOne({ featured: true });
      if (featuredPost) {
        await PostModel.updateMany({ featured: true }, { featured: false });
      }
    }

    // console.log("Parsed Data:", parsedData.data);

    // Upload images to Cloudinary
    const imageFile = parsedData.data.image as File;
    const authorImageFile = parsedData.data.author_image as File;

    let imageUrl = "";
    let authorImageUrl = "";

    // Upload main image if exists
    if (imageFile && imageFile.size > 0) {
      const result = await uploadToCloudinary(imageFile, "blog-posts");
      if (result instanceof Error) {
        return NextResponse.json(
          { success: false, message: result.message },
          { status: 400 }
        );
      }
      imageUrl = (result as any).secure_url;
    }

    // Upload author image if exists
    if (authorImageFile && authorImageFile.size > 0) {
      const result = await uploadToCloudinary(authorImageFile, "author-images");
      if (result instanceof Error) {
        return NextResponse.json(
          { success: false, message: result.message },
          { status: 400 }
        );
      }
      authorImageUrl = (result as any).secure_url;
    }

    // Save to database
    const id = (await PostModel.countDocuments({})) + 1;
    const submitPost = await PostModel.create({
      ...parsedData.data,
      id,
      image: imageUrl,
      author_image: authorImageUrl,
    });

    if (!submitPost) {
      return NextResponse.json(
        { success: false, message: "Post not created" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Post created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in API route:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

type SocialMedia = {
  platform: string;
  url: string;
};
