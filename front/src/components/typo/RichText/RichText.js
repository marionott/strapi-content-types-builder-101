import classnames from 'classnames/bind'
import Img from 'components/shared/Image/Img'
import Typo from 'components/typo/Typo'
import HtmlToReact from 'html-to-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'
import ImageOrLink from './ImageOrLink'
import Script from './Script'
import css from './styles.module.scss'

const cx = classnames.bind(css)

const RichText = ({
  className,
  text,
  markdownProps,
  children,
  links,
  linksTheme,
  forwardRef,
  replace,
  carriageReturn,
  ...rest
}) => {
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
          return <Img media={{ url: src }} alt={alt} />
        },
      },
      {
        shouldProcessNode(node) {
          return node.name === 'script'
        },
        processNode(node) {
          const { attribs, children } = node

          return (
            <Script
              className={css.script}
              attribs={attribs}
              content={children[0] && children[0].data}
            />
          )
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
    <Typo
      className={cx(css.RichText, className, {
        [`${linksTheme}Links`]: linksTheme,
      })}
      forwardRef={forwardRef}
      {...rest}
    >
      <ReactMarkdown
        source={carriageReturn ? textWithHtmlLineBreak : text}
        escapeHtml={false}
        renderers={{
          heading: ({ level, children }) => {
            const Wrapper = `h${level}`
            return level === 2 ? (
              <RegisterSection
                id={children[0].key}
                tagName="h2"
                children={children}
              />
            ) : (
              <Wrapper>{children}</Wrapper>
            )
          },
          image: ImageOrLink,
        }}
        astPlugins={[parseHtml]}
        {...markdownProps}
      />
      {children}
    </Typo>
  )
}

RichText.defaultProps = {
  tag: 'div',
}

export default RichText
