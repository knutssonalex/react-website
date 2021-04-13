import { useSpring, animated } from 'react-spring'
import React, { useState, useRef } from 'react'
import '../../App.css'
import './projekt.css'
import ScrollHandler from '../ScrollHandler'
import styled from 'styled-components'
import ProjectCards from '../ProjectCards'

const Container = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 90vh;
`
const Wrapper = styled.div`
  display flex;
  justify-content: center;
  align-items: center;
  height: 0px;
  background-color: blue;
  flex-direction: column;
  transform: rotateY(345deg)
  perspective: 800px;
`
const Box = styled.div`
  display: flex;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: gray;
  transition: 100ms;
`
const AnimatedWrapper = animated(Wrapper)
const AnimatedBox = animated(Box)
let myTimeOut
let pos = 0

const Projekt = () => {
  const cardHeight = useRef(null)
  const [position, setPosition] = useState(0)
  const [tension, setTension] = useState(150)
  const [friction, setFriction] = useState(20)
  const [scale, setScale] = useState(1)
  const spring = useSpring({
    margin: 0,
    transform: `translate(${0}px, ${position}px) scale(${scale}) rotateY(${0}deg)`,
    config: {
      mass: 3,
      tension: tension,
      friction: friction
    },
    delay: 300
  })

  const updatePosition = (speed) => {
    clearTimeout(myTimeOut)
    pos -= speed
    speed *= 0.08
    setTension(150)
    setPosition(pos)
    setFriction(20)
    // console.log(cardHeight.current.offsetHeight + 50)
    const active = Math.round(pos / cardHeight.current.offsetHeight)

    myTimeOut = setTimeout(function () {
      setTension(1000)
      setTension(100)
      pos = ((cardHeight.current.offsetHeight + 50) * (Math.round(pos / (cardHeight.current.offsetHeight + 50))))

      setPosition(pos)
      // console.log('Corrected pos: ' + pos)
    }, 100)
  }

  return (
    <Container>
      <AnimatedWrapper style={spring}>
        <ProjectCards foo={cardHeight} offset={0} />
        <ProjectCards offset={1 * 300} />
        <ProjectCards offset={2 * 300} />
        <ProjectCards offset={3 * 300} />
        <ProjectCards offset={4 * 300} />
      </AnimatedWrapper>

      <AnimatedBox />

      <ScrollHandler speedFactor={0.003} onScroll={updatePosition} />
    </Container>
  )
}

export default Projekt
