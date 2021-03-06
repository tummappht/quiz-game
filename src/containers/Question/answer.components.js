import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import Grid from '@material-ui/core/Grid'
import { AnswerButton } from './index.style'
import { useRecoilValue, useRecoilState } from 'recoil'
import { numberState, answerState, difficultyState } from 'recoil/app'

const AnswerComponents = (props) => {
  const { answers } = props
  const [answer, setAnswer] = useRecoilState(answerState)
  const difficulty = useRecoilValue(difficultyState)
  const number = useRecoilValue(numberState)

  const handleClickAnswer = (data) => {
    setAnswer((oldAnswer) => oldAnswer.set(number, data))
  }

  const difficultyColor = (() => {
    switch (difficulty) {
      case 'hard':
        return 'secondary'
      case 'medium':
        return 'primary'
      default:
        return 'default'
    }
  })()

  return (
    <>
      {map(answers, (data, i) => {
        return (
          <Grid item xs={12} md={6} key={data + i}>
            <AnswerButton
              variant={answer.get(number) === data ? 'contained' : 'outlined'}
              color={difficultyColor}
              onClick={() => handleClickAnswer(data)}
            >
              {data}
            </AnswerButton>
          </Grid>
        )
      })}
    </>
  )
}

AnswerComponents.defaultProps = {
  answers: {},
}

AnswerComponents.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default AnswerComponents
