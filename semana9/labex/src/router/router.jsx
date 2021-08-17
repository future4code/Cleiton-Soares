import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AdminHome from '../components/adminHome'
import ApplicationForm from '../components/applicationForm'
import CreateTrip from '../components/createTrip'
import Home from '../components/home'
import ListTrips from '../components/listTrips'
import Login from '../components/login'
import TripDetails from '../components/tripDetails'

function Router () {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/admin-home">
          <AdminHome/>
        </Route>

        <Route exact path="/application-form">
          <ApplicationForm/>
        </Route>

        <Route exact path="/create-trip">
          <CreateTrip/>
        </Route>

        <Route exact path="/list-trips">
          <ListTrips/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/trip-details">
          <TripDetails/>
        </Route>

        <Route>
          Página não encontrada
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;