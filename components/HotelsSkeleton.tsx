import React from "react";

export default function HotelCardSkeleton() {
  return (
    <div className="border rounded-lg p-4 flex gap-4 animate-pulse bg-gray-100">
      {/* Image skeleton */}
      <div className="w-35 md:w-50 h-30 md:h-45 bg-gray-300 rounded"></div>

      {/* Content skeleton */}
      <div className="flex-1 flex flex-col justify-between w-50 md:w-130">
        {/* Title + Stars */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="w-4 h-4 bg-gray-300 rounded-full"
              ></div>
            ))}
          </div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* Price section */}
        <div className="flex flex-col items-end ">
          <div className="h-4 bg-gray-300 rounded w-16 mb-1"></div>
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
}
