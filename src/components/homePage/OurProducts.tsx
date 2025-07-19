"use client";

import { useState } from "react";
import Image from "next/image";

import leafImg from "@/assets/images/leaf.png";
import { useGetAllCategoriesQuery, useGetProductsQuery } from "@/redux/services/productApi";

import ProductCard from "../products/ProductCard";
import ProductSkeleton from "../products/ProductSkeleton";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import Badge from "../shared/Badge";
import Section from "../shared/Section";



const count = 8;

const tabList = [
  { label: "All", key: "all" },
  { label: "Fruits", key: "fruits" },
  { label: "Vegetables", key: "vegetables" },
  { label: "Salad", key: "salad" },
];

export default function OurProducts() {
  const [active, setActive] = useState(tabList[0].key);
  const [visible, setVisible] = useState(count);

  const { data: productsRes, isLoading } = useGetProductsQuery();
  const { data: categoriesRes } = useGetAllCategoriesQuery();

  const categoryLookup = new Map(
    (categoriesRes?.data ?? []).map(({ id, categoryName }) => [id, categoryName])
  );

  const productsWithCategory = (productsRes?.data ?? [])
    .slice(0, visible)
    .map((p) => ({
      ...p,
      categoryName: categoryLookup.get(p.categoryId) ?? "Unknown",
    }));

  const filteredProducts =
    active === "all"
      ? productsWithCategory
      : productsWithCategory.filter(
        (p) => p.categoryName.toLowerCase() === active
      );

  const handleToggle = () => {
    setVisible((prev) =>
      prev === count ? productsRes?.data.length ?? count : count
    );
  };

  return (
    <Section id="shop" className="relative z-10">
      <Container className="relative py-10 lg:py-24">
        <Image
          src={leafImg}
          alt="Leaf decoration"
          className="absolute left-0 top-3/4 w-16 h-auto block"
        />
        <Image
          src={leafImg}
          alt="Leaf decoration"
          className="absolute right-0 top-1/4 w-16 h-auto block -rotate-45"
        />
      </Container>

      <Container size="xs" className="text-center space-y-4">
        <Badge>Our Products</Badge>
        <Heading as="h2" size="h2" className="tracking-tight">
          Our Fresh Products
        </Heading>
        <p className="text-sm max-w-xl mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
        </p>

        <ul className="flex justify-between gap-1 max-w-md mx-auto">
          {tabList.map(({ label, key }) => (
            <li key={key}>
              <Button
                size="sm"
                variant="success"
                tone={active === key ? "default" : "outline"}
                onClick={() => setActive(key)}
              >
                {label}
              </Button>
            </li>
          ))}
        </ul>
      </Container>

      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <Container>
          <div className="grid mt-6 lg:mt-8 gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {filteredProducts.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>

          <div className="mt-6 lg:mt-8 text-center">
            <Button
              variant="primary"
              tone="outline"
              onClick={handleToggle}
              disabled={!productsWithCategory.length}
            >
              {visible === count ? "See all products" : "See less products"}
            </Button>
          </div>
        </Container>
      )}
    </Section>
  );
}
