import { useHistory } from 'react-router-dom'

export const useCoordinator = () => {
  let history = useHistory()
  const goTo = {
    Login: () => history.push('/login'),
    SignUp: () => history.push('/cadastro'),
    AddRecipes: () => history.push('/adicionar-receita'),
    RecipeDetails: () => history.push('/detalhes'),
    RecipesList: () => history.push('/'),
  }

  return { goTo }
}
