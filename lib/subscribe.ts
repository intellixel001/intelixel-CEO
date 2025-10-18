"use server";
import dbConnect from "@/actions/dbConnect";
import SubscribeModel from "@/models/Subscribe";

export async function subscribe(prevState, formData: FormData) {
  await dbConnect();
  const email = formData.get("email");
  try {
    const isSubscribed = await SubscribeModel.findOne({
      email,
    });
    console.log("is subscribed", isSubscribed);
    if (isSubscribed) {
      return { success: false, message: "You are already subscribed" };
    }
    const subscribed = await SubscribeModel.create({
      email,
    });
    return {
      success: true,
      message: "Subscribed to news letter.",
    };
  } catch (error) {
    console.log("Error subscribing to news letter", error);
    return {
      success: false,
      message: "Error subscribing to news letter",
    };
  }
}
