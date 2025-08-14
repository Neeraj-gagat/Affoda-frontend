import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface City {
  cityId: string;
  cityName: string;
}

export const BookingForm2 = ({ cityname, checkIn, checkOut, guests, child }: { cityname: string ,checkIn:string, checkOut: string, guests:number, child?:number }) => {
    const [isActive, setIsActive] = useState(false);
    const [destination, setDestination] = useState("");
    // const [city , setcityy] = useState<string>('')
      const [cities, setCities] = useState<City[]>([]);
      const [showSuggestions, setShowSuggestions] = useState(false);
      const [filteredCities, setFilteredCities] = useState<City[]>([]);

    useEffect(() => {
        fetch("/cities.json")
          .then((res) => res.json())
          .then((data) => setCities(data));
      }, []);
    
      useEffect(() => {
        if (destination.length > 1) {
          const filtered = cities
            .filter((cityobj) =>
              cityobj.cityName.toLowerCase().includes(destination.toLowerCase())
            )
            .slice(0, 10); // limit suggestions to top 10
          setFilteredCities(filtered);
          setShowSuggestions(true);
        } else {
          setFilteredCities([]);
          setShowSuggestions(false);
        }
      }, [destination, cities]);

    useEffect(() => {
        if (isActive) {
          // Lock scroll
          document.body.style.overflow = "hidden";
        } else {
          // Restore scroll
          document.body.style.overflow = "auto";
        }
      
        // Cleanup in case component unmounts
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isActive]);

      const handleSelect = (city: City) => {
        setDestination(city.cityName);
        setShowSuggestions(false);
        // setcity(city.cityId);
        // you can also store city.cityId if needed for API calls
      };

    return (
    <>
    <button onClick={() => (
        setIsActive(!isActive)
    )} >
        <div className="flex md:hidden pt-20 justify-center items-center mx-1.5">
        <div className="rounded-3xl  bg-zinc-200 py-2 px-3 border w-full flex flex-row items-center justify-between gap-2">
            <div className="flex flex-col gap-0.5">
            <p className="text-[10px] font-[600] text-start text-black">{cityname}</p>
            <div className="flex items-center justify-start gap-1 text-[9px]"> <div className="flex justify-center items-center gap-1"><p>{checkIn} -</p> <p>{checkOut}</p></div> <div className="flex justify-center items-center gap-1"><p>• {guests} Adults</p> {child !== undefined && <p>• {child} Childrens</p>}</div></div>
            </div>
            <div className="flex justify-end items-center">
                <RiSearchLine size={20}/>
            </div>
        </div>
    </div>
    </button>
    {isActive && <div>
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-hidden">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-affoda-blue flex justify-between w-full text-white text-[14px] font-[500] p-5">
                    <div className="flex justify-start cursor-pointer" onClick={() => (setIsActive(!isActive))}><IoIosArrowBack size={20}/> </div>
                    <div className="flex justify-start px-25"><p className="-translate-x-7">Edit Search</p></div>
                </div>
                <div className="border w-full">
                <div className="relative m-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter a destination or property"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="cursor-pointer w-full pl-12 pr-4 py-2 md:py-4 text-[12px] md:text-[15px] text-gray-900 border-gray-300 rounded-2xl focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-gray-300 bg-white shadow-[0_-4px_3px_rgba(0,0,0,0.06),0_2px_3px_rgba(0,0,0,0.25)]"
                  />
                  {/* Suggestions Dropdown */}
              {showSuggestions && filteredCities.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md my-1 max-h-67 md:max-h-55 overflow-y-auto shadow-lg px-4 md:px-8">
                  {filteredCities.map((cityobj) => (
                    <li
                      key={cityobj.cityId}
                      onClick={() => handleSelect(cityobj)}
                      className="px-4 py-2 md:py-4 cursor-pointer hover:bg-gray-100 text-[12px] md:text-[14px] text-black border-b border-gray-200"
                    >
                      {cityobj.cityName}
                    </li>
                  ))}
                </ul>
              )}
                </div>
      </div>
                </div>
            </div>
        </div>
    </div> }
    </>
  );
}