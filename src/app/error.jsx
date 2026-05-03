"use client";

import NavLink from "@/Components/Shared/NavLink";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center">
        <div className="text-red-500 text-5xl mb-4 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Something went wrong!
        </h2>
        <p className="text-slate-500 mb-8 text-sm">
          We encountered an unexpected error. Please try again or contact
          support.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="btn btn-primary bg-blue-600 border-none rounded-xl text-white font-bold h-12"
          >
            Try Again
          </button>
          <NavLink
            href={"/"}
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Go back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
