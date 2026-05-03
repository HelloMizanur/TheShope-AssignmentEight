import React from "react";

export default function AccountPage() {
  const accountInfo = {
    fullName: "John Doe",
    email: "john@example.com",
    memberSince: "January 2025",
    authProvider: "Email / Password",
    avatarInitials: "JD",
  };

  return (
    // Changed bg to a soft off-white and text to slate-900
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* LEFT SIDE: User Profile Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col items-center text-center shadow-sm">
            <div className="avatar placeholder mb-6">
              {/* Avatar now has a subtle primary-colored background */}
              <div className="bg-blue-50 text-blue-600 w-32 h-32 rounded-full ring-4 ring-blue-100">
                <span className="text-4xl font-bold">
                  {accountInfo.avatarInitials}
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-1 text-slate-800">
              {accountInfo.fullName}
            </h2>
            <p className="text-slate-500 text-sm mb-8">{accountInfo.email}</p>
            <button className="btn btn-ghost bg-slate-100 hover:bg-slate-200 text-slate-700 w-full rounded-xl capitalize font-medium border-none transition-colors">
              Update Info
            </button>
          </div>

          {/* RIGHT SIDE: Account Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">
                Account Information
              </h3>
              <p className="text-slate-500 text-sm">
                Review and manage your personal account details.
              </p>
            </div>

            {/* Information Rows */}
            <div className="space-y-4">
              {[
                { label: "Full name", value: accountInfo.fullName },
                { label: "Email", value: accountInfo.email },
                { label: "Member since", value: accountInfo.memberSince },
                { label: "Auth provider", value: accountInfo.authProvider },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
                >
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">
                    {item.label}
                  </span>
                  {/* Row backgrounds changed to white with light borders */}
                  <div className="bg-white py-4 px-6 rounded-2xl border border-slate-200 w-full sm:w-[70%] sm:text-right shadow-sm">
                    <span className="text-slate-700 font-semibold">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
