import { cn } from "@/lib/utils";

type ContainerProp = {
  size?: "default" | "sm" | "xs";
} & React.ComponentProps<"div">;

export default function Container({
  size = "default",
  children,
  className,
  ...props
}: ContainerProp) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 lg:px-6",
        {
          "max-w-[78.8125rem]": size === "default",
          "max-w-[66.25rem]": size === "sm",
          "max-w-[31rem]": size === "xs",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
