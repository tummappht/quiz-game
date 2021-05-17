import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10em 0;
`

const LoadingComponents = (props) => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  )
}

export default LoadingComponents
