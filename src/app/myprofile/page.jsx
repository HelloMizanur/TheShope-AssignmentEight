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
    // 'pt-24' add kora hoyeche navbar theke gap rakhar jonno
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* LEFT SIDE: User Profile Card */}
          <div className="bg-[#2a2a2a] rounded-3xl p-8 border border-gray-800 flex flex-col items-center text-center shadow-2xl">
            <div className="avatar placeholder mb-6">
              <div className="bg-white text-[#4a4a8a] w-32 h-32 rounded-full ring-4 ring-[#7c66dc]/20">
                <span className="text-4xl font-bold">
                  {accountInfo.avatarInitials}
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-1">{accountInfo.fullName}</h2>
            <p className="text-gray-400 text-sm mb-8">{accountInfo.email}</p>
            <button className="btn btn-ghost bg-gray-100/10 hover:bg-gray-100/20 text-white w-full rounded-xl capitalize font-normal border-none">
              Update Info
            </button>
          </div>

          {/* RIGHT SIDE: Account Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Account Information
              </h3>
              <p className="text-gray-500 text-sm">
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
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">
                    {item.label}
                  </span>
                  <div className="bg-[#2a2a2a] py-4 px-6 rounded-2xl border border-gray-800 w-full sm:w-[70%] text-right shadow-inner">
                    <span className="text-gray-200 font-medium">
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
