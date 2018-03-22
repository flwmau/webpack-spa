import { merge } from 'lodash'

const development = {
  port: 4000,
  api: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  }
}

const production = {
  port: process.env.PORT || 8080,
  api: {
    baseURL: ''
  }
}

const stage = merge({}, production, {
  api: {
    baseURL: ''
  }
})

export default {
  development,
  production,
  stage
}