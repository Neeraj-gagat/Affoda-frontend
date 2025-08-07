"use client"
import { AppBar } from "@/components/AppBar";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    
        if (city && checkIn && checkOut && rooms && adults && children && language && maxresults) {
          fetchHotels(city as string, checkIn as string, checkOut as string, parseInt(rooms as string), parseInt(adults as string), parseInt(children as string), language as string, currency as string, parseInt(maxresults as string), sortby as string );
        }
      }, [city, checkIn, checkOut, rooms, adults, children, language, currency, maxresults, sortby]);


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
          const res = await fetch("http://localhost:3001/api/v1/search/hotel-result", {
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
                discountOnly: false,
                minimumStarRating: 0,
                minimumReviewScore: 0,
                dailyRate: {
                  minimum: 1,
                  maximum: 10000,
                },
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
            setData(result.results); // assuming result.results is the hotel list
          }
        } catch (err) {
          console.error("Error fetching hotels:", err);
        }
      };
      

      if (!data || !Array.isArray(data)) {
        return <div>No results found</div>
      }

    return <div>
        <AppBar/>
        <Result results={data}/>
        <Footer/>
    </div>
}

function getStars(rating: number): string {
    // return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    if (rating === 0) {
        return ""
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

const Result = ({results}:hotelsdataprops) => {
 return <div className="pt-20 ">
        <div className="py-5 md:py-10 flex flex-col items-center justify-center gap-4">
            {results?.map((hotel: Hotel) => (
                <div key={hotel.hotelId} className="bg-white border border-black/20 flex flex-row rounded-lg overflow-hidden hover:bg-[#E5EFFF] hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <img src={hotel.imageURL} alt="image" className="w-[270px] h-[215px]" />
                    <div className="flex flex-col p-3 w-[340px] text-start">
                        <h1 className="text-[19px] font-[600] text-slate-800">{hotel.hotelName}</h1>
                         <p className="text-[#B54C01]">{getStars(hotel.starRating)}</p>
                        <div className="pt-2">
                            <p className="text-[13px]">This hotel includes </p>
                            <div className="flex flx-row gap-1 pt-1">
                                {hotel.includeBreakfast && <span className="rounded px-1 text-[12px] text-black/60 font-[500] border border-black/40">Breakfast </span>}
                                {hotel.freeWifi && <span className="rounded px-1 text-[12px] text-black/60 font-[500] border border-black/40">Free WiFi </span>}
                            </div>
                            
                        </div>
                    </div>
                    <div className="relative border-l border-black/20 w-[200px] flex flex-col items-end p-2">
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