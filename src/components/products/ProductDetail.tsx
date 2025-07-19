"use client";

import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  LucideHeart,
  LucideMinus,
  LucidePlus,
  LucideShoppingCart,
  LucideStar,
} from "lucide-react";

import useAuthGuard from "@/hooks/useAuthGuard";
import {
  useGetCategoryQuery,
  useGetProductQuery,
} from "@/redux/services/productApi";
import { addToCart, showAuthForm } from "@/redux/slices/appSlice";
import { Product } from "@/types/product";


import ProductDetailSkeleton from "./ProductDetailSkeleton";
import RelatedProducts from "./RelatedProducts";
import Button from "../shared/Button";
import Section from "../shared/Section";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";

export default function ProductDetail({ productId }: { productId: string }) {
  const { data, isLoading } = useGetProductQuery(productId);
  const [quantity, setQuantity] = useState(1);
  const product: Product = data?.data ?? ({} as Product);

  if (isLoading) {
    return (
      <Section className="py-8">
        <ProductDetailSkeleton />
      </Section>
    );
  }

  return (
    <Section className="py-8">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductImages images={product.images} alt={product.productName} />
          <div className="flex flex-col justify-between">
            <ProductInfo product={product} />
            <div className="mt-10">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <AddToCartActions
                productId={product.id}
                quantity={quantity}
                resetQuantity={() => setQuantity(1)}
              />
            </div>
          </div>
        </div>

        <ProductTabs product={product} />
      </Container>

      <div className="py-16 lg:py-[7.5rem]">
        <RelatedProducts />
      </div>
    </Section>
  );
}

function ProductImages({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="mx-auto h-full max-h-96 w-full max-w-2xl overflow-hidden rounded border border-color-gray-50 bg-color-gray-20 lg:max-h-[570px] lg:min-h-[550px]">
      <Image
        src={images?.[0]}
        alt={alt}
        width={500}
        height={500}
        className="size-full object-contain"
      />
    </div>
  );
}

function ProductInfo({ product }: { product: Product }) {
  const { data } = useGetCategoryQuery(product.categoryId);
  const categoryName = data?.data?.categoryName ?? ".....";

  return (
    <div className="space-y-4">
      <Badge className="capitalize">{categoryName}</Badge>
      <Heading as="h2" size="h2">
        {product.productName}
      </Heading>
      <Rating />
      <div className="text-heading-4 font-rubik font-semibold text-color-primary">
        ${product.price}/kg
      </div>
      <p className="text-body-2 leading-snug text-color-gray-100">
        {product.description}
      </p>
    </div>
  );
}

function QuantitySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) {
  const decrement = () => {
    if (value > 1) onChange(value - 1);
  };

  const increment = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex items-center">
      <span className="mr-4 font-rubik text-body-2 font-semibold text-color-black">
        Quantity
      </span>
      <div className="mr-2 inline-flex overflow-hidden rounded border border-color-gray-50">
        <Button onClick={decrement} size="icon" variant="secondary" tone="link" className="focus:ring-transparent [&>svg]:size-3.5">
          <LucideMinus />
        </Button>
        <span className="size-[2.6875rem] flex items-center justify-center border-x border-color-gray-50 font-rubik font-semibold text-[#343434]">
          {value}
        </span>
        <Button onClick={increment} size="icon" variant="secondary" tone="link" className="focus:ring-transparent [&>svg]:size-3.5">
          <LucidePlus />
        </Button>
      </div>
      /kg
    </div>
  );
}

function AddToCartActions({
  productId,
  quantity,
  resetQuantity,
}: {
  productId: string;
  quantity: number;
  resetQuantity: () => void;
}) {
  const dispatch = useDispatch();
  const { user } = useAuthGuard();

  const handleClick = () => {
    if (!user) return dispatch(showAuthForm());
    dispatch(addToCart({ productId, quantity }));
    resetQuantity();
  };

  return (
    <div className="mt-10 flex flex-col gap-5.5 md:flex-row [&>*]:flex-1">
      <Button variant="secondary">
        <LucideHeart className="fill-color-gray-50 stroke-color-gray-50" size={20} />
        Save as favorite
      </Button>
      <Button onClick={handleClick}>
        <LucideShoppingCart />
        Add to cart
      </Button>
    </div>
  );
}

function Rating() {
  return (
    <div className="flex items-center gap-2">
      <span className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <LucideStar key={i} className="fill-yellow-500 stroke-yellow-500" size={14} />
        ))}
      </span>
      <span className="ml-2 font-rubik text-body-2 font-medium text-color-gray-100">
        5.0 (1 review)
      </span>
    </div>
  );
}

function ProductTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<"description" | "reviews">("description");

  return (
    <div className="mt-16 max-w-[57.3rem]">
      <div className="space-x-6">
        <Button
          size="sm"
          variant="success"
          tone={tab === "description" ? "default" : "outline"}
          onClick={() => setTab("description")}
        >
          Description
        </Button>
        <Button
          size="sm"
          variant="success"
          tone={tab === "reviews" ? "default" : "outline"}
          onClick={() => setTab("reviews")}
        >
          Reviews (1)
        </Button>
      </div>
      <div className="mt-6 rounded-[24px] bg-color-gray-20 px-8 py-10 text-body-2 leading-snug">
        {tab === "description" ? (
          <p>{product.description}</p>
        ) : (
          <p>Reviews</p>
        )}
      </div>
    </div>
  );
}
