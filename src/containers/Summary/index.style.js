import styled from 'styled-components'
import CardContents from '@material-ui/core/CardContent'
import ListItems from '@material-ui/core/ListItem'

export const CardContent = styled(CardContents)`
  padding: 40px;
  text-align: center;
  position: relative;

  h2 {
    font-size: 44px;
  }

  h3 {
    font-size: 36px;
  }

  h4 {
    font-size: 18px;
    margin: 0 0 8px;
    text-align: left;
  }

  canver {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
export const ListItem = styled(ListItems)`
  padding: 15px 0;
  display: inline-block;

  p {
    margin: 0 0 8px;
  }
`

export const QuestionText = styled.h5`
  font-size: 20px;
  margin: 0 0 10px;
`

export const AnswerText = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 5px;
    font-weight: 600;
  }
`
