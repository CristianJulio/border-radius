import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import InputBorder from './components/InputBorder'
import BoxBorder from './components/BoxBorder'
import Previewer from './components/Previewer'

const Group = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`

const InputGroup = styled.div`
  display: grid;
  grid-gap: 25px;
  width: 300px;
`

function App () {
  const [bordersValues, setBordersValues] = useState({
    bortopleft: '20px',
    bortopright: '20px',
    borbotright: '20px',
    borbotleft: '20px'
  })

  // eslint-disable-next-line
  const [borders, setBorders] = useState([
    { name: 'bortopleft', placeholder: 'Border top left' },
    { name: 'bortopright', placeholder: 'Border top right' },
    { name: 'borbotright', placeholder: 'Border bottom left' },
    { name: 'borbotleft', placeholder: 'Border bottom left' }
  ])

  return (
    <>
      <Header />
      <div className='wrapper'>
        <Group>
          <InputGroup>
            {borders.map((border) => (
              <InputBorder
                key={border.name}
                name={border.name}
                placeholder={border.placeholder}
                setBordersValues={setBordersValues}
              />
            ))}
          </InputGroup>
          <BoxBorder bordersValues={{ ...bordersValues }} />
        </Group>
        <Previewer bordersValues={{ ...bordersValues }} />
      </div>
    </>
  )
}

export default App
