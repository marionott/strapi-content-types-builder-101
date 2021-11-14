import classnames from 'classnames/bind'
import delve from 'dlv'
import React, { forwardRef } from 'react'
import Img from './Img'
import css from './styles.module.scss'

const cx = classnames.bind(css)

const Image = forwardRef(
  (
    {
      className,
      src,
      alt,
      media,
      format = 'large',
      loading = 'lazy',
      fit = 'cover',
      position = 'center',
      forcedRatio,
      fluid = false,
    },
    ref
  ) => {
    const width = delve(media, 'width', 0)
    const height = delve(media, 'height', 0)

    const ratioStyle = !fluid
      ? {
          paddingBottom: `${
            forcedRatio ? forcedRatio * 100 : (height / width) * 100
          }%`,
        }
      : {}

    return media || src || fluid ? (
      <div className={className}>
        <div className={cx(css.ratio, { fluid })} style={ratioStyle}>
          <Img
            ref={ref}
            media={media}
            src={src}
            alt={alt}
            loading={loading}
            fit={fit}
            position={position}
            className={css.img}
            format={format}
          />
        </div>
      </div>
    ) : null
  }
)

Image.defaultProps = {}

export default Image
