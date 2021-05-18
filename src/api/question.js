import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://opentdb.com/',
  headers: {
    Accept: 'application/json',
  },
  responseType: 'json',
})

export const getCategories = async () => {
  try {
    return await client
      .get('api_category.php')
      .then((response) => {
        const { data } = response
        return data
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  } catch (error) {
    console.error('error', error)
    return error
  }
}

export const getQuestions = async ({ options }) => {
  const params = {
    amount: 10,
    type: 'multiple',
    encode: 'base64',
    ...options,
  }

  try {
    return await client
      .get('api.php', {
        params,
      })
      .then((response) => {
        const { data, status } = response
        data['status'] = status
        return data
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  } catch (error) {
    console.error('error', error)
    return error
  }
}
