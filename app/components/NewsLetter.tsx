'use client'

import { subscribe } from "@/lib/subscribe";
import { useActionState } from "react";

export default function NewsLetter() {
  const [state, formAction, isPending] = useActionState(subscribe, undefined);

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white">
        Subscribe to Our Newsletter
      </h4>
      <form action={formAction} className="flex flex-col space-y-3">
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 text-sm sm:text-base bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-800"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
          disabled={isPending} // Disable button during form submission
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      
      {/* Display error or success message */}
      {state?.message && (
        <div
          className={`mt-4 p-3 text-center text-sm rounded-lg ${
            state.success ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {state.message}
        </div>
      )}
    </div>
  );
}
