import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

type Props = {}

const LoadingSkeleton = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 " />
          <Skeleton className="h-4 " />
          <Skeleton className="h-4 " />
          <Skeleton className="h-4" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 " />
          <Skeleton className="h-4" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 " />
          <Skeleton className="h-4 " />
          <Skeleton className="h-4" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] rounded-xl" />
      </div>
    </div>
  );
}

export default LoadingSkeleton