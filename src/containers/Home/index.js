import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'
import { GridContainer } from './index.style'

const HomeContainers = () => {
  const history = useHistory()

  return (
    <GridContainer container justify="center" alignItems="center">
      <Grid>
        <h1>QUIZ GAME</h1>
        <Button
          variant="outlined"
          color="primary"
          className="btn"
          onClick={() => {
            history.push('/difficulty')
          }}
        >
          Start
        </Button>
      </Grid>
    </GridContainer>
  )
}

export default HomeContainers
