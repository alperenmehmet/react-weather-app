import React from 'react';

export const dateMapper = () => {
  const newDate = new Date(props.date);
  const day = newDate.toLocaleString('en-US', { day: '2-digit' });
  const month = newDate.toLocaleString('en-US', { month: '2-digit' });
  const year = newDate.getFullYear();

  return `${day} ${month} ${year}`;
};
