import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
     position: absolute;     
     width: 100vw;
     height: 100vh;
     overflow-y: scroll;
`
const Content = styled.div`
     height: 100vh;
`

const ScrollHandler = ({ speedFactor = 0.02, onScroll }) => {
  const [scrollValue, setScrollValue] = useState(1)
  const handleScroll = (event) => {
    const speed = event.deltaY * speedFactor
    setScrollValue(speed * 100)
    onScroll(speed * 100)
  }

  return (
    <Container onWheel={handleScroll}>
      <Content />
    </Container>
  )
}
export default ScrollHandler
