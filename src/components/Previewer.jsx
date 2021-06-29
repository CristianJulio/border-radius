import React from 'react'
import styled from 'styled-components'

const PreviewerStyled = styled.div`
  background: #4C5760;
  border-radius: 6px;
  color: #F4F2F3;
  display: grid;
  grid-gap: 10px;
  margin: 25px 0;
  padding: 10px 15px;
  place-items: center;
  width: 100%;
`

const InputStyled = styled.input`
  align-items: center;
  all: unset;
  background: #F4F2F3;
  border-radius: 6px;
  color: #000;
  height: 20px;
  padding: 10px;
  text-align: center;
  width: 400px;
`

const ButtonStyled = styled.button`
  all: unset;
  background: #9EBC9F;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 10px;
`

const Previewer = ({ bordersValues }) => {
  const { bortopleft, bortopright, borbotright, borbotleft } = bordersValues

  const handleClick = (e) => {
    const text = document.getElementById('txtBR')

    text.select()
    window.document.execCommand('copy')

    e.target.textContent = 'Copied'

    setTimeout(() => {
      e.target.textContent = 'Copy'
    }, 2000)
  }

  return (
    <PreviewerStyled>
      <h2>Previewer</h2>
      <InputStyled
        type='text'
        id='txtBR'
        value={`border-radius: ${bortopleft} ${bortopright} ${borbotleft} ${borbotright};`}
        readOnly
      />
      <ButtonStyled onClick={handleClick}>Copy</ButtonStyled>
    </PreviewerStyled>
  )
}

export default Previewer
