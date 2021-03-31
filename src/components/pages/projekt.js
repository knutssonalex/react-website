import { useSpring, animated } from 'react-spring'
import React, { useState } from 'react'
import '../../App.css'
import './projekt.css'
import ScrollHandler from '../ScrollHandler'
import styled from 'styled-components'

const Container = styled.div`
     
`
const Box = styled.div`
     width: 200px;
     height: 200px;
     background-color: gray;
     transition: 100ms;
`

const AnimatedBox = animated(Box)

const Projekt = () => {
  const [position, setPosition] = useState(0)
  const props = useSpring({
    margin: 0,
    transform: `translate(${0}px, ${position}px)`,
    config: {
      mass: 3,
      tension: 40,
      friction: 20
    }
  })

  const updatePosition = (pos) => {
    console.log(pos)
    setPosition(Math.round(pos / 200) * 200)
  }

  return (
    <Container>
      <AnimatedBox style={props} />
      <ScrollHandler speed={0.2} onScroll={updatePosition} />
    </Container>
  )
}

export default Projekt
