export default function AuthLayout({ children }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-slate-50">
      <div className="w-full">{children}</div>
    </section>
  );
}
