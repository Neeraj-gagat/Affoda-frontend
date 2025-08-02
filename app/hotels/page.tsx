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
        "currency": "USD",
        "dailyRate": 4.26,
        "crossedOutRate": 43.05,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/71364207/0/f7c7f11f79a284d98b7711496a16da3a.jpg?ce=2&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=71364207&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": true,
        "freeWifi": false,
        "latitude": 13.7620868682861,
        "longitude": 100.499084472656
    },
    {
        "hotelId": 6811944,
        "hotelName": "Day Inn ",
        "starRating": 3.0,
        "reviewScore": 5.3,
        "reviewCount": 175,
        "currency": "USD",
        "dailyRate": 6.21,
        "crossedOutRate": 0,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/6811944/0/3986f1cbc235c198a2348c47f91f462d.jpeg?ce=0&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=6811944&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.8415257880396,
        "longitude": 100.698590365472
    },
    // {
    //     "hotelId": 51976535,
    //     "hotelName": "GN GOOD NICE",
    //     "starRating": 2.5,
    //     "reviewScore": 8.1,
    //     "reviewCount": 3,
    //     "currency": "USD",
    //     "dailyRate": 6.42,
    //     "crossedOutRate": 8.61,
    //     "discountPercentage": 0.0,
    //     "imageURL": "http://pix8.agoda.net/hotelImages/51976535/0/aef09ec5396c77b32d209af3d666e068.jpg?ce=0&s=800x600",
    //     "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=51976535&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
    //     "includeBreakfast": false,
    //     "freeWifi": false,
    //     "latitude": 13.669221990408024,
    //     "longitude": 100.50306315310785
    // },
    // {
    //     "hotelId": 49508209,
    //     "hotelName": "Good Place(No parking for cars.)",
    //     "starRating": 1.5,
    //     "reviewScore": 5.4,
    //     "reviewCount": 13,
    //     "currency": "USD",
    //     "dailyRate": 6.42,
    //     "crossedOutRate": 0,
    //     "discountPercentage": 0.0,
    //     "imageURL": "http://pix8.agoda.net/hotelImages/49508209/0/8d004b3b137ae8bec9d2f0d48a0661c6.jpg?ce=0&s=800x600",
    //     "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=49508209&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
    //     "includeBreakfast": false,
    //     "freeWifi": false,
    //     "latitude": 13.6683109,
    //     "longitude": 100.5037944
    // },
    {
        "hotelId": 52249065,
        "hotelName": "GN GOOD NICE",
        "starRating": 0.0,
        "reviewScore": 10.0,
        "reviewCount": 1,
        "currency": "USD",
        "dailyRate": 6.96,
        "crossedOutRate": 0,
        "discountPercentage": 0.0,
        "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/535235330.jpg?k=2bb09685d32b0cf0422bb9101cc954c11e934213128f0d2d537b7431f49e9fc6&o=",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=52249065&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.66919994354248,
        "longitude": 100.5030517578125
    },
    {
        "hotelId": 7892477,
        "hotelName": "Do Dee cafe",
        "starRating": 3.0,
        "reviewScore": 8.0,
        "reviewCount": 293,
        "currency": "USD",
        "dailyRate": 7.24,
        "crossedOutRate": 0,
        "discountPercentage": 0.0,
        "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/210484617.jpg?k=89ddfe3d90546fa870080c6f2ee3483c0b212237367331396f21615bfc7ee8fa&o=",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=7892477&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.728121757507324,
        "longitude": 100.45187377929688
    },
    {
        "hotelId": 50162377,
        "hotelName": "Best Place(No have parking for cars.)",
        "starRating": 2.5,
        "reviewScore": 6.4,
        "reviewCount": 1,
        "currency": "USD",
        "dailyRate": 7.38,
        "crossedOutRate": 11.07,
        "discountPercentage": 0.0,
        "imageURL": "http://pix8.agoda.net/hotelImages/50162377/0/347ad5decfbbe1a46c1db3e60b46216c.jpg?ce=0&s=800x600",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=50162377&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": false,
        "latitude": 13.669221471578389,
        "longitude": 100.50305268755238
    },
    {
        "hotelId": 50259407,
        "hotelName": "NP Prime FREE WiFi",
        "starRating": 0.0,
        "reviewScore": 5.9,
        "reviewCount": 3,
        "currency": "USD",
        "dailyRate": 7.5,
        "crossedOutRate": 0,
        "discountPercentage": 0.0,
        "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/522099230.jpg?k=8526fe19f922054aff7f5dc1d29b9aaebc406fd886f8c5beecb58005d8aa9b96&o=",
        "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1945178&hid=50259407&currency=USD&checkin=2025-08-10&checkout=2025-08-12&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
        "includeBreakfast": false,
        "freeWifi": true,
        "latitude": 13.669230461120605,
        "longitude": 100.50303649902344
    }
]

export default function hotelsPage() {
    return <div>
        <AppBar/>
        <Result results={data}/>
        <Footer/>
    </div>
}

const Result = ({results}:hotelsdataprops) => {
 return <div className="pt-20 ">
        <div className="py-5 md:py-10 flex flex-col items-center justify-center gap-4">
            {results.map((hotel: Hotel) => (
                <div key={hotel.hotelId} className="bg-white border flex flex-row rounded-lg overflow-hidden">
                    <img src={hotel.imageURL} alt="image" width={300} height={300} className="" />
                    <div className="flex flex-col p-3 w-[360px] text-start">
                        <h1 className="text-[19px] font-[700] text-slate-800">{hotel.hotelName}</h1>
                    </div>
                </div>
            ))}
        </div>
 </div>
}