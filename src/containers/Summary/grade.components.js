import React from 'react'
import map from 'lodash/map'
import gets from 'lodash/get'
import { useRecoilValue } from 'recoil'
import { answerState, questionState } from 'recoil/app'

const GradeComponents = () => {
  const questions = useRecoilValue(questionState)
  const answers = useRecoilValue(answerState)
  let score = 0

  const calGPA = (questions, answers) => {
    let countQuestions = 0
    let countCorrect = 0
    map(questions, (data, i) => {
      const answer = answers.get(parseFloat(i))
      const correct_answer = gets(data, 'correct_answer', '')
      if (answer === correct_answer) {
        countCorrect++
      }
      countQuestions++
    })
    score = countCorrect
    const percent = Math.round((countCorrect / countQuestions) * 100)

    switch (true) {
      case percent <= 100 && percent >= 90:
        return 'PERFECT'
      case percent <= 89 && percent >= 70:
        return 'GREAT'
      case percent <= 69 && percent >= 50:
        return 'COOL'
      case percent <= 49 && percent >= 40:
        return 'BAD'
      default:
        return 'VERY BAD'
    }
  }

  return (
    <>
      <h3>{calGPA(questions, answers)}</h3>
      <h2>Your Score Is</h2>
      <h3>{score}</h3>
    </>
  )
}

export default GradeComponents
