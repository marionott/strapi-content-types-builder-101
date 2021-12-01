import Image, { ImageProps } from '~/components/shared/Image'

interface ImageOrLinkProps {
  src: ImageProps['src']
  alt: ImageProps['alt']
}

const ImageOrLink = ({ src, alt }: ImageOrLinkProps) => {
  return <Image src={src} alt={alt} />
}

export default ImageOrLink
