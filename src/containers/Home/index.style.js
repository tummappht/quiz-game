import styled, { keyframes } from 'styled-components'
import { Grid } from '@material-ui/core'

const pulseAnimation = keyframes`
	0% {
		box-shadow: 0 0 0 0 rgba(63, 81, 181, 0.5);
	}
	100% {
		box-shadow: 0 0 10px 5px rgba(63, 81, 181, 0);
	}
`

export const GridContainer = styled(Grid)`
  min-height: 100vh;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 2em;
  }

  .btn {
    width: 100%;
    font-size: 18px;
    animation: ${pulseAnimation} 1s infinite;

    &:hover,
    &:focus {
      animation: unset;
    }
  }
`
