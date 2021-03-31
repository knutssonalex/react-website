import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
     position: absolute;     
     width: 100vw;
     height: 100vh;
     overflow-y: scroll;
`
const Content = styled.div`
     height: 400vh;
`
const ScrollHandler = ({ speed = 1, onScroll }) => {
  const [scrollValue, setScrollValue] = useState(0)
  const handleScroll = (event) => {
    const newVal = scrollValue + event.deltaY * speed
    setScrollValue(newVal)
    onScroll(newVal)
    // console.log(newVal)
  }

  return (
    <Container onWheel={handleScroll}>
      <Content />
    </Container>
  )
}
export default ScrollHandler
