
import { 
    // Globe, 
    // Wifi, 
    // ParkingCircle, 
    // Utensils,
    // ChevronRight,
    // Bed
  } from 'lucide-react';
import BookingTabs from './BookingTabs';

export const Hero  = () => {
    return <div>
        <div className="flex flex-col md:min-h-screen">
            <section className="pb-16 pt-32 md:pb-24 bg-gradient-to-b from-affoda-blue to-affoda-blue/80 text-white relative overflow-hidden" style={{backgroundImage: "url(bg-hero.jpeg)", backgroundSize: "cover", backgroundPosition: "center",backgroundBlendMode: "overlay"}} >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* <div className="text-center mb-8 md:mb-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Perfect Hotel</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Search deals on hotels and accommodations worldwide...
              </p>
            </div> */}

             {/* Hotel Booking Form */}
             <div className="max-w-5xl mx-auto">
              {/* <div className="bg-white/20 backdrop-blur-sm p-1 mb-6 inline-flex rounded-lg">
                <div className="bg-white text-affoda-blue px-4 py-2 rounded-md flex items-center font-medium">
                  <Bed className="h-4 w-4 mr-2" />
                  Hotels
                </div>
              </div> */}
              <BookingTabs />
            </div>
          </div>
            </section>
        </div>
    </div>
}