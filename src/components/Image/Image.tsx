import React from 'react';

interface IImage {
  imagePath: string;
  alt: string;
  className: string;
}

export const Image: React.FC<IImage> = (props) => {
  const { imagePath, alt, className } = props;
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
      alt={alt}
      className={className}
    />
  );
};
