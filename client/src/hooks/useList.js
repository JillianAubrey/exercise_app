import { useState } from 'react'

export default function useList(list, initialIndex, onLast) {
  const [index, setIndex] = useState(initialIndex);

  const previous = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  }

  const next = () => {
    if (index < list.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      onLast();
    }
  }
 
  return [
    list[index],
    previous,
    next
  ];
};