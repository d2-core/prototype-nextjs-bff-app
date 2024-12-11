import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'
import Text from './Text'
import Flex from './Flex'

interface Props {
  children: ReactNode
  title?: string
  css?: SerializedStyles
}

function Section({ children, title, css }: Props) {
  return (
    <Flex
      as="section"
      css={[css, containerStyle]}
      align="center"
      justify="center"
    >
      {title != null ? <Text typography="t4">{title}</Text> : null}
      {children}
    </Flex>
  )
}

const containerStyle = css`
  background-color: aliceblue;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
`

export default Section
