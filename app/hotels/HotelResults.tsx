"use client"
import { AppBar } from "@/components/AppBar";
import Footer from "@/components/Footer";
import HotelCardSkeleton from "@/components/HotelsSkeleton";
import CouponComponent from "@/components/ui/coupon";
// import CouponDemo from "@/components/ui/coupon";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';

interface hotelsdataprops {
    results: Hotel[]
}

export interface Hotel {
    hotelId: number;
    hotelName: string;
    starRating: number;
    reviewScore: number;
    reviewCount: number;
    currency: string;
    dailyRate: number;
    crossedOutRate: number;
    discountPercentage: number;
    imageURL: string;
    landingURL: string;
    includeBreakfast: boolean;
    freeWifi: boolean;
    latitude: number;
    longitude: number;
  }

export default function HotelsPage() {
    const searchParams = useSearchParams();
    const [data, setData] = useState<Hotel[]>([])
    const [loading, setLoading] = useState(true);
    const city = searchParams.get("city");
const checkIn = searchParams.get("checkIn");
const checkOut = searchParams.get("checkOut");
const rooms = searchParams.get("rooms");
const adults = searchParams.get("adults");
const children = searchParams.get("children");
const language = searchParams.get("language");
const currency = searchParams.get("currency");
const maxresults = searchParams.get("maxresults");
const sortby = searchParams.get("sortby");

    useEffect(() => {
        if (!searchParams) return;
    
        if (city && checkIn && checkOut && rooms && adults && children && language && currency && maxresults && sortby) {
          console.log("before fetching hotels")
          fetchHotels(city as string, checkIn as string, checkOut as string, parseInt(rooms as string), parseInt(adults as string), parseInt(children as string), language as string, currency as string, parseInt(maxresults as string), sortby as string );
          console.log("after fetching hotels")
        }
        console.log("here i am"+city, checkIn, checkOut, rooms, adults, children, language, currency, maxresults, sortby);
      }, [searchParams]);


      const fetchHotels = async (
        city: string,
        checkIn: string,
        checkOut: string,
        rooms: number,
        adults: number,
        children: number,
        language: string,
        currency: string,
        maxresults: number,
        sortby: string
      ) => {
        try {
          const res = await fetch("https://backend.affoda.com/api/v1/search/hotel-result", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              checkInDate: checkIn,
              checkOutDate: checkOut,
              cityId: Number(city),
              additional: {
                currency,
                language,
                maxResult: maxresults,
                sortBy: sortby,
                // discountOnly: false,
                // minimumStarRating: 0,
                // minimumReviewScore: 0,
                // dailyRate: {
                //   minimum: 1,
                //   maximum: 10000,
                // },
                occupancy: {
                  numberOfAdult: adults,
                  numberOfChildren: children,
                },
              },
            }),
          });
      
          const result = await res.json();
      
          if (!result || !result.results) {
            console.warn("Empty or invalid response from server:", result);
            setData([]);
           
          } else {
            setData(result.results);
            setLoading(false);
          }
        } catch (err) {
          console.error("Error fetching hotels:", err);
        }
      };
      

      if (!data || !Array.isArray(data)) {
        return <div>No results found</div>
      }

    return <div className="overflow-x-hidden">
        <AppBar/>
        <Result results={data} loading={loading}/>
        <Footer/>
    </div>
}

function getStars(rating: number): string {
    // return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    if (rating === 0) {
        return "☆☆☆☆☆"
    }else {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }
  }

  function getCleanPrice(price: number): number {
    return Number.isInteger(price) ? price : Math.ceil(price);
  }
  
  

const ratting = (reviewScore:number):string => {
    if (reviewScore >= 9) {
        return `${reviewScore}  Excellent`;
      } else if (reviewScore >= 7) {
        return `${reviewScore}  Good`;
      } else if (reviewScore >= 5) {
        return `${reviewScore}  Average`;
      } else {
        return `${reviewScore}  Bad`;
      }
}

const Result = ({results, loading}:hotelsdataprops & {loading: boolean}) => {

 return <div className="pt-20">
        <div className="flex justify-center"> 
        <CouponComponent showCloseButton={false} discount="5%" onActivate={() => {
        //  window.location.reload();
          return {
            description:"your 5% discount coupon has been activated successfully"
          }
        } }/>
        </div>
        
        <div className="py-5 md:pb-10 flex flex-col items-center justify-center gap-1.5 md:gap-4">
            {loading
            ? Array.from({length:5}).map((_, index) => (
              <HotelCardSkeleton key={index} />
            ))
            :results?.map((hotel: Hotel) => (
                <div key={hotel.hotelId} className="bg-white md:border border-black/20 flex flex-row rounded-lg overflow-hidden hover:bg-[#E5EFFF] hover:shadow-xl transition-all duration-300 cursor-pointer mx-2 shadow-[0_-4px_3px_rgba(0,0,0,0.06),0_2px_3px_rgba(0,0,0,0.25)] md:shadow-none">
                    <img src={hotel.imageURL} alt="image" className="w-[150px] md:w-[270px] h-[130px] md:h-[215px]" />
                    <div className="flex flex-col p-1.5 md:p-3 w-[220px] md:w-[340px] text-start justify-between">
                      <div>
                      <h1 className="text-[12px] md:text-[19px] font-[600] text-slate-800">{hotel.hotelName}</h1>
                        <div className="flex flex-row items-center gap-2 ">
                        <p className="text-[#B54C01] text-[13px] md:text-[17px]">{getStars(hotel.starRating)}</p>
                        <div className="md:hidden flex flex-row items-center gap-1">
                        <span className="text-[10px] md:text-[15px] text-blue-500 font-[600]">{ratting(hotel.reviewScore)}</span>
                        <span className="text-[10px] md:text-[14px] font-[500] text-black/60 flex"><p className="text-[10px] md:text-[13px] font-[500]">{hotel.reviewCount} reviews</p> </span>
                        </div>
                        </div>
                        <div className="pt-0.5 md:pt-2">
                            <p className="text-[10px] md:text-[13px]">This hotel includes </p>
                            <div className="flex flx-row gap-1 pt-1">
                                {hotel.includeBreakfast && <span className="rounded px-1 text-[8px] md:text-[12px] text-black/60 font-[500] border border-black/40">Breakfast </span>}
                                {hotel.freeWifi && <span className="rounded px-1 text-[8px] md:text-[12px] text-black/60 font-[500] border border-black/40">Free WiFi </span>}
                            </div>  
                        </div>
                      </div>
                        <div className="md:hidden">
                        <div className=" flex flex-col justify-items-end bottom-0 align-text-bottom">
                          <div className="relative flex flex-row justify-end-safe gap-1 items-baseline bottom-0">
                          <span className="text-[13px] text-black/50">Rs.</span>
                          <span className="text-[17px]  text-red-500 font-[500] md:font-[600]">{getCleanPrice(hotel.dailyRate)}</span>
                          </div>
                        </div>
                        </div>
                    </div>
                    <div className="hidden relative border-l border-black/20 w-[200px] md:flex flex-col items-end p-2">
                    <span className="text-[15px] text-blue-500 font-[600]">{ratting(hotel.reviewScore)}</span>
                    <span className="text-[14px] font-[500] text-black/60 flex"><p className=" text-[13px] font-[500]">{hotel.reviewCount} reviews</p> </span> 
                    <div className="absolute flex flex-col justify-items-end bottom-5 align-text-bottom">
                        <span className="text-[10px]">Per night before taxes and fees</span>
                        <div className="flex flex-row justify-end-safe gap-2 items-center">
                        <span className="text-[24px] text-black/50">Rs.</span>
                        <span className="text-[22px] pt-1 text-red-500 font-[600]">{getCleanPrice(hotel.dailyRate)}</span>
                        </div>
                        
                    </div>
                    </div>
                </div>
            ))}
        </div>
 </div>
}