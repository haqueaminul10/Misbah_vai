import FilterSection from '@/components/filter';
import Packages from '@/components/packages';
import Venus from '@/components/venus';

export default function Home() {
  return (
    <div className='mx-16 my-8'>
      <FilterSection />
      <Packages />
      {/* <Venus /> */}
    </div>
  );
}
