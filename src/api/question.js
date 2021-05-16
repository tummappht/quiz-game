import axios from 'axios'
import get from 'lodash/get'

export const client = axios.create({
  headers: {
    Accept: 'application/json',
  },
  responseType: 'json',
})

export const getQuestions = async ({ options }) => {
  const params = {
    ...options,
    amount: 10,
    type: 'multiple',
  }

  try {
    return await client
      .get('https://opentdb.com/api.php', {
        params,
      })
      .then((response) => {
        const { data, status } = response
        data['status'] = status
        return data
      })
      .catch((error) => {
        // const { response } = error
        console.log(error)
        return error
      })
  } catch (error) {
    console.error('error', error)
    return error
  }
}
