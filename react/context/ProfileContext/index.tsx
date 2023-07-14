import React, { FC, createContext, useReducer } from 'react'

interface State {
  theme: string
  checked: boolean
}

interface Actions {
  type: string
  args: any
}

interface ProfileContextType {
  state: State
  dispatch: any
}

const initialState: State = {
  theme: 'light',
  checked: false,
}

export const ProfileContext = createContext<ProfileContextType>({
  state: initialState,
  dispatch: () => {},
})

const reducer = ({ theme, checked }: State, { type, args }: Actions) => {
  switch (type) {
    case 'SET_CHECKED':
      return { theme: args?.theme, checked: args?.checked }

    default:
      return { theme, checked }
  }
}

export const ProfileContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </ProfileContext.Provider>
  )
}
