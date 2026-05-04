import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { redirect } from "next/navigation";
import { Mail, User, Calendar, ShieldCheck } from "lucide-react";
import InfoCard from "@/Components/InfoCard";
import Link from "next/link";

export default async function AccountPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/login");
  }

  const { user } = session;

  const avatarInitials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 items-start">
          {/* LEFT SIDE: User Profile Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col items-center text-center shadow-sm sticky top-24">
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full ring-4 ring-blue-50 overflow-hidden bg-blue-50 flex items-center justify-center">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-blue-600">
                    {avatarInitials}
                  </span>
                )}
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-1 text-slate-800">
              {user.name}
            </h2>
            <p className="text-slate-500 text-sm mb-6 flex items-center gap-1">
              <Mail className="w-4 h-4" /> {user.email}
            </p>

            <div className="w-full pt-6 border-t border-slate-100">
              <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3 rounded-xl transition-all font-medium">
                <Link href={"/myprofile/update"}>Edit Profile</Link>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Account Information
              </h3>
              <p className="text-slate-500">
                Manage your personal information and security settings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard
                icon={<User className="w-5 h-5 text-blue-500" />}
                label="Full Name"
                value={user.name}
              />
              <InfoCard
                icon={<Mail className="w-5 h-5 text-emerald-500" />}
                label="Email Address"
                value={user.email}
              />
              <InfoCard
                icon={<Calendar className="w-5 h-5 text-orange-500" />}
                label="Member Since"
                value={format(new Date(user.createdAt), "MMMM dd, yyyy")}
              />
              <InfoCard
                icon={<ShieldCheck className="w-5 h-5 text-purple-500" />}
                label="User ID"
                value={user.id}
                isCode
              />
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Account Security</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Your account was last updated on{" "}
                    {format(new Date(user.updatedAt), "PPP")}. Make sure to
                    enable two-factor authentication for better security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
