import React from 'react'
import PropTypes from 'prop-types'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import QuestionContainers from 'containers/Question'
import get from 'lodash/get'

const QuestionPage = (props) => {
  const { match } = props
  const id = get(match, 'params.id', '')

  return (
    <HelmetProvider>
      <Helmet>
        <title>Question #{id}</title>
      </Helmet>
      <QuestionContainers id={id} />
    </HelmetProvider>
  )
}

QuestionPage.defaultProps = {
  match: {
    path: '',
  },
}

QuestionPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}

export default QuestionPage
