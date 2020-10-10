import axios from 'axios'

import Config from 'config/AppConfig'

class Service {

  static apiUrl = 'http://localhost:8000/api'

  static getMedias() {
    return axios({
      method: 'GET',
      baseURL: Config.API_HOST,
      url: '/medias'
    })
  }

  static analytics() {
    return axios({
      method: 'GET',
      baseURL: Config.API_HOST,
      url: '/analytics'
    })
  }
}

export default Service;