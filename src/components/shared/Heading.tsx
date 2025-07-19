import { cn } from "@/lib/utils";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: Variant;
  size?: Variant;
  weight?: "bold" | "medium";
};

const headingClasses = {
  h1: "text-heading-2 lg:text-heading-1",
  h2: "text-heading-4 lg:text-heading-2",
  h3: "text-heading-3",
  h4: "text-heading-4",
  h5: "text-heading-5",
  h6: "text-heading-6",
};

const weightClasses = {
  bold: "font-bold",
  medium: "font-medium",
};

export default function Heading({
  as = "h2",
  size = "h2",
  weight = "bold",
  className,
  children,
  ...props
}: HeadingProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "font-rubik tracking-custom text-color-black! leading-none",
        headingClasses[size],
        weightClasses[weight],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

Heading.displayName = "Heading";
