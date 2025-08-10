const Location = () => {
  return (
    <div className='flex items-center gap-1'>
      <div className='text-base font-medium'>Location:</div>
      <div>
        <select name='' id='' className='text-base '>
          <option value=''>Dhaka</option>
          {/* <option value=''>Khulna</option> */}
        </select>
      </div>
    </div>
  );
};

export default Location;
