import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon, Plus, Minus, Check, X } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

//type
interface FilterItem {
  id: number;
  label: string;
  options?: (string | number)[];
}

//data
const filterItemsArray: FilterItem[] = [
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
  const [selectedOptions, setSelectedOptions] = useState<
    { category: string; option: string | number }[]
  >([]);

  const visibleItems = showAll
    ? filterItemsArray
    : filterItemsArray.slice(0, 5);

  const handleOptionClick = (category: string, option: string | number) => {
    setSelectedOptions((prev) => {
      const filtered = prev.filter((item) => item.category !== category);

      return [...filtered, { category, option }];
    });
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
  };

  const handleRemoveOption = (category: string) => {
    setSelectedOptions((prev) =>
      prev.filter((item) => item.category !== category)
    );
  };

  return (
    <div>
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
                    className={`group flex items-center justify-between cursor-pointer px-2 py-1 rounded w-full hover:bg-gray-100 ${
                      selectedOptions.some(
                        (sel) =>
                          sel.category === item.label && sel.option === option
                      )
                        ? 'bg-gray-200'
                        : ''
                    }`}
                    onClick={() => handleOptionClick(item.label, option)}
                  >
                    <span>{option}</span>
                    <Check
                      className={`h-4 w-4 ${
                        selectedOptions.some(
                          (sel) =>
                            sel.category === item.label && sel.option === option
                        )
                          ? 'block text-gray-700'
                          : 'hidden group-hover:block text-gray-500'
                      }`}
                    />
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

      {/* Render selected options with a clear button */}
      {selectedOptions.length > 0 && (
        <div className='mt-4 flex flex-wrap gap-2 items-center'>
          {selectedOptions.map((sel, idx) => (
            <div
              key={idx}
              className='flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full'
            >
              <span>{sel.option}</span>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => handleRemoveOption(sel.category)}
                className='p-0 h-5 w-5'
              >
                <X className='h-4 w-4' />
              </Button>
            </div>
          ))}
          <p
            onClick={handleClearAll}
            className='text-blue-500 underline font-semibold text-lg cursor-pointer'
          >
            Clear All
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterItems;
