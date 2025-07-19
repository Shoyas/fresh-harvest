import ProductDetail from "@/components/products/ProductDetail";


type ProductDetailPage = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPage) {
  const { id } = await params;
  return <ProductDetail productId={id} />;
}
