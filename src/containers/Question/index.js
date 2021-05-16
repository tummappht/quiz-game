import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardActions, Button, Grid } from '@material-ui/core'
import { FadeIn } from './index.style'
import { getQuestions } from 'api/question'

const initialState = {
  question: [],
  isLoading: true,
}

const QuestionContainers = (props) => {
  const { id } = props
  const [questions, setQuestions] = useState(initialState.question)

  const fetchQuestion = useCallback(async () => {
    const options = {
      category: 10,
    }
    await getQuestions({ options }).then((response) => {
      const { results } = response
      if (results) {
        setQuestions(results)
      }
    })
  }, [])

  useMemo(() => {
    fetchQuestion()
  }, [fetchQuestion])

  console.log(questions)

  return (
    <FadeIn>
      <Card>
        <CardContent>
          <p>{id}/10</p>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p>
                Virgin Trains, Virgin Atlantic and Virgin Racing, are all
                companies owned by which famous entrepreneur?
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button>xs</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button>xs</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button>xs</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button>xs</Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={5} justify="space-between">
            <Grid item>
              <Button>Back</Button>
            </Grid>
            <Grid item>
              <Button>Next</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </FadeIn>
  )
}

QuestionContainers.defaultProps = {
  match: {
    path: '',
  },
}

QuestionContainers.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}

export default QuestionContainers
