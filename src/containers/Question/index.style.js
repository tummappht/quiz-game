import styled, { keyframes } from 'styled-components'

const fadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const FadeIn = styled.div`
  opacity: 1;
  animation: infinite;
  animation-name: ${fadeInOpacity};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  flex-grow: 1;
`
