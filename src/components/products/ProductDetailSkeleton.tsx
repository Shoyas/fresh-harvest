import Container from "../shared/Container";

export default function ProductDetailSkeleton() {
  return (
    <Container>
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: Image Skeleton */}
        <div className="w-full h-[400px] rounded-lg bg-color-gray-50" />

        {/* Right: Details Skeleton */}
        <div className="space-y-6">
          <SkeletonBlock height="h-6" width="w-24" />
          <SkeletonBlock height="h-10" width="w-3/4" />
          <div className="flex items-center gap-2">
            <SkeletonBlock height="h-5" width="w-24" />
            <SkeletonBlock height="h-5" width="w-20" />
          </div>
          <SkeletonBlock height="h-8" width="w-1/3" />

          <div className="space-y-2">
            <SkeletonText lines={[1, 1, 0.83, 1, 0.75]} />
          </div>

          <div className="flex items-center gap-2">
            <SkeletonBlock height="h-10" width="w-24" />
            <SkeletonBlock height="h-10" width="w-16" />
            <SkeletonBlock height="h-10" width="w-10" />
          </div>

          <div className="flex gap-4">
            <SkeletonBlock height="h-12" width="w-40" />
            <SkeletonBlock height="h-12" width="w-40" />
          </div>
        </div>
      </div>

      {/* Tabs & Content */}
      <div className="mt-12">
        <div className="flex gap-4 border-b border-gray-200 pb-2">
          <SkeletonBlock height="h-8" width="w-28" />
          <SkeletonBlock height="h-8" width="w-28" />
        </div>

        <div className="mt-6 space-y-2">
          <SkeletonText lines={[1, 1, 0.83, 1, 0.75]} />
        </div>
      </div>
    </Container>
  );
}

// Helper: One block
function SkeletonBlock({ height, width }: { height: string; width: string }) {
  return <div className={`${height} ${width} rounded-md bg-color-gray-50`} />;
}

// Helper: Multiple text lines
function SkeletonText({ lines }: { lines: number[] }) {
  return (
    <>
      {lines.map((scale, idx) => (
        <div
          key={idx}
          className={`h-4 ${getWidth(scale)} bg-color-gray-50 rounded-md`}
        />
      ))}
    </>
  );
}

// Scale width helper
function getWidth(scale: number) {
  if (scale >= 1) return "w-full";
  if (scale >= 0.9) return "w-11/12";
  if (scale >= 0.83) return "w-5/6";
  if (scale >= 0.75) return "w-3/4";
  if (scale >= 0.66) return "w-2/3";
  if (scale >= 0.5) return "w-1/2";
  return "w-1/3";
}
