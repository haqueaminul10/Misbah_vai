import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon, Plus, Minus, Check } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const filterItemsArray = [
  { id: 1, label: 'Sort By' },
  {
    id: 2,
    label: 'Guest Capacity',
    options: ['150-200 guest', '200-400 guest', '500-600 guest'],
  },
  { id: 3, label: 'Distance' },
  { id: 4, label: 'Outdoor Space', options: [200, 400, 600, 800, 1000] },
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
      {visibleItems.map((item) =>
        item.options ? (
          // Show HoverCard if options exist
          <HoverCard key={item.id}>
            <HoverCardTrigger asChild>
              <Button variant='outline' className='rounded-4xl'>
                {item.label}
                <ChevronDownIcon className='ml-2 h-4 w-4' />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent
              className='w-[var(--radix-hover-card-trigger-width)] p-0'
              align='start'
              sideOffset={4}
            >
              {item.options.map((option, idx) => (
                <div
                  key={idx}
                  className='group flex items-center justify-between cursor-pointer px-2 py-1 rounded w-full hover:bg-gray-100'
                >
                  <span>{option}</span>
                  <Check className='h-4 w-4 hidden group-hover:block text-gray-500' />
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>
        ) : (
          // Just a button if no options
          <div key={item.id}>
            <Button variant='outline' className='rounded-4xl'>
              {item.label}
              <ChevronDownIcon className='ml-2 h-4 w-4' />
            </Button>
          </div>
        )
      )}

      {filterItemsArray.length > 5 && (
        <Button
          variant='outline'
          className='rounded-4xl'
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? (
            <>
              <Minus className='mr-1 h-4 w-4' /> Show Less
            </>
          ) : (
            <>
              <Plus className='mr-1 h-4 w-4' /> Show More
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default FilterItems;
