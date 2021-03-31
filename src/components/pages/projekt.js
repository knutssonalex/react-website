import { render } from '@testing-library/react'
import { useSpring, animated, config, to } from 'react-spring'
// import { animated, useSpring } from 'react-spring/hooks.js'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import '../../App.css'
import './projekt.css'
import ScrollHandler from '../ScrollHandler'
import styled from 'styled-components'

const Container = styled.div`
     
`
const Box = styled.div`
     width: 200px;
     height: 200px;
     background-color: yellow;
     transition: 100ms;
`

const AnimatedBox = animated(Box)
const speed = 0
const rounded = 0
/*
document.body.addEventListener('wheel', (e) => {
  speed += e.deltaY * 0.0002
  // console.log(speed)
}) */

const Projekt = () => {
  // const [positionState, setPositionState] = useState(0)
  const [{ position }, setAnimationState] = useSpring(() => ({
    position: 0
  }))
  const [props, set, stop] = useSpring(() => ({ opacity: 1 }))

  // const blockRef = useLayoutEffect();
  // let divStyle = {tranform: `translate(0, ${positionState*100}px)`}
  /*
  console.log({ position })

  position += speed
  speed *= 0.8
  console.log(speed)
  rounded = Math.round(position)
  const diff = (rounded - position)
  position += diff * 0.05
*/
  const updatePosition = (pos) => {
    console.log(pos)
    // setPositionState(pos)
    // setAnimationState({ position: pos })
    set({ opacity: Math.random() })
  }

  return (
  // <animated.div style={fadeStyles} >
    <Container>
      {/* <AnimatedBox style={{ transform: [{ translateY: position }] }} /> */}
      <AnimatedBox style={props} />
      <ScrollHandler speed={0.2} onScroll={updatePosition} />
    </Container>
  // </animated.div>
  )
}

/* function Projekt() {
     const [state, setState] = React.useState(0)

     const springValues = useSpring({
          config: {mass: 2}
     })
     const requestRef = React.useRef()

     const animate = time => {
     // Change the state according to the animation
     setState(position += speed)
     speed *= 0.8

     requestRef.current = requestAnimationFrame(animate)

     <animated.div style={fadeStyles} onWheel={(e) => this.wheel(e.deltaY)}>

     <animated.div style={fadeStyles} onClick={() => set(state => !state)}>

     }
     React.useEffect(() => {
          requestRef.current = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(requestRef.current);
     }, []); // Make sure the effect runs only once

     return <div className="block" >{block}</div>

}
*/
/*
const fadeStyles = useSpring({
     config: { ...config.slow },
     from:{
          opacity: toggle ? 0:1,
     },
     to: {
          opacity: 1,
          transform: toggle ? `translate3d(400px, ${position*100}px, 0px)`: `translate3d(200px, 100px, 0px)`,
          onFrame: () => {
               block.style.transform = `translate(0, ${position*100}px)`
               setState(position += speed)
               speed *= 0.8
          }
     },
})
*/

export default Projekt
