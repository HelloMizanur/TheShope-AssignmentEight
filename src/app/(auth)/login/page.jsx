"use client";
import React, { useState } from "react"; // useState যোগ করা হয়েছে
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // চোখের আইকন
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast"; // টোস্ট ইম্পোর্ট

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // পাসওয়ার্ড দেখার স্টেট
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const toastId = toast.loading("Checking your credentials...");

    try {
      const { data: res, error } = await authClient.signIn.email({
        email: email,
        password: password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(
          error.message || "Login failed. Please check your email/password.",
          { id: toastId },
        );
        console.log(error);
      } else {
        toast.success("Successfully logged in!", { id: toastId });
        console.log(res);
      }
    } catch (err) {
      toast.error("An unexpected error occurred", { id: toastId });
    }
  };
  const loginWithGmail = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Please enter your details to sign in.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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

          {/* Password Input with Show/Hide Toggle */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"} // এখানে টাইপ চেঞ্জ হচ্ছে
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

          {/* Login Button */}
          <div className="pt-2">
            <button className="btn btn-primary w-full rounded-xl bg-blue-600 border-none hover:bg-blue-700 text-white capitalize font-bold text-lg h-14 shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
              Log In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="divider text-slate-300 text-xs my-8 uppercase">
          Or continue with
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="btn btn-outline border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-800 capitalize font-medium w-full flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            onClick={loginWithGmail}
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-8 text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
