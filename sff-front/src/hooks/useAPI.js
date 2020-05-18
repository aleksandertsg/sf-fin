import { useState } from 'react'
import axios from 'axios'
import config from '../config'
import useAuthentication from './useAuthentication'


const useAPI = (baseURL = config.apiURL) => {
  const { getJwt, setAuth } = useAuthentication()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const instance = axios.create({
    baseURL,
    timeout: 5000
  })

  instance.interceptors.request.use(async (config) => {
    const token = getJwt()

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : null
      }
    }
  })

  const login = async (walletAddress, signedMessage) => {
    setLoading(true)

    try {
      const { data } = await instance.post('/auth/login', { walletAddress, signedMessage })

      setAuth(data.jwt, data.name)
    } catch (error) {
      setError(error)

      throw error
    } finally {
      setLoading(false)
    }
  }

  const getDaiBalance = async (walletAddress) => {
    const { data: { value, message } } = await instance.post('/balance/dai', { walletAddress })

    if (message === 'OK') {
      return value
    }

    return null
  }

  return {
    login,
    error,
    loading,
    getDaiBalance
  }
}

export default useAPI
