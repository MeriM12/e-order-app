import { FC, PropsWithChildren } from 'react'

import { SHOP_API } from '~api'
import { AuthContextProvider, AuthContextType } from '~contexts'
import { useCallback, useEffect, useMemo, useState } from '~hooks'
import { deleteToken, getToken, setToken } from '~services'
import { SignUpFormValues } from '~types/authForms'
import { wait } from '~utils'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)

  useEffect(() => {
    const bootstrap = async () => {
      // TODO: This should be moved to backend calls, in this bootstrap function we should fetch user info and not token
      const token = await getToken()
      console.log(token, 'UTOK!!!')
      setIsSignedIn(!!token)
    }

    bootstrap()
  }, [])

  const signIn: AuthContextType['signIn'] = useCallback(async (data) => {
    // Errors are handled on UI side
    // if you want to stop this function with error just throw new Error.
    // Remember to pass readable error message for user, because this error will be displayed for him
    await wait(500)
    const res = await SHOP_API.signInRequest(data.phone, data.password)
    console.log(data, 'DATAT!!!!!')
    console.log(res, 'resresres!!!!!')
    // if (data.email !== 'test@example.com' || data.password !== '123456') {
    //   throw new Error('Incorrect email or password')
    // }
    await setToken(res.payload.token.accessToken)
    setIsSignedIn(true)
  }, [])

  const signOut = useCallback(async () => {
    console.log('EXIT!!!!!!!!!')
    await deleteToken()
    setIsSignedIn(false)
  }, [])

  const signUp = useCallback(async (data: SignUpFormValues) => {
    // temporary solution
    console.log(data, 'poxos!!!!!!!!!')
    await wait(500)
    setIsSignedIn(true)
  }, [])

  const value = useMemo(() => {
    return {
      isSignedIn,
      signIn,
      signOut,
      signUp,
    }
  }, [isSignedIn, signIn, signOut, signUp])

  return <AuthContextProvider value={value}>{children}</AuthContextProvider>
}
