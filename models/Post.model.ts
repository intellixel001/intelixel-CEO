import mongoose, { Document, Schema } from "mongoose";

interface Post extends Document {
  id: number;
  title: string;
  short_desc: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
  content?: string;
  under_picture?: string;
  title1: string;
  title1_desc: string;
  title2?: string;
  title2_desc?: string;
  title3?: string;
  title3_desc?: string;
  title4?: string;
  title4_desc?: string;
  title5?: string;
  title5_desc?: string;
  note?: string;
  author_name: string;
  author_image: string;
  author_title: string;
  author_desc: string;
  author_socials?: {
    platform: string;
    url: string;
  }[];
}

const PostSchema: Schema<Post> = new Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    short_desc: { type: String, required: true },
    readTime: { type: String, required: true },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
    image: { type: String, required: true },
    content: { type: String },
    under_picture: { type: String, default: "" },
    title1: { type: String, required: true },
    title1_desc: { type: String, default: "" },
    title2: { type: String, default: "" },
    title2_desc: { type: String, default: "" },
    title3: { type: String, default: "" },
    title3_desc: { type: String, default: "" },
    title4: { type: String, default: "" },
    title4_desc: { type: String, default: "" },
    title5: { type: String, default: "" },
    title5_desc: { type: String, default: "" },
    note: { type: String, default: "" },
    author_name: { type: String, required: true },
    author_image: { type: String, required: true },
    author_title: { type: String, required: true },
    author_desc: { type: String, required: true },
    author_socials: {
      type: [
        {
          platform: { type: String },
          url: { type: String },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const PostModel =
  (mongoose.models.Post as mongoose.Model<Post>) ||
  mongoose.model<Post>("Post", PostSchema);

export default PostModel;
