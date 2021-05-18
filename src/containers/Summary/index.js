import React, { Fragment, useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import gets from 'lodash/get'
import map from 'lodash/map'
import { Card, List, Divider, Button } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import { green } from '@material-ui/core/colors'
import FadeIn from 'common/FadeIn'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { answerState, numberState, questionState } from 'recoil/app'
import { ListItem, QuestionText, CardContent, AnswerText } from './index.style'
import Grade from './grade.components'
import Confetti from 'react-confetti'
import { Map } from 'immutable'

const CorrectIcon = () => {
  return <CheckCircleIcon style={{ color: green[500] }} fontSize="small" />
}
const WrongIcon = () => {
  return <CancelIcon color="secondary" fontSize="small" />
}

const SummaryContainers = (props) => {
  const [questions, setQuestions] = useRecoilState(questionState)
  const [answers, setAnswers] = useRecoilState(answerState)

  const setNumber = useSetRecoilState(numberState)
  const history = useHistory()

  const handlePlayAgain = useCallback(async () => {
    await setQuestions({})
    await setAnswers(new Map())
    await setNumber(1)
    history.push('/difficulty')
  }, [history, setAnswers, setNumber, setQuestions])

  useMemo(() => {
    if (answers.size <= 0) {
      history.push('/difficulty')
    }
  }, [answers.size, history])

  return (
    <FadeIn>
      <Card style={{ marginTop: '5em' }}>
        <CardContent>
          <Confetti />
          <Grade />
          <Button
            variant="outlined"
            color="primary"
            className="btn"
            onClick={handlePlayAgain}
            style={{ marginBottom: '3em' }}
          >
            Play Again
          </Button>
          <h4>Results</h4>
          <List>
            {map(questions, (data, i) => {
              const question = gets(data, 'question', '')
              const answer = answers.get(parseFloat(i))
              const correct_answer = gets(data, 'correct_answer', '')
              const isCorrect = answer === correct_answer

              return (
                <Fragment key={question + i}>
                  {i > 1 && <Divider />}
                  <ListItem>
                    <QuestionText>
                      {i}. {question}
                    </QuestionText>
                    <AnswerText>
                      <label>Your answer:</label>
                      <p>{answer}</p>
                      {isCorrect ? <CorrectIcon /> : <WrongIcon />}
                    </AnswerText>
                    {!isCorrect && (
                      <AnswerText>
                        <label>Correct answer:</label>
                        <p>{correct_answer}</p>
                        <CorrectIcon />
                      </AnswerText>
                    )}
                  </ListItem>
                </Fragment>
              )
            })}
          </List>
        </CardContent>
      </Card>
    </FadeIn>
  )
}

export default SummaryContainers
