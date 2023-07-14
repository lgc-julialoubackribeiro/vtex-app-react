import React, { useEffect } from 'react'
import { Toggle } from 'vtex.styleguide'

import useProfileContext from '../../context/ProfileContext/useProfileContext'

const ChangeColor = () => {
  const { state, dispatch } = useProfileContext()

  useEffect(() => {
    document.body.setAttribute(
      'data-theme',
      localStorage.getItem('theme') ?? state.theme
    )

    if (localStorage.getItem('theme') === 'dark') {
      dispatch({
        type: 'SET_CHECKED',
        args: {
          checked: true,
          theme: 'dark',
        },
      })
    }
  }, [dispatch, state.theme])

  const handleChecked = () => {
    dispatch({
      type: 'SET_CHECKED',
      args: {
        checked: !state.checked,
        theme: state.checked ? 'light' : 'dark',
      },
    })

    localStorage.setItem('theme', state.checked ? 'light' : 'dark')
  }

  return (
    <div className="dib mt6 ml4 mr4 julia">
      <Toggle checked={state.checked} onChange={handleChecked} />
    </div>
  )
}

export default ChangeColor
