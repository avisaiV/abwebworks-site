export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-stone-200/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-stone-600 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} AB WebWorks</p>
        <p className="text-xs">
          Built on Next.js • Hosted on Vercel • Designed to convert
        </p>
      </div>
    </footer>
  );
}
