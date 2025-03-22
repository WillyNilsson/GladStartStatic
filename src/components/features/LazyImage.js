import React, { useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`lazy-image-container ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className="lazy-image"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="lazy-image-loader">
          <div className="lazy-image-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
