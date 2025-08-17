import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import imageVenue from './venus.jpg';
import VenusCard from './venusCard';

//type
export interface Venue {
  id: number;
  imageUrl: any;
  deals: string;
  location: string;
  rating: number;
  review: number;
  label: string;
  tags: string[];
  rent: string;
}

const venus: Venue[] = [
  {
    id: 1,
    imageUrl: imageVenue,
    deals: 'Deals of the week',
    location: 'Sec-11,Mirpur,Dhaka',
    rating: 4.5,
    review: 32,
    label: 'The Vila at Mandeville',
    tags: ['Banquet Hall', '300-400pax', 'others', 'others'],
    rent: ' Starting from Tk 23,000',
  },
  {
    id: 2,
    imageUrl: imageVenue,
    deals: 'Deals of the week',
    location: 'Sec-11,Mirpur,Dhaka',
    rating: 4.5,
    review: 32,
    label: 'The Vila at Mandeville',
    tags: ['Banquet Hall', '300-400pax', 'others', 'others'],
    rent: ' Starting from Tk 23,000',
  },
  {
    id: 3,
    imageUrl: imageVenue,
    deals: 'Deals of the week',
    location: 'Sec-11,Mirpur,Dhaka',
    rating: 4.5,
    review: 32,
    label: 'The Vila at Mandeville',
    tags: ['Banquet Hall', '300-400pax', 'others', 'others'],
    rent: ' Starting from Tk 23,000',
  },
  {
    id: 4,
    imageUrl: imageVenue,
    deals: 'Deals of the week',
    location: 'Sec-11,Mirpur,Dhaka',
    rating: 4.5,
    review: 32,
    label: 'The Vila at Mandeville',
    tags: ['Banquet Hall', '300-400pax', 'others', 'others'],
    rent: ' Starting from Tk 23,000',
  },
  {
    id: 5,
    imageUrl: imageVenue,
    deals: 'Deals of the week',
    location: 'Sec-11,Mirpur,Dhaka',
    rating: 4.5,
    review: 32,
    label: 'The Vila at Mandeville',
    tags: ['Banquet Hall', '300-400pax', 'others', 'others'],
    rent: ' Starting from Tk 23,000',
  },
  {
    id: 6,
    imageUrl: imageVenue,
    deals: 'Deals of the week',
    location: 'Sec-11,Mirpur,Dhaka',
    rating: 4.5,
    review: 32,
    label: 'The Vila at Mandeville',
    tags: ['Banquet Hall', '300-400pax', 'others', 'others'],
    rent: ' Starting from Tk 23,000',
  },
];

const VenusCarousel = () => {
  return (
    <div className='mt-8'>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
      >
        <CarouselContent>
          {venus &&
            venus.map((venue) => (
              <CarouselItem
                key={venue.id}
                className=' 2xl:basis-[24%] xl:basis-[28%]  shrink-0'
              >
                <VenusCard data={venue} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md text-black hover:bg-gray-200' />
        <CarouselNext className='absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md text-black hover:bg-gray-200' />
      </Carousel>
    </div>
  );
};

export default VenusCarousel;
