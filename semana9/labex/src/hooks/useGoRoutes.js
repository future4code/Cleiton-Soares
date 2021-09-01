import { useHistory } from 'react-router-dom'

export const useGoRoutes = () => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }
  const goAdminHome = () => {
    history.push('/admin/trips/list')
  }
  const goApplicationForm = () => {
    history.push('/trips/application')
  }
  const goCreateTrip = () => {
    history.push('/admin/trips/create')
  }
  const goListTrips = () => {
    history.push('/trips/list')
  }
  const goLogin = () => {
    history.push('/login')
  }
  const goTripDetails = (id) => {
    history.push(`/admin/trips/${id}`)
  }

  return {goHome, goAdminHome, goApplicationForm, goCreateTrip, goListTrips, goLogin, goTripDetails}
}
