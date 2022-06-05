import { useState } from 'react';

export const useCommonData = () => {
  const [image, setImage] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');

  return { image, setImage, rating, setRating, name, setName };
};
