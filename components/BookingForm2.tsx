import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Search, MapPin, Users } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from "./ui/button";
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import type { DateRange } from 'react-day-picker';
import { useRouter } from 'next/navigation';

interface City {
  cityId: string;
  cityName: string;
}

export const BookingForm2 = ({ cityname, checkIn, checkOut, guests, child }: { cityname: string ,checkIn:string, checkOut: string, guests:number, child:number }) => {
    const router =  useRouter(); 
    const [isActive, setIsActive] = useState(false);
    const [destination, setDestination] = useState("");
    const [city , setcity] = useState<string>('')
      const [cities, setCities] = useState<City[]>([]);
      const [showSuggestions, setShowSuggestions] = useState(false);
      const [filteredCities, setFilteredCities] = useState<City[]>([]);
      const [dateRange, setDateRange] = useState<DateRange | undefined>({
          from: undefined,
          to: undefined,
        });
      const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState(false);
      const [rooms, setRooms] = useState(1);
      const [adults, setAdults] = useState(2);
      const [children, setChildren] = useState(0);

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

      const formatAPIDate = (date?: Date) => {
        if (!date) return "";
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      const handleSelect = (city: City) => {
        setDestination(city.cityName);
        setShowSuggestions(false);
        setcity(city.cityId);
        // you can also store city.cityId if needed for API calls
      };

      const handleSearch = (e: React.FormEvent) => {
          e.preventDefault();
          console.log({
            destination,
            checkin: dateRange?.from,
            checkout: dateRange?.to,
            rooms,
            adults,
            children
          });
          setIsActive(!isActive);
          setDestination("")
          setcity("")
          setDateRange({ from: undefined, to: undefined});
          setRooms(1)
          router.push(`/hotels?cityname=${destination}&city=${city}&checkIn=${formatAPIDate(dateRange?.from)}&checkOut=${formatAPIDate(dateRange?.to)}&rooms=${rooms}&adults=${adults}&children=${children}&language=${"en-us"}&currency=${"INR"}&maxresults=${10}&sortby=${"PriceAsc"}`);
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
    {isActive && <form onSubmit={handleSearch}>
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
                {/* {checkin checkout} */}
                <div className="w-full px-3 pt-5">
                <div className="bg-gray-50 p-2 md:p-4 rounded-lg border-gray-200 w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Check-in Date */}
          <div className='grid md:flex grid-cols-2 md:flex-row gap-1 md:gap-3 justify-center items-center '>
          <div>
            <label className="block text-[12px] md:text-[15px] font-medium text-gray-700 mb-2">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "overflow-hidden w-full md:w-[225px] justify-start transform duration-300 hover:bg-gray-100 text-left h-10 md:h-12 text-gray-900 font-normal bg-white border-gray-300 hover:border-gray-400",
                    !dateRange?.from && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-0 md:mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] md:text-[14px] font-medium">
                      {dateRange?.from ? format(dateRange.from, "dd MMM yyyy") : "Select date"}
                    </span>
                    <span className="text-[10px] md:text-[12px] text-gray-400">
                      {dateRange?.from ? format(dateRange.from, "EEEE") : "Day"}
                    </span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white shadow-lg border z-50" align="start">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-[12px] md:text-[15px] font-medium text-gray-700 mb-2">Check-out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "overflow-hidden w-full md:w-[225px] hover:bg-gray-100 transform duration-300 justify-start text-left h-10 md:h-12 text-gray-900 font-normal bg-white border-gray-300 hover:border-gray-400",
                    !dateRange?.to && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-0 md:mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] md:text-[14px] font-medium">
                      {dateRange?.to ? format(dateRange.to, "dd MMM yyyy") : "Select date"}
                    </span>
                    <span className="text-[10px] md:text-[12px] text-gray-400">
                      {dateRange?.to ? format(dateRange.to, "EEEE") : "Day"}
                    </span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white shadow-lg border z-50" align="start">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date()}
                  autoFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          </div>
          

          {/* Guests */}
          <div>
            <label className="block text-[12px] md:text-[15px] font-medium text-gray-700 mb-2">Guests & rooms</label>
            <Popover open={isGuestPopoverOpen} onOpenChange={setIsGuestPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left transform duration-300 hover:bg-gray-100 text-gray-900 h-10 md:h-12 font-normal bg-white border-gray-300 hover:border-gray-400"
                >
                  <Users className="mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] md:text-[14px] font-medium">
                      {guests + child} guests
                    </span>
                    <span className="text-[10px] md:text-[12px] text-gray-400">
                      {rooms} room{rooms > 1 ? 's' : ''}
                    </span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white shadow-lg border z-50">
                <div className="space-y-4 p-2">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">Adults</span>
                      <p className="text-xs text-gray-500">Ages 18+</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{adults}</span>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => setAdults(adults + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  
                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">Children</span>
                      <p className="text-xs text-gray-500">Ages 0-17</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{children}</span>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => setChildren(children + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Rooms</span>
                    <div className="flex items-center space-x-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{rooms}</span>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={() => setRooms(rooms + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="pt-5 px-3">
        <Button
                type="submit" 
                className="w-full bg-affoda-blue text-white font-bold py-4 text-lg h-auto rounded-lg shadow-lg"
              >
                <Search className="mr-2 h-5 w-5" />
                SEARCH
              </Button>
      </div>
                </div>

            </div>
        </div>
    </form> }
    </>
  );
}