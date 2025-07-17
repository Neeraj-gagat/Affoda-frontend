
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
            <section className="pb-16 pt-32 md:pb-24 bg-gradient-to-b from-affoda-blue to-affoda-blue/80 text-white relative overflow-hidden" style={{backgroundImage: "url(https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)", backgroundSize: "cover", backgroundPosition: "center",backgroundBlendMode: "overlay"}} >
            {/* Alternative Maldives background options (uncomment to use):
                
                Beautiful overwater bungalows:
                src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                
                Crystal clear turquoise waters:
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                
                Tropical beach with palm trees:
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                
                Maldives resort aerial view:
                src="https://images.unsplash.com/photo-1571513722275-4b3ba1000481?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                
                Sunset over Maldives lagoon:
                src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                
                Maldives water villa deck:
                src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                
                Tropical island from above:
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                
                Maldives beach swing:
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            */}
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