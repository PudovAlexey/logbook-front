import React, { PropsWithChildren, createContext, useContext } from 'react'
import { User, userSlice } from '../model/UserSlice';
import { observer } from "mobx-react-lite"

const UserContext = createContext<User | null>(null);

const UserProvider = observer(({children}: PropsWithChildren) => {
    const user = userSlice.user

    return (
      <UserContext.Provider value={user || null}>
          {children}
      </UserContext.Provider>
    )
  })

  const useGetUser = () => {
    return useContext(UserContext)
  }

export {
    UserProvider,
    useGetUser
}
