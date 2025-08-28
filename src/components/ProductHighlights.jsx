
import { mockProducts } from "../../lib/mockProducts";
import ProductCard from "./ProductCard";

export default function ProductHighlights() {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {mockProducts.slice(0, 3).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
