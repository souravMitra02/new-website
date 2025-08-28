import { mockProducts } from "../../../../lib/mockProducts";


export default function ProductDetails({ params }) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return <h1 className="text-center mt-10 text-2xl">Product not found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="font-bold text-lg mb-4">${product.price}</p>
      </div>
    </div>
  );
}
