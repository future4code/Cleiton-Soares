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

        <Route exact path="/admin/trips/list">
          <AdminHome/>
        </Route>

        <Route exact path="/trips/application">
          <ApplicationForm/>
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTrip/>
        </Route>

        <Route exact path="/trips/list">
          <ListTrips/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/admin/trips/:id">
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