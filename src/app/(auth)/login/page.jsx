"use client";
import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        {/* Header Section */}
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
              name="email"
              placeholder="name@example.com"
              className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control w-full">
            <div className="flex justify-between items-center px-1">
              <label className="label">
                <span className="label-text font-semibold text-slate-600 uppercase text-xs tracking-wider">
                  Password
                </span>
              </label>
            </div>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
              required
            />
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
