import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import DifficultyContainers from 'containers/Difficulty'

const DifficultyPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Quiz game: Select Difficulty</title>
      </Helmet>
      <DifficultyContainers />
    </HelmetProvider>
  )
}

export default DifficultyPage
