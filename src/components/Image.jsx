import React from "react";
import { IKImage } from "imagekitio-react";

export default function Image({ scr, className, alt, w, h }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={scr}
      className={className}
      alt={alt}
      loading="lazy"
      height={w}
      width={h}
      lqip={{ active: true, quality: 20 }}
    ></IKImage>
  );
}
