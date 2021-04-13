import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import React, { useState, useRef } from 'react'

const Card = styled.div`
  display: flex;
  //position: absolute;
  width: 400px;
  height: 250px;
  border-style: solid;
  border-radius: 8px;
  background-color: black;
  transition: 100ms;
  transform: translateZ(${0}px) translateY(${props => props.offset}px) rotateX(15deg) rotateY(-30deg)  ;
  
`
const Wrap = styled.div`
  display: flex;
  transform-style: preserve-3d;
  padding: 25px;
  perspective: 300px;
`
const AnimatedCard = animated(Card)

const ProjectCards = ({ offset, foo }) => {
  const [scale, setScale] = useState(1)

  const movement = useSpring({
    margin: 0,
    transform: `translate(${0}px, ${0}px) scale(${1}) `
  })
  const mid = window.innerHeight / 2

  // console.log('Offset ' + offset + 'and mid: ' + mid)

  return (
    <Wrap>
      <AnimatedCard style={movement} ref={foo} offset={offset} />
    </Wrap>

  )
}
export default ProjectCards
