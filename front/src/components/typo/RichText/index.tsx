import ImageOrLink from './ImageOrLink'
import css from './styles.module.scss'
import classnames from 'classnames/bind'
import HtmlToReact from 'html-to-react'
import React from 'react'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'
import Image from '~/components/shared/Image'
import TypoComponentWrapper, {
  TypoComponentWrapperProps,
} from '~/components/typo/TypoComponentWrapper'

const cx = classnames.bind(css)

interface RichTextProps extends TypoComponentWrapperProps {
  text?: string
  markdownProps?: ReactMarkdownProps
  links?: any
  linksTheme?: TypoComponentWrapperProps['theme']
  replace?: boolean
  carriageReturn?: boolean
}

export default function RichText({
  className,
  tag = 'p',
  text,
  markdownProps,
  children,
  links,
  linksTheme,
  forwardRef,
  replace,
  carriageReturn,
  ...rest
}: RichTextProps) {
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)
  const parseHtml = htmlParser({
    isValidNode: () => true,
    processingInstructions: [
      {
        shouldProcessNode(node) {
          return node.name === 'img'
        },
        processNode(node) {
          const { src, alt } = node.attribs
          return <Image src={src} alt={alt} />
        },
      },
      {
        shouldProcessNode() {
          return true
        },
        processNode: processNodeDefinitions.processDefaultNode,
      },
    ],
  })

  const textWithHtmlLineBreak = text ? text.replace(/\n/g, '<br>') : ''

  return (
    <TypoComponentWrapper
      className={cx(css.RichText, className, {
        [`${linksTheme}Links`]: linksTheme,
      })}
      forwardRef={forwardRef}
      tag={tag}
      {...rest}
    >
      <ReactMarkdown
        source={carriageReturn ? textWithHtmlLineBreak : text}
        escapeHtml={false}
        renderers={{
          image: ImageOrLink,
        }}
        astPlugins={[parseHtml]}
        {...markdownProps}
      />
      {children}
    </TypoComponentWrapper>
  )
}
