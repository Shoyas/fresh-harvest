"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  hash: string;
  children: React.ReactNode;
  className?: string;
  active: boolean;
  onClick?: () => void;
};

export default function ActiveLink({
  hash,
  children,
  className,
  active,
  ...props
}: ActiveLinkProps) {
  return (
    <Link
      {...props}
      href={hash}
      className={cn(
        "relative text-sm text-muted-foreground after:absolute after:w-3.5 after:h-[3px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-2 after:rounded-full after:bg-transparent hover:after:bg-color-green after:opacity-0 hover:after:opacity-100 transition-all",
        active
          ? "after:bg-color-green after:opacity-100"
          : "after:bg-transparent after:opacity-0",
        className
      )}
    >
      {children}
    </Link>
  );
}
