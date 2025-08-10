import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Location from '../location';
import FilterItems from './filter-items';

const FilterSection = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='text-lg font-semibold '>Filters</CardTitle>

          {/* Filter Items section */}
          <CardDescription>
            <FilterItems />
          </CardDescription>

          {/* Location selector */}
          <CardAction>
            <Location />
          </CardAction>
        </CardHeader>

        {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}

        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default FilterSection;
