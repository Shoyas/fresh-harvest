"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import useAuthGuard from "@/hooks/useAuthGuard";
import { addToCart, showAuthForm } from "@/redux/slices/appSlice";
import { Product } from "@/types/product";
import Button from "../shared/Button";


type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();
  const { user } = useAuthGuard();

  const isAuthenticated = Boolean(user);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      dispatch(showAuthForm());
      return;
    }

    dispatch(addToCart({ productId: product.id }));
  };

  return (
    <div className="group relative overflow-hidden rounded-[1.25rem] px-4 pt-2.5 pb-5 shadow-lg/5 space-y-3">
      <div className="mx-auto h-[208px] w-[258px] overflow-hidden rounded-2xl bg-color-gray-20">
        <Image
          src={product.images[0]}
          alt={product.productName}
          width={258}
          height={208}
          className="size-full object-cover duration-300 group-hover:scale-110"
        />
      </div>

      <div className="text-center">
        <h3 className="font-rubik text-body-2 font-medium">
          <Link
            href={`/product/${product.id}`}
            className="after:absolute after:inset-0"
          >
            {product.productName}
          </Link>
        </h3>

        <span className="mt-2 block text-body-2 text-color-gray-100">
          ${product.price}/kg
        </span>

        <Button
          onClick={handleAddToCart}
          variant="primary"
          tone="outline"
          size="sm"
          className="relative z-10 mt-3 w-full border-color-gray-50 text-color-black"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
