import { z } from "zod";

const authorSocialSchema = z.object({
  platform: z.string(),
  url: z
    .string()
    .url()
    .refine((val) => val.startsWith("https://"), {
      message: "URL must start with https://",
    }),
});

const imageSchema = z.custom<File>(
  (file) => {
    if (!file || typeof file !== "object" || !(file instanceof File))
      return false;

    const validTypes = ["image/png", "image/jpeg", "image/webp", "image/jpg"];
    const maxSize = 10 * 1024 * 1024; // 5 MB

    return validTypes.includes(file.type) && file.size <= maxSize;
  },
  {
    message:
      "Image not present OR Invalid image file. Must be PNG/JPEG/JPG/WEBP and less than 5MB.",
  }
);

export const postSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  short_desc: z.string().min(1, { message: "Short description is required" }),
  readTime: z.string().min(1, { message: "Read time is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  featured: z.boolean().default(false),
  image: imageSchema,
  content: z.string().optional(),
  under_picture: z.string().optional(),
  title1: z.string().min(1, { message: "Title 1 is required" }),
  title1_desc: z
    .string()
    .min(1, { message: "Title 1 description is required" }),
  title2: z.string().optional(),
  title2_desc: z.string().optional(),
  title3: z.string().optional(),
  title3_desc: z.string().optional(),
  title4: z.string().optional(),
  title4_desc: z.string().optional(),
  title5: z.string().optional(),
  title5_desc: z.string().optional(),
  note: z.string().optional(),
  author_name: z.string().min(1, { message: "Author name is required" }),
  author_title: z.string().min(1, { message: "Author title is required" }),
  author_desc: z
    .string()
    .min(1, { message: "Author desc is required" })
    .max(200, {
      message: "Author desc must be less than 150 characters.",
    }),
  author_image: imageSchema,
  author_socials: z
    .array(authorSocialSchema)
    .max(3, { message: "You can add up to 3 social links only." })
    .optional()
    .default([]),
});
