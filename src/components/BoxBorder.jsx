import React from 'react'
import styled from 'styled-components'

const BoxStyled = styled.div`
  background: #9EBC9F;
  border-bottom-left-radius: ${({ borbotleft }) => borbotleft || '20px'};
  border-bottom-right-radius: ${({ borbotright }) => borbotright || '6px'};
  border-top-left-radius: ${({ bortopleft }) => bortopleft || '6px'};
  border-top-right-radius: ${({ bortopright }) => bortopright || '6px'};
  height: 200px;
  width: 300px;
`

const BoxBorder = ({ bordersValues }) => {
  const { bortopleft, bortopright, borbotright, borbotleft } = bordersValues

  return (
    <BoxStyled
      bortopleft={bortopleft}
      bortopright={bortopright}
      borbotright={borbotright}
      borbotleft={borbotleft}
    />
  )
}

export default BoxBorder
