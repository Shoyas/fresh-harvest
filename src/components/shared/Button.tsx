import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "success";
type Tone = "default" | "outline" | "link";
type Weight = "bold" | "medium";
type Size = "sm" | "lg" | "icon";
type Shape = "default" | "pill";

const buttonVariantClasses: Record<Variant, Record<Tone, string>> = {
  primary: {
    default: "bg-color-primary text-white hover:bg-color-primary/80",
    outline:
      "border border-color-primary text-color-primary hover:bg-color-primary hover:text-white",
    link: "text-color-primary hover:text-color-primary/80",
  },
  secondary: {
    default: "bg-color-gray-20 text-color-gray-100 hover:opacity-90",
    outline:
      "border border-color-gray-100 text-color-black hover:bg-color-gray-20 hover:text-color-black",
    link: "bg-transparent text-[#343434] hover:opacity-90",
  },
  success: {
    default: "bg-color-green text-white",
    outline:
      "border border-color-gray-50 text-color-grey-80 hover:bg-color-green hover:text-white",
    link: "",
  },
};

const buttonSizeClasses: Record<Size, string> = {
  sm: "px-6 py-2 text-sm rounded-md h-[2.8125rem]",
  icon: "inline-flex items-center justify-center text-sm rounded-md size-[2.6875rem]",
  lg: "px-10 py-3 text-base rounded-lg h-[3.3125rem]",
};

const buttonWeightClasses: Record<Weight, string> = {
  bold: "font-bold",
  medium: "font-medium",
};

const buttonShapeClasses: Record<Shape, string> = {
  default: "rounded-lg",
  pill: "rounded-full",
};

export type ButtonProps = {
  asChild?: boolean;
  variant?: Variant;
  tone?: Tone;
  weight?: Weight;
  size?: Size;
  shape?: Shape;
  className?: string;
} & React.ComponentPropsWithRef<"button">;

export default function Button({
  asChild,
  variant = "primary",
  tone = "default",
  weight = "medium",
  size = "lg",
  shape = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "font-rubik inline-flex items-center justify-center transition-[transform_opacity] focus:outline-none focus:ring-2 focus:ring-offset-px tracking-custom cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:bg-transparent disabled:hover:text-inherit duration-300 hover:-translate-y-px gap-2.5 [&>svg]:size-5 [&>svg]:fill-current",
        buttonVariantClasses[variant]?.[tone],
        buttonSizeClasses[size],
        buttonWeightClasses[weight],
        buttonShapeClasses[shape],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

Button.displayName = "Button";
