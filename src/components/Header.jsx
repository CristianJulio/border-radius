import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  padding: 25px 0;
  text-align: center;
`

const Header = () => {
  return (
    <HeaderStyled>
      <div className='wrapper'>
        <h1>BorderRadius</h1>
      </div>
    </HeaderStyled>
  )
}

export default Header
