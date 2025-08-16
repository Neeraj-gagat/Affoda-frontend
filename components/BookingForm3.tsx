// "use client"
// import { MapPin } from "lucide-react"
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Search, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import type { DateRange } from 'react-day-picker';
import { useRouter } from "next/navigation";

interface City {
    cityId: string;
    cityName: string;
  }

export const BookingForm3 = ({ cityname, checkIn, checkOut, guests, child }: { cityname: string ,checkIn:string, checkOut: string, guests:number, child:number }) => {
      const router = useRouter();
      const [destination, setDestination] = useState(cityname || "");
      const [showSuggestions, setShowSuggestions] = useState(false);
      const [filteredCities, setFilteredCities] = useState<City[]>([]);
      const [cities, setCities] = useState<City[]>([]);
      const [dateRange, setDateRange] = useState<DateRange | undefined>({
          from: checkIn ? new Date(checkIn) : undefined,
          to: checkOut ? new Date(checkOut) : undefined,
        });
        const [city , setcity] = useState<string>('')
        const [rooms, setRooms] = useState(1);
        const [adults, setAdults] = useState(guests || 1);
        const [children, setChildren] = useState(child || 0);
        const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState(false);

      useEffect(() => {
          fetch("/cities.json")
            .then((res) => res.json())
            .then((data) => setCities(data));
        }, []);

          useEffect(() => {
            if (destination.length > 1) {
              const filtered = cities
                .filter((city) =>
                  city.cityName.toLowerCase().includes(destination.toLowerCase())
                )
                .slice(0, 10); // limit suggestions to top 10
              setFilteredCities(filtered);
              setShowSuggestions(true);
            } else {
              setFilteredCities([]);
              setShowSuggestions(false);
            }
          }, [destination, cities]);

          const formatAPIDate = (date?: Date) => {
            if (!date) return "";
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
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
            // setIsActive(!isActive);
            setDestination("")
            setcity("")
            setDateRange({ from: undefined, to: undefined});
            setRooms(1)
            setAdults(1)
            setChildren(0)
            router.push(`/hotels?cityname=${destination}&city=${city}&checkIn=${formatAPIDate(dateRange?.from)}&checkOut=${formatAPIDate(dateRange?.to)}&rooms=${rooms}&adults=${adults}&children=${children}&language=${"en-us"}&currency=${"INR"}&maxresults=${10}&sortby=${"PriceAsc"}`);
          };

        const handleSelect = (city: City) => {
            setDestination(city.cityName);
            setShowSuggestions(false);
            setcity(city.cityId);
            // you can also store city.cityId if needed for API calls
          };

    return (
         <>
        <form onSubmit={handleSearch} className="pt-18 hidden md:block">
            <div className="bg-[#20274D] p-3 w-full shadow-lg">
                {/* { parent div} */}
                <div className="flex flex-row items-center justify-center gap-1 px-20">
                <div className="relative">
                    <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Enter a destination or property"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-12 pr-4 py-2.5 text-[12px] md:text-[15px] text-gray-900 border-1 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white shadow-sm"
                    />
                    {/* Suggestions Dropdown */}
                {showSuggestions && filteredCities.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md my-1 max-h-67 md:max-h-55 overflow-y-auto shadow-lg px-4 md:px-8">
                    {filteredCities.map((city) => (
                        <li
                        key={city.cityId}
                        onClick={() => handleSelect(city)}
                        className="px-4 py-2 md:py-4 cursor-pointer hover:bg-gray-100 text-[12px] md:text-[14px] text-black border-b border-gray-200"
                        >
                        {city.cityName}
                        </li>
                    ))}
                    </ul>
                )}
                    </div>
                </div>
                <div>
                <div className="bg-transparent rounded-lg">
        <div className="flex justify-between items-center gap-1">
          {/* Check-in Date */}
          <div className='md:flex md:flex-row gap-1  justify-between items-center '>
          <div>
            {/* <label className="block text-[12px] md:text-[15px] font-medium text-gray-700 mb-2">Check-in</label> */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "overflow-hidden w-full md:w-[225px] justify-start transform duration-300 hover:bg-gray-100 text-left h-[45px] text-gray-900 font-normal bg-white border-gray-300 hover:border-gray-400",
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
            {/* <label className="block text-[12px] md:text-[15px] font-medium text-gray-700 mb-2">Check-out</label> */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "overflow-hidden w-full md:w-[225px] hover:bg-gray-100 transform duration-300 justify-start text-left h-[45px] text-gray-900 font-normal bg-white border-gray-300 hover:border-gray-400",
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
            {/* <label className="block text-[12px] md:text-[15px] font-medium text-gray-700 mb-2">Guests & rooms</label> */}
            <Popover open={isGuestPopoverOpen} onOpenChange={setIsGuestPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[300px] justify-start text-left transform duration-300 hover:bg-gray-100 text-gray-900 h-[45px] font-normal bg-white border-gray-300 hover:border-gray-400"
                >
                  <Users className="mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] md:text-[14px] font-medium">
                      {adults + children} guests
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
                </div>
                <div>
                    <Button
                            type="submit" 
                            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold h-[45px] text-lg rounded-lg shadow-lg"
                          >
                            <Search className="mr-2 h-5 w-5" />
                            SEARCH
                          </Button>
                </div>
                </div>
            </div>

        </form>
    </>
    )
}