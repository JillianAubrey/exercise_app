import { useState, useRef, useEffect } from 'react'

export default function useList(list, initialIndex, onLast) {
  const index = useRef(initialIndex || 0);
  const [value, setValue] = useState(list[index.current])


  const previous = () => {
    if (index.current > 0) {
      index.current = index.current - 1;
      setValue(list[index.current]);
    }
  }

  const next = () => {
    if (index.current < list.length - 1) {
      index.current = index.current + 1;
      setValue(list[index.current]);
    } else {
      onLast();
    }
  }
 
  return [
    value,
    previous,
    next
  ];
};