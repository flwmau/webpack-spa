import { merge } from 'lodash'

const development = {
  api: {
    baseURL: 'http://localhost:4000/api'
  }
}

const production = {
  api: {
    baseURL: ''
  }
}

const stage = merge({}, production, {

})

export default {
  development,
  production,
  stage
}