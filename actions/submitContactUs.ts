"use server";

import { ContactUsSchema } from "@/lib/definitions";
import { sendContact } from "@/lib/sendContact";

type FormState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
  data?: {
    email?: string;
    name?: string;
    message?: string;
  };
};

export async function submitContactUs(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const result = ContactUsSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: "Validation failed. Please check your inputs.",
    };
  }

  await sendContact(result.data);

  return {
    success: true,
    message:
      "Submitted successfully! We'll reach you through email within a few hours.",
  };
}
