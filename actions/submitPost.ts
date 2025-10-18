"use server";

export async function submitPost(FormState, formData: FormData) {
  try {
    // Send as FormData instead of JSON
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/create-post`,
      {
        method: "POST",
        body: formData,
      }
    );
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error submitting post" };
  }
}
