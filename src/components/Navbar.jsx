import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white shadow">
      <h1 className="font-bold text-xl">NextAuth Shop</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
