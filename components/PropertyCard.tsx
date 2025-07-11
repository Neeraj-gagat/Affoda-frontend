

import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface PropertyCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  discountPercentage?: number;
  reviewCount: number;
}

const PropertyCard = ({
  image,
  name,
  location,
  rating,
  price,
  discountPercentage,
  reviewCount,
}: PropertyCardProps) => {
  const discountedPrice = discountPercentage
    ? price - (price * discountPercentage) / 100
    : price;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover"
        />
        {discountPercentage && (
          <Badge className="absolute top-2 right-2 bg-affoda-yellow text-affoda-blue font-medium">
            {discountPercentage}% OFF
          </Badge>
        )}
      </div>
      <CardContent className="pt-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
          <div className="flex items-center bg-affoda-blue text-white rounded px-2 py-1">
            <Star className="h-4 w-4 fill-affoda-yellow stroke-affoda-yellow mr-1" />
            <span className="text-sm font-bold">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 mt-1">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-4 flex items-baseline">
        {discountPercentage && (
          <span className="text-gray-400 line-through mr-2 text-sm">
            ${price}
          </span>
        )}
        <span className="text-affoda-blue font-bold text-lg">
          ${discountedPrice.toFixed(0)}
        </span>
        <span className="text-gray-500 text-sm ml-1">per night</span>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;