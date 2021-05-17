import React from 'react'
import Routes from './routes'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import './App.css'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="md" className="main">
        <Routes />
      </Container>
    </>
  )
}

export default App
