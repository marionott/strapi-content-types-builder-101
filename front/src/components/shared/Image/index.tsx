import css from './styles.module.scss'
import classnames from 'classnames/bind'
import NextImage, {
  ImageLoaderProps as NextImageLoaderProps,
  ImageProps as NextImageProps,
} from 'next/image'
import { forwardRef, RefObject } from 'react'

const cx = classnames.bind(css)

export interface ImageProps extends NextImageProps {
  forcedRatio?: number
  fluid?: boolean
}

export const imageLoader = ({ src, width, quality }: NextImageLoaderProps) => {
  return `${src}?auto=compress,format&fit=max&w=${width}&q=${quality || 40}`
}

function Image(
  {
    layout,
    forcedRatio,
    fluid,
    width,
    height,
    className,
    ...props
  }: ImageProps,
  ref: RefObject<HTMLDivElement>
) {
  const ratioStyle = !fluid
    ? {
        paddingBottom: `${
          forcedRatio
            ? forcedRatio * 100
            : (Number(height) / Number(width)) * 100
        }%`,
      }
    : {}

  return props.src ? (
    <div ref={ref} className={className}>
      <div className={cx(css.ratio, { fluid })} style={ratioStyle}>
        <NextImage
          layout={layout}
          {...(layout === 'fill' ? {} : { width, height })}
          loader={imageLoader}
          {...props}
        />
      </div>
    </div>
  ) : null
}

export default forwardRef<HTMLDivElement, ImageProps>(Image)
