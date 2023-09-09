import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div className="min-h-screen bg-background w-full fixed top-0 right-0 backdrop-blur-3xl flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
