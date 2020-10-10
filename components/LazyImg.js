import React, { useEffect, useRef, useState } from 'react'

export default function LazyImg({ tinyImgSrc, imgSrc, className, alt }) {
  const [bgImgSrc, setBgImgSrc] = useState(null);
  const image = useRef()
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = imgSrc.src;
    imageLoader.onload = () => {
      setBgImgSrc(imgSrc.src);
    };

  }, [])
  return (
    <img src={bgImgSrc || tinyImgSrc.src} alt={alt || 'image'}
      className={`${className} ${bgImgSrc === null ? 'blur' : ''}`}
      ref={image}
    />
  )
}
