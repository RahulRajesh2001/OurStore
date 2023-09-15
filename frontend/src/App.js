import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreens'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/registerScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ShippingScreens from './Screens/ShippingScreens'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrder from './Screens/PlaceOrder'
import OrderScreenss from './Screens/OrderScreenss'
import UserListScreen from './Screens/UserListScreen'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/order/:id' element={<OrderScreenss />} />
            <Route path='/placeorder' element={<PlaceOrder />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/shipping' element={<ShippingScreens />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
