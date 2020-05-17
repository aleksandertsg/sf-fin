import useLocalStorage from './useLocalStorage'
import getAppContext from '../contexts/appContext'


const useAuthentication = () => {
  const { setUser, setWeb3 } = getAppContext()
  const [jwt, setJwt] = useLocalStorage('jwt')

  const setAuth = (jwt = null, user = null) => {
    setJwt(jwt)
    setUser(user)

    if (!jwt && !user) {
      setWeb3(null)
    }
  }

  return {
    getJwt: () => jwt,
    setAuth
  }
}

export default useAuthentication