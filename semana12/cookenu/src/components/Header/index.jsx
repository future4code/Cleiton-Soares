import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolBar } from './styles'
import { useCoordinator } from '../../hooks/useCoordinator'

export const Header = () => {
  const { goTo } = useCoordinator()
  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Button onClick={goTo.RecipesList} color='inherit'>Cookenu</Button>
        <Button onClick={goTo.Login} color='inherit'>Login</Button>
      </StyledToolBar>
    </AppBar>
  )
}
