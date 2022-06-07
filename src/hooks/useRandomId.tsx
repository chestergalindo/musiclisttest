import { useState, useEffect } from 'react';

export const useRandomId = (superiorEdge: number) => {
  const [idx, setIdx] = useState(0);

  const setRandomId = () => {
    const randomId: number = Math.floor(Math.random() * superiorEdge);
    setIdx(randomId);
  };

  useEffect(() => {
    setRandomId();
  }, [superiorEdge]);

  return { idx, setIdx, setRandomId };
};
