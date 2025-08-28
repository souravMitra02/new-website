import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="font-bold text-xl">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="text-blue-600 mt-3 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
