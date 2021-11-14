import React from 'react'

import Img from 'components/shared/Image/Img'

const ImageOrLink = ({ src, alt }) => {
  return <Img media={{ url: src }} alt={alt} />
}

export default ImageOrLink
