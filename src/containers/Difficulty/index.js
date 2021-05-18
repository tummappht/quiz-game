import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import FadeIn from 'common/FadeIn'
import { CardContent } from 'common/Card'
import { Title, Button } from './index.style'
import { useSetRecoilState } from 'recoil'
import { difficultyState } from 'recoil/app'

const QuestionContainers = (props) => {
  const setDifficulty = useSetRecoilState(difficultyState)
  const history = useHistory()

  const handleClickDifficulty = (difficulty) => {
    setDifficulty(difficulty)
    history.push('/question')
  }

  return (
    <FadeIn>
      <Card style={{ marginTop: '5em' }}>
        <CardContent>
          <Title>Select Difficulty</Title>
          <Button
            variant="contained"
            color="secondary"
            className="btn"
            onClick={() => handleClickDifficulty('hard')}
          >
            Hard
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="btn"
            onClick={() => handleClickDifficulty('medium')}
          >
            Medium
          </Button>
          <Button
            variant="contained"
            color="default"
            className="btn"
            onClick={() => handleClickDifficulty('easy')}
          >
            Easy
          </Button>
        </CardContent>
      </Card>
    </FadeIn>
  )
}

export default QuestionContainers
