import React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'


const CenteredBox = styled(Box).attrs({ background: 'brand' })`
  text-align: center;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.54), -4px -2px 16px #FFFFFF;
  border-radius: 16px;
  width: 400px;
  left: 32px;
  top: 120px;
  border: 0;
  padding: 2pt;
  margin: 0 auto;
`

const NeoBox = ({ children }) => {
  return (
    <CenteredBox
      width='xlarge'
      direction="column"
      pad="medium"
    >
      {children}
    </CenteredBox>
  )
}

export default NeoBox