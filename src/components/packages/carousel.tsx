import { Card, CardContent } from '@/components/ui/card';
import { MoveRight, Tag } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import imageBirthday from '../packages/assets/birthday.jpg';
import imageCorporate from '../packages/assets/corporate.png';
import imageDateAnniversary from '../packages/assets/date&aniversary.png';
import imageWedding from '../packages/assets/weeding.png';

//type
interface PackageType {
  id: number;
  title: string;
  imageUrl: any;
  startingPrice: string;
  capacityOptions?: number[];
}

const packages: PackageType[] = [
  {
    id: 1,
    title: 'Birthday',
    imageUrl: imageBirthday,
    startingPrice: 'Starting price Tk 23,000',
  },
  {
    id: 2,
    title: 'Date and Anniversary Packages',
    imageUrl: imageCorporate,
    startingPrice: 'Starting price Tk 23,000',
    capacityOptions: [800, 1000, 1500, 2000],
  },
  {
    id: 3,
    title: 'Wedding Packages',
    imageUrl: imageWedding,
    startingPrice: 'Starting price Tk 23,000',
  },
  {
    id: 4,
    title: 'Corporate Packages',
    imageUrl: imageDateAnniversary,
    startingPrice: 'Starting price Tk 23,000',
  },
  {
    id: 5,
    title: 'Corporate Packages',
    imageUrl: imageDateAnniversary,
    startingPrice: 'Starting price Tk 23,000',
  },
];

const CarouselItems = () => {
  return (
    <div className='mt-8'>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
        className='w-full overflow-hidden relative'
      >
        <CarouselContent>
          {packages.length > 0 &&
            packages.map((data) => (
              <CarouselItem
                key={data.id}
                className='
                  basis-[90%] xs:basis-[70%] sm:basis-[48%] md:basis-[32%] lg:basis-[27%]
                  shrink-0 px-1
                '
              >
                <Card
                  className='
                    group h-48 xs:h-56 sm:h-60 md:h-64
                    bg-cover bg-center rounded-xl shadow-lg
                    hover:border-2 hover:border-orange-700
                  '
                  style={{ backgroundImage: `url(${data.imageUrl.src})` }}
                >
                  <CardContent className='h-full'>
                    <div className='h-full flex items-end justify-between'>
                      <div className='text-white font-medium text-base xs:text-lg sm:text-xl md:text-2xl w-40 xs:w-48 sm:w-56 md:w-64'>
                        {data.title}
                      </div>
                      <div className='border-2 border-orange-700 p-1 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                        <MoveRight />
                      </div>
                    </div>
                    <div className='text-white flex items-center text-xs sm:text-sm mt-1'>
                      <Tag className='h-4' />
                      <span className='ml-1'>{data.startingPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-1 xs:left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 bg-white rounded-full shadow-md text-black hover:bg-gray-200' />
        <CarouselNext className='absolute right-1 xs:right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 bg-white rounded-full shadow-md text-black hover:bg-gray-200' />
      </Carousel>
    </div>
  );
};

export default CarouselItems;
