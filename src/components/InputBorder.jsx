import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
  all: unset;
  border-radius: 6px;
  border: 1px solid #4C5760;
  color: #4C5760;
  font-weight: bold;
  padding: 5px 10px;
`

const InputBorder = ({ name, placeholder, setBordersValues }) => {
  const handleChange = e => {
    const target = e.target
    const name = target.name
    const value = Number(target.value) < 0 ? 20 : Number(target.value)

    setBordersValues(borders => (
      { ...borders, [name]: `${value}px` }
    ))
  }

  return (
    <InputStyled
      type='number'
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default InputBorder
