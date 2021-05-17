import React from 'react'
import { Grid } from '@material-ui/core'
import { QuestionNo, QuestionText } from './index.style'
import AnswerWrapper from './answer.components'
import { useRecoilValue } from 'recoil'
import { questionState, numberState } from 'recoil/app'
import get from 'lodash/get'
import map from 'lodash/map'

const QuestionComponents = (props) => {
  const questions = useRecoilValue(questionState)
  const number = useRecoilValue(numberState)
  const length = Object.keys(questions).length
  const question = get(questions, number, {})
  const incorrect_answers = get(question, 'incorrect_answers', {})
  const correct_answer = get(question, 'correct_answer', '')
  const answers = map(incorrect_answers, (list) => list)
  answers.push(correct_answer)

  return (
    <>
      <QuestionNo>
        {number}/{length || '?'}
      </QuestionNo>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <QuestionText>{get(question, 'question', '?')}</QuestionText>
        </Grid>
        <AnswerWrapper answers={answers} />
      </Grid>
    </>
  )
}

export default QuestionComponents
