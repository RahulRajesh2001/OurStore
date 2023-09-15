import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from '../Actions/userActions'

function Header() {
  const dispatch=useDispatch()

  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin

  const logoutHandler=()=>{
      dispatch(logout())
  }

  return (
    <header>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>OurStore</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ): <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i>Sign In
              </Nav.Link>
            </LinkContainer>
            
            }
            {userInfo && userInfo.isAdmin && (
                              <NavDropdown title='Admin' id='adminmenu'>
                              <LinkContainer to='admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                              </LinkContainer>
                              <LinkContainer to='/admin/productlist'>
                                <NavDropdown.Item>Products</NavDropdown.Item>
                              </LinkContainer>
                              <LinkContainer to='/admin/orderlist'>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                              </LinkContainer>
                            </NavDropdown>
            )}
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
