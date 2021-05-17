import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import { useRecoilState, useRecoilValue } from 'recoil'
import { numberState, isEmptyAnswerState, isCompletedState } from 'recoil/app'

const QuestionContainers = () => {
  const history = useHistory()
  const [number, setNumber] = useRecoilState(numberState)
  const isEmptyAnswer = useRecoilValue(isEmptyAnswerState)
  const isCompleted = useRecoilValue(isCompletedState)

  const handleNext = () => {
    if (isCompleted) {
      history.push('/summary')
    } else {
      setNumber((prev) => prev + 1)
    }
  }

  return (
    <Grid container justify="flex-end" spacing={2}>
      <Grid item>
        <Button
          variant="outlined"
          onClick={() => setNumber((prev) => prev - 1)}
          disabled={number <= 1}
        >
          Back
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={isEmptyAnswer}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  )
}

export default QuestionContainers
