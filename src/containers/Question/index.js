import React, { useState, useMemo, useCallback, useEffect } from 'react'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import Card from '@material-ui/core/Card'
import FadeIn from 'common/FadeIn'
import { CardContent, CardAction } from 'common/Card'
import QuestionWrapper from './question.components'
import ActionWrapper from './action.components'
import LoadingComponents from './loading.components'
import { getQuestions, getCategories } from 'api/question'
import { useRecoilState, useRecoilValue } from 'recoil'
import { difficultyState, questionState } from 'recoil/app'
const initialState = {
  list: [],
  isLoading: true,
}

const QuestionContainers = (props) => {
  const [categories, setCategories] = useState(initialState.list)
  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useRecoilState(questionState)
  const difficulty = useRecoilValue(difficultyState)

  const fetchCategories = useCallback(async () => {
    await getCategories().then((response) => {
      const { trivia_categories } = response
      if (trivia_categories) {
        setCategories(trivia_categories)
      }
    })
  }, [])

  useMemo(() => {
    fetchCategories()
  }, [fetchCategories])

  const handleRandAnswer = ({ correct, incorrect }) => {
    const answers = map(incorrect, (list) => list)
    answers.push(correct)

    let rand = []
    while (answers.length > 0) {
      var randKey = Math.floor(Math.random() * answers.length)
      rand.push(answers[randKey])
      answers.splice(randKey, 1)
    }
    return rand
  }

  const handleSortQuestions = useCallback(
    (list) => {
      const obj = {}
      list.forEach((data, i) => {
        const { question, correct_answer, incorrect_answers } = data
        const correct = atob(correct_answer)
        const incorrect = map(incorrect_answers, (choice) => atob(choice))

        obj[i + 1] = {
          question: atob(question),
          correct_answer: correct,
          answers: handleRandAnswer({ correct, incorrect }),
        }
      })
      setQuestions(obj)
    },
    [setQuestions],
  )

  const handleNotFound = (categoryId) => {
    setCategories((prev) => {
      const newCategories = []
      map(prev, (category) => {
        const thisCategoryId = get(category, 'id', 0)
        if (categoryId !== thisCategoryId) {
          newCategories.push(category)
        }
      })
      return newCategories
    })
  }

  const fetchQuestion = useCallback(
    async (props) => {
      setIsLoading(true)
      const options = props
      await getQuestions({ options }).then((response) => {
        const { response_code, results, status } = response
        if (status === 200) {
          if (response_code === 0) {
            handleSortQuestions(results)
            setIsLoading(false)
          } else {
            const optionCategoryId = get(options, 'category', 0)
            handleNotFound(optionCategoryId)
          }
        }
      })
    },
    [handleSortQuestions],
  )

  useEffect(() => {
    if (!isEmpty(categories)) {
      const random = categories[Math.floor(Math.random() * categories.length)]
      const id = get(random, 'id', 9)

      const options = {
        category: id,
        difficulty,
      }
      fetchQuestion(options)
    }
  }, [categories, difficulty, fetchQuestion])

  return (
    <FadeIn>
      <Card style={{ marginTop: '5em' }}>
        {isLoading ? (
          <LoadingComponents />
        ) : (
          <>
            <CardContent>
              <QuestionWrapper questions={questions} />
            </CardContent>
            <CardAction>
              <ActionWrapper />
            </CardAction>
          </>
        )}
      </Card>
    </FadeIn>
  )
}

export default QuestionContainers
