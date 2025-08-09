import { Suspense } from "react";
import HotelsPage from "./HotelResults";
import HotelCardSkeleton from "@/components/HotelsSkeleton";
import { AppBar } from "@/components/AppBar";

export default function HotelsPageWrapper() {
  return (
    <Suspense fallback={
      <div>
        <AppBar/>
        {Array.from({length:5}).map((_,idx) => (
          <HotelCardSkeleton key={idx}/>
        ))}
      </div>
    }>
      <HotelsPage />
    </Suspense>
  );
}