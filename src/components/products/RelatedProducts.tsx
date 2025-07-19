"use client";

import { useGetProductsQuery } from "@/redux/services/productApi";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import Section from "../shared/Section";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";


export default function RelatedProducts() {
  const { data, isLoading } = useGetProductsQuery();
  const products: Product[] = data?.data ?? [];

  const relatedProducts = selectRandomProducts(products, 4);

  return (
    <Section>
      <Container size="xs" className="text-center space-y-4">
        <Badge>Our Products</Badge>
        <Heading as="h2" size="h2" className="tracking-tight">
          Related Products
        </Heading>
        <p className="text-sm text-color-gray-100 max-w-xl mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </Container>

      {isLoading ? (
        <ProductSkeleton length={4} />
      ) : (
        <Container>
          {relatedProducts.length === 0 ? (
            <p className="text-center py-12 text-color-gray-100">No products found</p>
          ) : (
            <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 lg:mt-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </Container>
      )}
    </Section>
  );
}

function selectRandomProducts(products: Product[], count: number): Product[] {
  if (products.length <= count) return products;

  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
