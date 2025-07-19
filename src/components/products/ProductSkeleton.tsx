import Container from "../shared/Container";

export default function ProductSkeleton({ length = 8 }: { length?: number }) {
  return (
    <Container>
      <div className="mt-6 grid gap-6 lg:mt-8 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {Array.from({ length }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="max-w-xs w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm animate-pulse">
      <SkeletonBlock height="h-48" className="rounded-t-lg" />

      <div className="p-4 space-y-3">
        <SkeletonBlock height="h-6" width="w-3/4" />
        <SkeletonBlock height="h-4" width="w-1/2" />
      </div>

      <div className="p-4 pt-0">
        <SkeletonBlock height="h-10" />
      </div>
    </div>
  );
}

// Reusable Skeleton Block
function SkeletonBlock({
  height,
  width = "w-full",
  className = "",
}: {
  height: string;
  width?: string;
  className?: string;
}) {
  return <div className={`${height} ${width} bg-color-gray-50 rounded ${className}`} />;
}
