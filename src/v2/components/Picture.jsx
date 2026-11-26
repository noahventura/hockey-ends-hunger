import React from 'react';

const mime = (fmt) => (fmt === 'jpg' || fmt === 'jpeg' ? 'image/jpeg' : `image/${fmt}`);

// renders a vite-imagetools `as=picture` import with avif and webp sources and a jpg fallback
const Picture = ({ photo, pic, alt, sizes = '100vw', priority = false, className = '', style, pos }) => {
  const p = pic || photo.pic;
  return (
    <picture>
      {Object.entries(p.sources).map(([fmt, srcSet]) => (
        <source key={fmt} type={mime(fmt)} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={p.img.src}
        width={p.img.w}
        height={p.img.h}
        alt={alt ?? photo?.alt ?? ''}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={className}
        style={{ objectPosition: pos ?? photo?.pos, ...style }}
      />
    </picture>
  );
};

export default Picture;
