"use server";

import { meetingSchema } from "@/lib/definitions";
import { sendEmail } from "@/lib/sendMail";
import { z } from "zod";



 type FormState = {
  success?: boolean;
  errors?: {
    email?: string[];
    name?: string[];
    country?: string[];
    businessField?: string[];
    social?: string[];
    message?: string[];
  };
  message?: string; 
  data?: {
    email?: string;
    name?: string;
    country?: string;
    businessField?: string;
    social?: string;
    message?: string;
  }; 
};


export async function submitMeeting(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Validate form fields
  const result = meetingSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    country: formData.get("country"),
    businessField: formData.get("businessField"),
    social: formData.get("social"),
    message: formData.get("message"),
  });

  // If validation fails, return validation errors
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: "Validation failed. Please check your inputs.",
    };
  }

  // If validation succeeds, proceed with submission logic
  console.log("Meeting submitted:", result.data);

  await sendEmail(result.data)

  // Simulate a successful submission
  return {
    success: true,
    message: "Submitted successfully! We'll reach you through email within a few hours.",
  };
}