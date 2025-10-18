"use client";
import { submitPost } from "@/actions/submitPost";
import { useActionState, useState } from "react";
import {
  FiBookmark,
  FiClock,
  FiPlus,
  FiTrash2,
  FiUpload,
} from "react-icons/fi";

interface SocialMedia {
  platform: string;
  url: string;
}

export default function PostForm() {
  const [state, action, pending] = useActionState(submitPost, {
    success: false,
    message: "",
    errors: {},
  });
  const [socialLinks, setSocialLinks] = useState<SocialMedia[]>([
    { platform: "", url: "" },
  ]);

  const addSocialField = () => {
    if (socialLinks.length < 3) {
      setSocialLinks([...socialLinks, { platform: "", url: "" }]);
    }
  };

  const removeSocialField = (index: number) => {
    const newLinks = [...socialLinks];
    newLinks.splice(index, 1);
    setSocialLinks(newLinks);
  };

  const handleSocialChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedSocialLinks = [...socialLinks];

    if (name.startsWith("platform")) {
      updatedSocialLinks[index].platform = value;
    } else if (name.startsWith("url")) {
      updatedSocialLinks[index].url = value;
    }

    setSocialLinks(updatedSocialLinks);
  };

  // Improved error handling function
  const getError = (field: string) => {
    if (!state?.errors) return null;

    // Handle nested fields (like author_social)
    if (field.includes(".")) {
      const [parent, child, index] = field.split(".");
      if (state.errors[parent] && Array.isArray(state.errors[parent])) {
        const arr = state.errors[parent] as any[];
        if (arr[index] && arr[index][child]) {
          return arr[index][child];
        }
      }
      return null;
    }

    return state.errors[field]?._errors?.[0] || state.errors[field]?.message;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 p-6">
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Create New Post
        </h1>

        {/* Success/Error Message */}
        {state?.message && (
          <div
            className={`mb-6 p-4 rounded-lg border ${
              state.success
                ? "bg-green-800/50 border-green-500"
                : "bg-red-800/50 border-red-500"
            }`}
          >
            {state.message}
          </div>
        )}

        {/* Display general form errors */}
        {state?.errors?.formErrors && (
          <div className="mb-6 p-4 bg-red-800/50 border border-red-500 rounded-lg">
            <ul className="list-disc pl-5">
              {state.errors.formErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form action={action} className="space-y-6">
          {/* Basic Post Info */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <FiBookmark className="text-blue-400" /> Post Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {getError("title") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("title")}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Short Description
                </label>
                <textarea
                  name="short_desc"
                  rows={3}
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {getError("short_desc") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("short_desc")}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Read Time
                </label>
                <div className="relative">
                  <select
                    name="readTime"
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option className="text-center" value="">
                      Select reading time
                    </option>
                    <option className="text-center" value="1 min">
                      1 min
                    </option>
                    <option className="text-center" value="2 min">
                      2 min
                    </option>
                    <option className="text-center" value="3 min">
                      3 min
                    </option>
                    <option className="text-center" value="5 min">
                      5 min
                    </option>
                    <option className="text-center" value="7 min">
                      7 min
                    </option>
                    <option className="text-center" value="10 min">
                      10 min
                    </option>
                  </select>
                  <FiClock className="absolute left-2 top-3 text-gray-400" />
                </div>
                {getError("readTime") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("readTime")}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option className="text-center" value="">
                    Select a category
                  </option>
                  <option className="text-center" value="Tech">
                    Tech
                  </option>
                  <option className="text-center" value="Programming">
                    Programming
                  </option>
                  <option className="text-center" value="Development">
                    Development
                  </option>
                  <option className="text-center" value="Design or UI/UX">
                    Design
                  </option>
                  <option className="text-center" value="Startup">
                    Startup
                  </option>
                  <option className="text-center" value="Tech-Trends">
                    Tech Trends
                  </option>
                  <option className="text-center" value="Branding">
                    Branding
                  </option>
                  <option className="text-center" value="AI-ML">
                    AI & ML
                  </option>
                  <option className="text-center" value="Cloud">
                    Cloud & Hosting
                  </option>
                </select>
                {getError("category") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("category")}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="featured"
                  className="h-4 w-4 text-blue-500 rounded bg-[#2a2a2a] border-gray-700 focus:ring-blue-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-300">
                  Featured Post
                </label>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Main Image
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="image"
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 pl-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  />
                  <FiUpload className="absolute left-2 top-3 text-gray-400" />
                </div>
                {getError("image") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("image")}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Main Content
                </label>
                <textarea
                  name="content"
                  rows={5}
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {getError("content") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("content")}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Section Titles */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Section Titles
            </h2>

            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="mb-4 last:mb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      Title {num}
                    </label>
                    <input
                      type="text"
                      name={`title${num}`}
                      className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                    />
                    {getError(`title${num}`) && (
                      <p className="mt-1 text-sm text-red-500">
                        {getError(`title${num}`)}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      Title {num} Description
                    </label>
                    <textarea
                      name={`title${num}_desc`}
                      rows={2}
                      className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                    />
                    {getError(`title${num}_desc`) && (
                      <p className="mt-1 text-sm text-red-500">
                        {getError(`title${num}_desc`)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Note
              </label>
              <textarea
                name="note"
                rows={2}
                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Author Information */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Author Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Author Name
                </label>
                <input
                  type="text"
                  name="author_name"
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {getError("author_name") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("author_name")}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Author Title
                </label>
                <input
                  type="text"
                  name="author_title"
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {getError("author_title") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("author_title")}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Author Image
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="author_image"
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 pl-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  />
                  <FiUpload className="absolute left-2 top-3 text-gray-400" />
                </div>
                {getError("author_image") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("author_image")}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Author Description
                </label>
                <textarea
                  name="author_desc"
                  rows={3}
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {getError("author_desc") && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("author_desc")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-white">
                  Social Media Links
                </h3>
                <button
                  type="button"
                  onClick={addSocialField}
                  disabled={socialLinks.length >= 3}
                  className={`flex items-center gap-1 text-sm px-3 py-1 rounded ${
                    socialLinks.length >= 3
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <FiPlus size={14} /> Add Social
                </button>
              </div>

              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-2 items-end"
                >
                  <div className="md:col-span-5">
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      Platform
                    </label>
                    <select
                      name={`platform-${index}`}
                      value={social.platform}
                      onChange={(e) => handleSocialChange(index, e)}
                      className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    >
                      <option value="">Select a platform</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Instagram">Instagram</option>
                      <option value="YouTube">YouTube</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Snapchat">Snapchat</option>
                      <option value="Pinterest">Pinterest</option>
                      <option value="Reddit">Reddit</option>
                      <option value="GitHub">GitHub</option>
                      <option value="Dribbble">Dribbble</option>
                      <option value="Behance">Behance</option>
                      <option value="Other">Other</option>
                    </select>
                    {getError(`author_social.${index}.platform`) && (
                      <p className="mt-1 text-sm text-red-500">
                        {getError(`author_social.${index}.platform`)}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-6">
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      URL
                    </label>
                    <input
                      type="text"
                      name={`url-${index}`}
                      value={social.url}
                      onChange={(e) => handleSocialChange(index, e)}
                      placeholder="https://..."
                      className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                    />
                    {getError(`author_social.${index}.url`) && (
                      <p className="mt-1 text-sm text-red-500">
                        {getError(`author_social.${index}.url`)}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-1">
                    <button
                      type="button"
                      onClick={() => removeSocialField(index)}
                      className="w-full bg-red-600 hover:bg-red-700 p-2 rounded flex justify-center"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {getError("author_social") &&
                typeof getError("author_social") === "string" && (
                  <p className="mt-1 text-sm text-red-500">
                    {getError("author_social")}
                  </p>
                )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium text-white disabled:bg-blue-800 disabled:cursor-not-allowed"
              disabled={pending}
            >
              {pending ? "Saving..." : "Save Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
