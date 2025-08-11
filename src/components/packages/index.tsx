import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import CarouselItems from './carousel';

//type
export interface PackageType {
  id: number;
  title: string;
  imageUrl: string;
  startingPrice: string;
  capacityOptions?: number[];
}

const packages: PackageType[] = [
  {
    id: 1,
    title: 'Birthday',
    imageUrl: '',
    startingPrice: 'Tk 23,000',
  },
  {
    id: 2,
    title: 'Date and Anniversary Packages',
    imageUrl: '',
    startingPrice: 'Tk 23,000',
    capacityOptions: [800, 1000, 1500, 2000],
  },
  {
    id: 3,
    title: 'Wedding Packages',
    imageUrl: '',
    startingPrice: 'Tk 23,000',
  },
  {
    id: 4,
    title: 'Corporate Packages',
    imageUrl: '',
    startingPrice: 'Tk 23,000',
  },
  {
    id: 5,
    title: 'Corporate Packages',
    imageUrl: '',
    startingPrice: 'Tk 23,000',
  },
];
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
      <CarouselItems data={packages} />
    </div>
  );
};

export default Packages;
