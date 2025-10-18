"use server";

import dbConnect from "@/actions/dbConnect";
import RegisterAffiliateModel from "@/models/RegisterAffiliate";
import { AffiliateRegisterSchema } from "./definitions";
import { sendAffiliateRegistrationEmailToAdmin } from "./getAffiliateEmail";
import { sendAffiliateConfirmationEmail } from "./sendAffiliateEmail";

export async function affiliateRegister(formState: any, formData: FormData) {
  await dbConnect();
  // Convert FormData to a plain object
  const rawFormData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    social: formData.get("social") as string,
    phone: formData.get("phone") as string,
    isChecked: formData.get("isChecked") as string,
    paymentMethod: formData.get("paymentMethod") as string,
  };

  // Validate the data
  const parsed = AffiliateRegisterSchema.safeParse(rawFormData);

  if (!parsed.success) {
    console.log("Validation errors:", parsed.error.flatten());
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Failed to validate form data",
    };
  }

  try {
    const data = parsed.data;
    const isPresent = await RegisterAffiliateModel.findOne({
      email: data.email,
    });
    if (isPresent) {
      return {
        success: true,
        message: "You are already affiliated with us.",
      };
    }
    const register = await RegisterAffiliateModel.create(data);

    // Send confirmation email to the affiliate
    await sendAffiliateConfirmationEmail({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      affiliateId: register._id.toString(),
    });

    // Send notification email to admin
    await sendAffiliateRegistrationEmailToAdmin({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      affiliateId: register._id.toString(),
      social: data.social,
      phone: data.phone,
      paymentMethod: data.paymentMethod,
    });

    return {
      success: true,
      message:
        "You have been successfully registered to our affiliate program. Check your email to get your ID",
    };
  } catch (error) {
    console.error("Error registering affiliate:", error);
    return { success: false, message: "Failed to register affiliate" };
  }
}
