"use server";

import { FormState, SignupFormSchema } from "@/lib/definitions";
import bcrypt from "bcrypt";
import UserModel from "@/models/Signup.model";
import dbConnect from "./dbConnect";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await dbConnect();

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

    // Create the user in the database
    const createdUser = await UserModel.create({
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      password: hashedPassword,
    });

    if (!createdUser) {
      return {
        success: false,
        message: "Internal server error. Could not save user to db.",
      };
    }

    // Succeed
    return { success: true, message: "User created successfully" };
  } catch (err) {
    console.log("Internal server error : ", err);
    return {
      success: false,
      message: "Internal server error",
    };
  }
}
