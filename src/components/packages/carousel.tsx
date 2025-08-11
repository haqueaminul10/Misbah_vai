import type { PackageType } from './index';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CarouselProps {
  data: PackageType[];
}

const CarouselItems = ({ data }: CarouselProps) => {
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
          {data.length > 0 &&
            data.map((pac) => (
              <CarouselItem key={pac.id} className='basis-[30%] shrink-0'>
                <Card>card</Card>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselItems;
