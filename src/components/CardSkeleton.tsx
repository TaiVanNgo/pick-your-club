import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

// Card skeleton loader component
const CardSkeleton = () => (
  <Card className="w-full max-w-sm bg-white/15 backdrop-blur-md border-white/30 shadow-2xl">
    <CardContent className="p-8 text-center">
      <div className="flex justify-center mb-6">
        <Skeleton className="w-24 h-24 rounded-full bg-white/20" />
      </div>

      <Skeleton className="h-10 w-3/4 mx-auto mb-3 bg-white/20" />

      <div className="space-y-3">
        <Skeleton className="h-6 w-1/2 mx-auto bg-white/20" />
        <Skeleton className="h-5 w-1/3 mx-auto bg-white/20" />
      </div>

      <div className="mt-6 pt-4 border-t border-white/20">
        <Skeleton className="h-5 w-2/3 mx-auto bg-white/20" />
      </div>
    </CardContent>
  </Card>
);

export default CardSkeleton;
