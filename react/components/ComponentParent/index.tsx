import React, { FC } from 'react'

import { ProfileContextProvider } from '../../context/ProfileContext'

const ComponentParent: FC = ({ children }) => {
  return (
    <ProfileContextProvider>
      <div>{children}</div>
    </ProfileContextProvider>
  )
}

export default ComponentParent
