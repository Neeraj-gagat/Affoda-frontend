import { AppBar } from "@/components/AppBar";
import Footer from "@/components/Footer";

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

  const data = [
    {
        "hotelId": 71364207,
        "hotelName": "Noodle Factory - Old THAI House",
        "starRating": 2.5,
        "reviewScore": 8.2,
        "reviewCount": 29,
        "currency": "INR",
        "dailyRate": 312.83,
        "crossedOutRate": 4874.06,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/71364207/0/f7c7f11f79a284d98b7711496a16da3a.jpg?ce=2&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=71364207&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": true,
        "freeWifi": false,
        "latitude": 13.7620868682861,
        "longitude": 100.499084472656
    },
    {
        "hotelId": 50530320,
        "hotelName": "The House Hostel",
        "starRating": 3.0,
        "reviewScore": 7.5,
        "reviewCount": 32,
        "currency": "INR",
        "dailyRate": 375.03,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/50530320/0/b96d2f6569c243d01de7b26453e63fc7.jpg?ce=2&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=50530320&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.7618497,
        "longitude": 100.4945451
    },
    {
        "hotelId": 6811944,
        "hotelName": "Day Inn ",
        "starRating": 3.0,
        "reviewScore": 5.3,
        "reviewCount": 175,
        "currency": "INR",
        "dailyRate": 561.2,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/6811944/0/3986f1cbc235c198a2348c47f91f462d.jpeg?ce=0&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=6811944&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.8415257880396,
        "longitude": 100.698590365472
    },
    {
        "hotelId": 51976535,
        "hotelName": "GN GOOD NICE",
        "starRating": 2.5,
        "reviewScore": 8.1,
        "reviewCount": 3,
        "currency": "INR",
        "dailyRate": 565.68,
        "crossedOutRate": 758.19,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/51976535/0/aef09ec5396c77b32d209af3d666e068.jpg?ce=0&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=51976535&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": false,
        "latitude": 13.669221990408024,
        "longitude": 100.50306315310785
    },
    {
        "hotelId": 49508209,
        "hotelName": "Good Place(No parking for cars.)",
        "starRating": 1.5,
        "reviewScore": 5.4,
        "reviewCount": 13,
        "currency": "INR",
        "dailyRate": 565.68,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/49508209/0/8d004b3b137ae8bec9d2f0d48a0661c6.jpg?ce=0&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=49508209&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": false,
        "latitude": 13.6683109,
        "longitude": 100.5037944
    },
    {
        "hotelId": 7892477,
        "hotelName": "Do Dee cafe",
        "starRating": 3.0,
        "reviewScore": 8.0,
        "reviewCount": 296,
        "currency": "INR",
        "dailyRate": 637.73,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/210484617.jpg?k=89ddfe3d90546fa870080c6f2ee3483c0b212237367331396f21615bfc7ee8fa&o=",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=7892477&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.728121757507324,
        "longitude": 100.45187377929688
    },
    {
        "hotelId": 52249065,
        "hotelName": "GN GOOD NICE",
        "starRating": 2.5,
        "reviewScore": 10.0,
        "reviewCount": 1,
        "currency": "INR",
        "dailyRate": 658.23,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/535235330.jpg?k=2bb09685d32b0cf0422bb9101cc954c11e934213128f0d2d537b7431f49e9fc6&o=",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=52249065&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.66919994354248,
        "longitude": 100.5030517578125
    },
    {
        "hotelId": 50259407,
        "hotelName": "NP Prime FREE WiFi",
        "starRating": 2.0,
        "reviewScore": 5.9,
        "reviewCount": 3,
        "currency": "INR",
        "dailyRate": 660.5,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/522099230.jpg?k=8526fe19f922054aff7f5dc1d29b9aaebc406fd886f8c5beecb58005d8aa9b96&o=",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=50259407&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.669230461120605,
        "longitude": 100.50303649902344
    },
    {
        "hotelId": 18510883,
        "hotelName": "Jatujak Double Fan 03-06",
        "starRating": 2.0,
        "reviewScore": 6.0,
        "reviewCount": 27,
        "currency": "INR",
        "dailyRate": 708.79,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/18510883/0/fba4698f39454a79e22005c13bcfeeb9.jpg?ce=0&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=18510883&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": false,
        "latitude": 13.796463012695312,
        "longitude": 100.55986022949219
    },
    {
        "hotelId": 18849584,
        "hotelName": "Jatujak Double Fan 03-05",
        "starRating": 2.0,
        "reviewScore": 5.1,
        "reviewCount": 40,
        "currency": "INR",
        "dailyRate": 708.79,
        "crossedOutRate": 0.0,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/agoda-homes/18849584/4c9f05acecb0f6e9ac290e46f410aac8.jpg?ca=14&ce=1&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=18849584&currency=INR&checkin=2025-08-14&checkout=2025-08-16&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": false,
        "latitude": 13.796428707374117,
        "longitude": 100.55988325321155
    }
]

export default function hotelsPage() {
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
            {results.map((hotel: Hotel) => (
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
                    <div className="absolute flex flex-col items-center justify-center gap-2 bottom-5 align-text-bottom">
                        <span className="text-[10px]">Per night before taxes and fees</span>
                        <div className="flex flex-row justify-end-safe gap-2 ">
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