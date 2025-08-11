import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import CarouselItems from './carousel';

const Packages = () => {
  return (
    <div className='m-6'>
      <section className='flex items-center justify-between'>
        <h2 className='text-3xl font-medium'>Packages</h2>

        <Button variant='secondary'>
          See All
          <MoveRight />
        </Button>
      </section>
      <CarouselItems />
    </div>
  );
};

export default Packages;
