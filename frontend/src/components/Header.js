import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='#home'>Social Analytics</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
              <Nav.Link href='/'>Infoboards</Nav.Link>
              <Nav.Link href='/'>Settings</Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/'>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
