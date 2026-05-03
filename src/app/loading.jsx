export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* DaisyUI Loading Spinner */}
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
        <p className="text-slate-500 font-medium animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
