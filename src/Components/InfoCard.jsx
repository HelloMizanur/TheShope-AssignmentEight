import {
  User,
  Mail,
  Calendar,
  ShieldCheck,
  BadgeCheck,
  PencilLine,
} from "lucide-react";

export default function InfoCard({ icon, label, value, isCode, isVerified }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:border-blue-100 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <p
          className={`font-semibold text-slate-700 ${isCode ? "text-xs font-mono break-all" : "text-base"}`}
        >
          {value}
        </p>
        {isVerified !== undefined && (
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isVerified ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}`}
          >
            {isVerified ? "VERIFIED" : "UNVERIFIED"}
          </span>
        )}
      </div>
    </div>
  );
}
