"use client";

import { signup } from "@/actions/auth";
import { useActionState } from "react";

export function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        action={action}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign Up
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
          {state?.errors?.name && (
            <p className="text-sm text-red-400 mt-1">{state.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-400 mt-1">{state.errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
          {state?.errors?.password && (
            <div className="mt-2 text-sm text-red-400">
              <p>Password must:</p>
              <ul className="list-disc pl-5">
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {pending ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}