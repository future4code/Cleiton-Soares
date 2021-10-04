import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AddRecipes } from '../pages/AddRecipes'
import { Login } from '../pages/Login'
import { RecipeDetails } from '../pages/RecipeDetails'
import { RecipesList } from '../pages/RecipesList'
import { SignUp } from '../pages/SignUp'
import { Error } from '../pages/Error'
import { Header } from '../components/Header'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/cadastro'>
          <SignUp />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/'>
          <RecipesList />
        </Route>

        <Route exact path='/adicionar-receita'>
          <AddRecipes />
        </Route>

        <Route exact path='/detalhe/:id'>
          <RecipeDetails />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
