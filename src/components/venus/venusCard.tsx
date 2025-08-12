import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { CarouselPrevious, CarouselNext } from '../ui/carousel';
import type { Venue } from './venusCarousel';
import { Plus, MapPin, Star, Tag } from 'lucide-react';
import Image from 'next/image';

interface VenusCardProps {
  data: Venue;
}

const VenusCard = ({ data }: VenusCardProps) => {
  return (
    <Card className='group p-0 bg-cover bg-center rounded-xl shadow-lg hover:border-2 hover:border-orange-700'>
      <CardHeader className='h-full p-2 relative'>
        {/* Image section */}
        <div className='relative w-full h-48 rounded-xl overflow-hidden '>
          <Image
            src={data.imageUrl}
            fill
            alt={data.label}
            className='object-cover w-full h-full rounded-xl'
          />
        </div>

        <div className='absolute grid grid-cols-2 h-full w-full p-4'>
          <div className='  '>
            <span className='bg-orange-600 text-white px-2 py-1 rounded-xl'>
              {' '}
              {data.deals}
            </span>
          </div>
          <div className=' flex justify-end text-white '>
            {' '}
            <Plus className='bg-gray-400 p-2 rounded-2xl h-8 w-8' />
          </div>
          <div className=' flex items-end text-white'>
            <div className='flex items-center gap-2'>
              <MapPin className='h-4 w-4' />
              <span> {data.location}</span>
            </div>
          </div>
          <div className=' flex justify-end items-end mr-1 '>
            <Star className='w-4 h-4 fill-yellow-500 text-yellow-500' />
            <span className='text-white'>
              {data.rating}({data.review})
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className=' p-2'>
        {/* Name */}
        <h2 className='text-lg font-semibold '>{data.label}</h2>
        {/* Tags section */}

        <div className='flex gap-4 my-2'>
          {data.tags.length > 0 &&
            data.tags.slice(0, 2).map((tag, index) => (
              <div key={index} className=' bg-gray-200 p-1 px-2 rounded-lg'>
                {tag}
              </div>
            ))}

          {data.tags.length > 2 && (
            <div className=' bg-gray-200 p-1 px-2 rounded-lg'>
              +{data.tags.length - 2}
            </div>
          )}
        </div>

        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-2'>
            <Tag className='w-4 h-4' /> {data.rent}
          </div>
          <div className='flex items-center gap-2'>
            <Star className='w-4 h-4 fill-yellow-500 text-yellow-500' />
            <span>
              {data.rating}({data.review})
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VenusCard;
