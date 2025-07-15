import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import PropertyCard from "./PropertyCard";
import { Badge } from "./ui/badge";

const featuredProperties = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "Downtown, New York",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      rating: 9.2,
      price: 299,
      discountPercentage: 15,
      reviewCount: 458,
    },
    {
      id: 2,
      name: "Ocean View Resort & Spa",
      location: "Miami Beach, Florida",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      rating: 8.9,
      price: 399,
      reviewCount: 327,
    },
    {
      id: 3,
      name: "Mountain Retreat Lodge",
      location: "Aspen, Colorado",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      rating: 9.5,
      price: 499,
      discountPercentage: 20,
      reviewCount: 215,
    },
    {
      id: 4,
      name: "City Lights Boutique Hotel",
      location: "Chicago, Illinois",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      rating: 8.7,
      price: 249,
      reviewCount: 189,
    }
  ];
  
  // Sample destination data
  const popularDestinations = [
    {
      name: "New York",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      properties: 1423
    },
    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      properties: 985
    },
    {
      name: "London",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      properties: 1214
    }
  ];

export const FeraturedProp = () => {
    return <div>
                <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-[500] text-gray-900">Featured Properties</h2>
              <Button variant="ghost" className="text-affoda-blue font-medium">
                View all <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProperties.map(property => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Destinations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-affoda-yellow/20 text-affoda-blue hover:bg-affoda-yellow/20">Explore The World</Badge>
              <h2 className="text-3xl font-[500] text-gray-900 mb-4">Popular Destinations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most visited places with top-rated properties
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularDestinations.map((destination, index) => (
                <div 
                  key={index} 
                  className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="mb-3">{destination.properties} properties</p>
                    <Button 
                      className="bg-affoda-yellow text-affoda-blue hover:bg-affoda-yellow/90 font-medium mt-2"
                    >
                      Explore Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
}

