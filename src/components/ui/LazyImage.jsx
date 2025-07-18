import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt, className, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`lazy-image-container ${className}`}>
      {inView ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="bg-gray-700 rounded-lg animate-pulse" style={{ width, height }} />
      )}
    </div>
  );
};

export default LazyImage;