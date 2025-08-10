import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon, Plus, Minus } from 'lucide-react';

const filterItemsArray = [
  { id: 1, label: 'Sort By' },
  { id: 2, label: 'Guest Capacity' },
  { id: 3, label: 'Distance' },
  { id: 4, label: 'Outdoor Space' },
  { id: 5, label: 'Venue Amenities' },
  { id: 6, label: 'test1' },
  { id: 7, label: 'test2' },
  { id: 8, label: 'test3' },
];

const FilterItems = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? filterItemsArray
    : filterItemsArray.slice(0, 5);

  return (
    <div className='flex gap-2 flex-wrap'>
      {visibleItems.map((item) => (
        <div key={item.id}>
          <Button variant='outline' className='rounded-4xl'>
            {item.label}
            <ChevronDownIcon />
          </Button>
        </div>
      ))}

      {filterItemsArray.length > 5 && (
        <div>
          <Button
            variant='outline'
            className='rounded-4xl'
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <>
                <Minus /> Show Less
              </>
            ) : (
              <>
                <Plus /> Show More
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterItems;
