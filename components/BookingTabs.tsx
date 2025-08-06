"use client"
import React, { useState } from 'react';
// import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Plane, 
  Car, 
  MapPin
} from 'lucide-react';
import BookingForm from './BookingForm';
// import AgodaWidget from './AgodaWidget';

const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState('hotels');

  const tabs = [
    { id: 'hotels', label: 'Hotels', icon: Building, available: true },
    { id: 'flights', label: 'Flights', icon: Plane, available: true },
    { id: 'cars', label: 'Car Rental', icon: Car, available: false },
    { id: 'activities', label: 'Activities', icon: MapPin, available: false }
  ];

  return (
    <div className="bg-transparent rounded-lg shadow-xl overflow-hidden">
      {/* Tab Navigation */}
      <div className='flex justify-center bg-transparent -translate-y-2 md:translate-y-4 pt-2.5  md:pt-0 '>
      <div className="flex md:border-b w-[550px] md:shadow-xl mx-auto bg-transparent md:bg-white rounded-lg z-50 gap-2 md:gap-0">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1  flex flex-col gap-2 md:flex-row items-center justify-center py-2 md:py-3.5 px-2 md:px-4 relative rounded-md ${
                activeTab === tab.id
                  ? 'md:bg-blue-600 text-blue-600 bg-white md:text-white'
                  : 'bg-black/20 md:bg-gray-50 text-gray-100 md:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <IconComponent className="h-5 w-5" />
              <span className="font-[600] md:font-[600] text-[11px] md:text-[13px] items-center">{tab.label}</span>
            </button>
          );
        })}
      </div>
      </div>
      
      <div className='bg-white rounded-t-xl'>
      <div className="p-6">
        {activeTab === 'hotels' && (
          <div>
            <p className='text-gray-700 text-[13px] md:text-[14px] font-[500] pb-1 md:pb-2'>Destination</p>
            {/* <div className="flex space-x-2 mb-6">
              <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Overnight Stays
              </button>
              <button className="px-4 py-2 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100">
                Day Use Stays
              </button>
            </div> */}
            
            <BookingForm />
            {/* <AgodaWidget/> */}
          </div>
        )}
        
        {activeTab !== 'hotels' && (
          <div className="text-center py-12">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {activeTab === 'flights' && <Plane className="h-8 w-8 text-blue-600" />}
                {activeTab === 'cars' && <Car className="h-8 w-8 text-blue-600" />}
                {activeTab === 'activities' && <MapPin className="h-8 w-8 text-blue-600" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {activeTab === 'flights' && 'Flight Search Coming Soon'}
                {activeTab === 'cars' && 'Car Rental Coming Soon'}
                {activeTab === 'activities' && 'Activities Coming Soon'}
              </h3>
              <p className="text-gray-500">
                {activeTab === 'flights' && "We're working on bringing you the best flight deals."}
                {activeTab === 'cars' && "We're working on bringing you the best car rental deals."}
                {activeTab === 'activities' && "We're working on bringing you the best activity deals."}
              </p>
            </div>
          </div>
        )}
      </div>
      </div>
      {/* Tab Content */}
      
    </div>
  );
};

export default BookingTabs;
