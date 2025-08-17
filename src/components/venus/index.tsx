import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';
import VenusCarousel from './venusCarousel';

const Venus = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='text-lg font-semibold '>
            <section className='flex items-center justify-between'>
              <h2 className='text-3xl font-medium'>Venus</h2>

              <Button variant='secondary'>
                See All
                <MoveRight />
              </Button>
            </section>
          </CardTitle>

          {/* Venus carousel  section */}
          <CardDescription className='w-full overflow-hidden relative '>
            <VenusCarousel />
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Venus;
