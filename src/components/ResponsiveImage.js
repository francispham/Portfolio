import React from 'react'

const ResponsiveImage = ({ fluid, alt, className, loading = 'lazy' }) => (
  <picture className={className}>
    {fluid.srcSetWebp && (
      <source type="image/webp" srcSet={fluid.srcSetWebp} sizes={fluid.sizes} />
    )}
    <img
      src={fluid.src}
      srcSet={fluid.srcSet}
      sizes={fluid.sizes}
      alt={alt}
      loading={loading}
      decoding="async"
    />
  </picture>
)

export default ResponsiveImage
