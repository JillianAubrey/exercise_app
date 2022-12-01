import { useState, useRef } from 'react'

export default function useList(list, initialIndex) {
  const index = useRef(initialIndex || 0);
  const [value, setValue] = useState(list[index.current])


  const previous = () => {
    if (!isFirst()) {
      index.current = index.current - 1;
      setValue(list[index.current]);
    }
  }

  const next = () => {
    if (!isLast()) {
      index.current = index.current + 1;
      setValue(list[index.current]);
    }
  }

  const isFirst = () => index.current === 0

  const isLast = () => index.current === list.length - 1
 
  return [
    value,
    previous,
    next,
    isFirst,
    isLast
  ];
};