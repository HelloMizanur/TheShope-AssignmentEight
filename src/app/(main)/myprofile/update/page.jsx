"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User, Image as ImageIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";

const UpdatePage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Updating your information...");

    try {
      const { data: res, error } = await authClient.updateUser({
        name: data.name,
        image: data.image,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile", {
          id: toastId,
        });
      } else {
        toast.success("Profile updated successfully!", { id: toastId });
        router.push("/myprofile"); // আপডেট হয়ে গেলে প্রোফাইল পেজে ফেরত যাবে
        router.refresh(); // ডেটা রিফ্রেশ করার জন্য
      }
    } catch (err) {
      toast.error("An unexpected error occurred", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        {/* Back Button */}
        <Link
          href="/myprofile"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to Profile
        </Link>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Update Profile
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Change your display name or profile picture.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider flex items-center gap-2">
                <User size={14} /> Full Name
              </span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter new name"
              className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
              required
            />
          </div>

          {/* Image URL Input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider flex items-center gap-2">
                <ImageIcon size={14} /> Profile Image URL
              </span>
            </label>
            <input
              {...register("image")}
              type="url"
              placeholder="https://example.com/new-photo.jpg"
              className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              disabled={isSubmitting}
              className="btn btn-primary w-full rounded-xl bg-blue-600 border-none hover:bg-blue-700 text-white capitalize font-bold text-lg h-14 shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:bg-slate-300"
            >
              {isSubmitting ? "Updating..." : "Update Information"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
