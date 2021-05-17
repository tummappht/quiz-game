import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import SummaryContainers from 'containers/Summary'

const SummaryPage = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Summary</title>
      </Helmet>
      <SummaryContainers />
    </HelmetProvider>
  )
}

export default SummaryPage
