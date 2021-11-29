import React from 'react';

export const LocationList = () => {
  return (
    <div class='input-group mb-3'>
      <span class='input-group-text' id='basic-addon1'>
        <svg
          data-qa='searchIcon'
          xmlns='http://www.w3.org/2000/svg'
          class='icon-search search-icon'
          width='16'
          height='16'
          viewBox='0 0 16 16'
        >
          <path d='M15.784 13.68l-4.096-4.096c.585-.955.94-2.067.94-3.27a6.315 6.315 0 1 0-6.314 6.314 6.253 6.253 0 0 0 3.27-.937l4.096 4.094a.751.751 0 0 0 1.052 0l1.052-1.052a.75.75 0 0 0 0-1.053zm-9.47-3.157a4.21 4.21 0 1 1 0-8.419 4.21 4.21 0 0 1 0 8.42z'></path>
        </svg>
      </span>
      <input
        type='text'
        class='form-control'
        placeholder='Search Location'
        aria-label='location'
        aria-describedby='basic-addon1'
      />
      {/* <button class='btn btn-primary'>Select</button> */}
    </div>
  );
};
