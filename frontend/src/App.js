import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import DashboardScreen from './screens/DashboardScreen'
import PrivateRoute from './privateRoutes/privateRoute'

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{paddingTop:'89px'}}>
        <div className="page">
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <PrivateRoute path='/infoboard' component={DashboardScreen} />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
