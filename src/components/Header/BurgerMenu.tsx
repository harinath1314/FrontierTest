import React from 'react'
import { Container, MenuText, Wrapper } from './styled'

const Burgermenu = (props: any) => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <Container>
        <div className={props.navbarState ? 'open' : ''}>
          <span>    <i className="fa fa-bars"></i></span>
          <span>    <i className="fa fa-bars"></i></span>
          <span>    <i className="fa fa-bars"></i></span>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Burgermenu
