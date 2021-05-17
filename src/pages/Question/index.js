import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import QuestionContainers from 'containers/Question'
import { useRecoilValue } from 'recoil'
import { numberState } from 'recoil/app'
const QuestionPage = () => {
  const number = useRecoilValue(numberState)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Question #{String(number)}</title>
      </Helmet>
      <QuestionContainers />
    </HelmetProvider>
  )
}

export default QuestionPage
