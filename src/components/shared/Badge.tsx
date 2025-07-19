import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type BadgeProps = {
  asChild?: boolean;
  className?: string;
} & React.PropsWithChildren;

export default function Badge({ asChild, className, children }: BadgeProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={cn(
        "inline-block bg-color-green/10 text-color-green rounded-lg px-3 py-1 font-rubik font-medium",
        className
      )}
    >
      {children}
    </Comp>
  );
}
