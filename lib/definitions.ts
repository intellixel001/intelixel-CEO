import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(6, { message: "Be at least 6 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: 'Contain at least one special character.',
    // })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(6, { message: "Be at least 6 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: 'Contain at least one special character.',
    // })
    .trim(),
});

// Schema for form validation
export const meetingSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(3, "Valid Name is required"),
  country: z.string().min(1, "Country is required"),
  businessField: z.string().min(1, "Business field is required"),
  social: z.string().optional(),
  message: z.string().min(5, "Write a valid message"),
});

export const ContactUsSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  message: z.string().min(6, "Message must be at least 6 characters long"),
});

export const AffiliateRegisterSchema = z.object({
  firstName: z.string().min(2, "Provide a valid name"),
  lastName: z.string().min(2, "Provide a valid name"),
  email: z.string().email("Invalid email address"),
  social: z
    .string()
    .regex(
      /^(https?:\/\/)?(www\.)/,
      "Please provide a valid social media link"
    ),
  phone: z.string().min(8, "Phone number is required"),
  isChecked: z.literal("on", {
    errorMap: () => ({ message: "Accept our terms and conditions" }),
  }),
  paymentMethod: z.enum(["bkash", "nagad"], {
    errorMap: () => ({ message: "Invalid payment method" }),
  })
});
