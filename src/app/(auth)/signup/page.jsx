"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // পাসওয়ার্ড আইকন
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast"; // টোস্ট ইম্পোর্ট

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, picture, password } = data;

    const toastId = toast.loading("Creating your account...");

    try {
      const { data: res, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image: picture,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Sign up failed! Please try again.", {
          id: toastId,
        });
        console.log(error);
      } else {
        toast.success("Account created successfully! Welcome.", {
          id: toastId,
        });
        console.log(res);
      }
    } catch (err) {
      toast.error("Something went wrong. Please check your connection.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Join us today! Please enter your details.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider">
                Full Name
              </span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider">
                Email Address
              </span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="name@example.com"
              className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
              required
            />
          </div>

          {/* Profile Image URL */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider">
                Profile Image URL
              </span>
            </label>
            <input
              {...register("picture")}
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="pt-2">
            <button
              disabled={isSubmitting}
              className="btn btn-primary w-full rounded-xl bg-blue-600 border-none hover:bg-blue-700 text-white capitalize font-bold text-lg h-14 shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:bg-slate-300"
            >
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </button>
          </div>
        </form>

        <div className="divider text-slate-300 text-xs my-8 uppercase">
          Or continue with
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="btn btn-outline border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-800 capitalize font-medium w-full flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center mt-8 text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-bold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
