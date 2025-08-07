"use client"

import React, { useEffect, useState } from 'react';
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
import { useRouter } from 'next/navigation';

interface City {
  cityId: string;
  cityName: string;
}

const BookingForm = () => {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
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

  const handleSelect = (city: City) => {
    setDestination(city.cityName);
    setShowSuggestions(false);
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
    router.push(`/hotels?city=${destination}&checkIn=${dateRange?.from}&checkOut=${dateRange?.to}&rooms=${rooms}&adults=${adults}&children=${children}`);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-2 md:space-y-4">
      {/* Destination */}
      <div className="relative">
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Enter a destination or property"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-12 pr-4 py-2 md:py-4 text-[12px] md:text-[15px] text-gray-900 border-1 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white shadow-sm"
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

      {/* Date Range and Guests Container */}
      <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Check-in Date */}
          <div className='grid md:flex grid-cols-2 md:flex-row gap-1 md:gap-3 '>
          <div>
            <label className="block text-[12px] md:text-[15px] font-medium text-gray-700 mb-2">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-34 md:w-[225px] justify-start transform duration-300 hover:bg-gray-100 text-left h-10 md:h-12 text-gray-900 font-normal bg-white border-gray-300 hover:border-gray-400",
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
                    "w-34 md:w-[225px] hover:bg-gray-100 transform duration-300 justify-start text-left h-10 md:h-12 text-gray-900 font-normal bg-white border-gray-300 hover:border-gray-400",
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

      {/* Search Button */}
      <Button
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 text-lg h-auto rounded-lg shadow-lg"
      >
        <Search className="mr-2 h-5 w-5" />
        SEARCH
      </Button>
    </form>
  );
};

export default BookingForm;
// import React, { useState } from 'react';
// import { format } from 'date-fns';
// import { Calendar as CalendarIcon, Search, MapPin, Users, Building } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import { Calendar } from '@/components/ui/calendar';
// import { cn } from '@/lib/utils';
// import type { DateRange } from 'react-day-picker';

// interface BookingFormProps {
//   className?: string;
// }

// const BookingForm = ({ className }: BookingFormProps) => {
//   const [destination, setDestination] = useState('');
//   const [dateRange, setDateRange] = useState<DateRange | undefined>({
//     from: undefined,
//     to: undefined,
//   });
//   const [rooms, setRooms] = useState(1);
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);
//   const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState(false);

//   const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDestination(e.target.value);
//   };

//   const incrementRooms = () => setRooms(r => Math.min(r + 1, 10));
//   const decrementRooms = () => setRooms(r => Math.max(r - 1, 1));
//   const incrementAdults = () => setAdults(a => Math.min(a + 1, 30));
//   const decrementAdults = () => setAdults(a => Math.max(a - 1, 1));
//   const incrementChildren = () => setChildren(c => Math.min(c + 1, 10));
//   const decrementChildren = () => setChildren(c => Math.max(c - 1, 0));

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, this would navigate to search results
//     console.log({
//       destination,
//       checkin: dateRange?.from,
//       checkout: dateRange?.to,
//       rooms,
//       adults,
//       children
//     });
//   };

//   return (
//     <Card className={cn("bg-white shadow-lg border-none", className)}>
//       <CardContent className="p-6">
//         <form onSubmit={handleSearch}>
//           <div className="space-y-4">
//             {/* Destination Input */}
//             <div className="relative">
//               <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
//                 Destination
//               </label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   id="destination"
//                   type="text"
//                   placeholder="Where are you going?"
//                   value={destination}
//                   onChange={handleDestinationChange}
//                   className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-affoda-blue"
//                 />
//               </div>
//             </div>

//             {/* Date Range Picker */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Check-in / Check-out
//               </label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className={cn(
//                       "w-full justify-start text-left h-12 font-normal border border-gray-300",
//                       !dateRange?.from && "text-gray-400"
//                     )}
//                   >
//                     <CalendarIcon className="mr-3 h-5 w-5 text-gray-400" />
//                     {dateRange?.from ? (
//                       dateRange.to ? (
//                         <>
//                           {format(dateRange.from, "MMM dd, yyyy")} - {format(dateRange.to, "MMM dd, yyyy")}
//                         </>
//                       ) : (
//                         format(dateRange.from, "MMM dd, yyyy")
//                       )
//                     ) : (
//                       <span>Select dates</span>
//                     )}
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="range"
//                     selected={dateRange}
//                     onSelect={setDateRange}
//                     numberOfMonths={2}
//                     pagedNavigation
//                     disabled={(date) => date < new Date()}
//                     autoFocus
//                     className={cn("p-3")}
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Rooms and Guests */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Rooms & Guests
//               </label>
//               <Popover open={isGuestPopoverOpen} onOpenChange={setIsGuestPopoverOpen}>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-left h-12 font-normal border border-gray-300"
//                   >
//                     <Users className="mr-3 h-5 w-5 text-gray-400" />
//                     <span>
//                       {rooms} {rooms === 1 ? "room" : "rooms"}, {adults} {adults === 1 ? "adult" : "adults"}
//                       {children > 0 && `, ${children} ${children === 1 ? "child" : "children"}`}
//                     </span>
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-80">
//                   <div className="space-y-4 p-2">
//                     {/* Rooms */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <Building className="h-5 w-5 text-gray-500 mr-2" />
//                         <span>Rooms</span>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <Button 
//                           type="button" 
//                           variant="outline" 
//                           size="icon" 
//                           className="h-8 w-8 rounded-full"
//                           onClick={decrementRooms}
//                           disabled={rooms <= 1}
//                         >
//                           -
//                         </Button>
//                         <span className="w-6 text-center">{rooms}</span>
//                         <Button 
//                           type="button" 
//                           variant="outline" 
//                           size="icon" 
//                           className="h-8 w-8 rounded-full"
//                           onClick={incrementRooms}
//                           disabled={rooms >= 10}
//                         >
//                           +
//                         </Button>
//                       </div>
//                     </div>
                    
//                     {/* Adults */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <Users className="h-5 w-5 text-gray-500 mr-2" />
//                         <span>Adults</span>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <Button 
//                           type="button" 
//                           variant="outline" 
//                           size="icon" 
//                           className="h-8 w-8 rounded-full"
//                           onClick={decrementAdults}
//                           disabled={adults <= 1}
//                         >
//                           -
//                         </Button>
//                         <span className="w-6 text-center">{adults}</span>
//                         <Button 
//                           type="button" 
//                           variant="outline" 
//                           size="icon" 
//                           className="h-8 w-8 rounded-full"
//                           onClick={incrementAdults}
//                           disabled={adults >= 30}
//                         >
//                           +
//                         </Button>
//                       </div>
//                     </div>
                    
//                     {/* Children */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="flex items-center">
//                           <Users className="h-5 w-5 text-gray-500 mr-2" />
//                           <span>Children</span>
//                         </div>
//                         <p className="text-xs text-gray-500 ml-7">Ages 0-17</p>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <Button 
//                           type="button" 
//                           variant="outline" 
//                           size="icon" 
//                           className="h-8 w-8 rounded-full"
//                           onClick={decrementChildren}
//                           disabled={children <= 0}
//                         >
//                           -
//                         </Button>
//                         <span className="w-6 text-center">{children}</span>
//                         <Button 
//                           type="button" 
//                           variant="outline" 
//                           size="icon" 
//                           className="h-8 w-8 rounded-full"
//                           onClick={incrementChildren}
//                           disabled={children >= 10}
//                         >
//                           +
//                         </Button>
//                       </div>
//                     </div>
                    
//                     <Button 
//                       type="button" 
//                       className="w-full bg-affoda-blue hover:bg-affoda-blue/90"
//                       onClick={() => setIsGuestPopoverOpen(false)}
//                     >
//                       Done
//                     </Button>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Search Button */}
//             <Button 
//               type="submit" 
//               className="w-full bg-affoda-yellow hover:bg-affoda-yellow/90 text-affoda-blue font-bold py-3 h-auto text-lg"
//             >
//               <Search className="mr-2 h-5 w-5" />
//               Search Hotels
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default BookingForm;