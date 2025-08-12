import { Card, CardContent, CardFooter } from '@/components/ui/card';

import { Tag } from 'lucide-react';
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
    <div className=' mt-8'>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
        className='w-full overflow-hidden'
      >
        <CarouselContent>
          {packages.length > 0 &&
            packages.map((data) => (
              <CarouselItem key={data.id} className='basis-[27%] shrink-0'>
                <Card
                  className='h-64 bg-cover bg-center rounded-xl shadow-lg hover:border-2 border-orange-700 '
                  style={{ backgroundImage: `url(${data.imageUrl.src})` }}
                >
                  <CardContent className='h-screen '>
                    <div className=' h-full flex items-end '>
                      <div className='text-white font-medium text-2xl  w-64'>
                        {' '}
                        {data.title}
                      </div>
                    </div>
                    <div className='text-white flex items-center text-xs'>
                      <Tag className='h-4' />
                      <span>{data.startingPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselItems;
