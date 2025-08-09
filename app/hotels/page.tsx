import { Suspense } from "react";
import HotelsPage from "./HotelResults";
import HotelCardSkeleton from "@/components/HotelsSkeleton";

export default function HotelsPageWrapper() {
  return (
    <Suspense fallback={
      <HotelCardSkeleton />
    }>
      <HotelsPage />
    </Suspense>
  );
}