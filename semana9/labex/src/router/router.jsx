import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AdminHome from '../pages/AdminHome'
import ApplicationForm from '../pages/ApplicationForm'
import CreateTrip from '../pages/CreateTrip'
import Home from '../pages/Home'
import ListTrips from '../pages/ListTrips'
import Login from '../pages/Login'
import TripDetails from '../pages/TripDetails'

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