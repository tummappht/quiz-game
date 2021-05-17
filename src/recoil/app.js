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
    const question = get(questionState)
    const length = Object.keys(question).length
    const answerMap = get(answerState)
    const number = get(numberState)
    const size = answerMap.size

    return length === number && length === size
  },
})
