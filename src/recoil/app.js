import { atom, selector } from 'recoil'
import { Map } from 'immutable'

export const questionState = atom({
  key: 'questions',
  default: {},
})

export const numberState = atom({
  key: 'number',
  default: 1,
})

export const answerState = atom({
  key: 'answer',
  default: new Map(),
})

export const difficultyState = atom({
  key: 'difficulty',
  default: 'medium',
})

export const questionLengthState = selector({
  key: 'questionLengthState',
  get: ({ get }) => {
    const question = get(questionState)
    const length = Object.keys(question).length

    return length
  },
})

export const isEmptyAnswerState = selector({
  key: 'isEmptyAnswer',
  get: ({ get }) => {
    const number = get(numberState)
    const answerMap = get(answerState)
    const answer = answerMap.get(number) || ''

    return answer.length <= 0
  },
})

export const isCompletedState = selector({
  key: 'isCompletedState',
  get: ({ get }) => {
    const length = get(questionLengthState)
    const answerMap = get(answerState)
    const number = get(numberState)
    const size = answerMap.size

    return length === number && length === size
  },
})
