import { useSpring, animated } from 'react-spring'
import React, { useState, useRef } from 'react'
import '../../App.css'
import './projekt.css'
import ScrollHandler from '../ScrollHandler'
import styled from 'styled-components'

const Container = styled.div`

     
`
const Box = styled.div`
     width: 100px;
     height: 100px;
     background-color: gray;
     transition: 100ms;
`

const AnimatedBox = animated(Box)
let myTimeOut
let pos = 0
const Projekt = () => {
  const boxRef = useRef(null)

  const [position, setPosition] = useState(0)
  const [tension, setTension] = useState(200)
  const [friction, setFriction] = useState(15)
  const [scale, setScale] = useState(1)
  const props = useSpring({
    margin: 0,
    transform: `translate(${0}px, ${position}px) scale(${scale})`,
    config: {
      mass: 1,
      tension: tension,
      friction: friction
    }
  })

  const updatePosition = (speed) => {
    clearTimeout(myTimeOut)
    pos += speed
    speed *= 0.8
    setPosition(pos)

    myTimeOut = setTimeout(function () {
      const currentPos = Math.round(pos / 100) * 100
      setPosition(Math.round(pos / 100) * 100)
      pos = currentPos
      setPosition(pos)
      boxRef.current = pos
    }, 20)

    /* setPosition(pos)

    const remainder = pos % boxRef.current.scrollHeight
    if (remainder < 10) {
      console.log('Close enough')
      setTension(100)
      setFriction(1500)
      setScale(1)
    } else {
      setTension(170)
      setFriction(15)
      setScale(1)
    }
    */
  }

  return (
    <Container>
      <AnimatedBox style={props} ref={boxRef} />
      <ScrollHandler speedFactor={0.002} onScroll={updatePosition} />
    </Container>
  )
}

export default Projekt
