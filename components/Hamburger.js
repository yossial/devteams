import React from 'react'

export default function hamburger({ isOpen, setIsOpen }) {

  const topClosed = {
    display: "block",
    height: "1px",
    width: "100%",
    background: "white",
    transitionTimingFunction: "ease",
    transitionDuration: "0.7s",
    borderRadius: "0px",
    transformOrigin: "center",
    position: "absolute",
    transform: "translate3d(0,0,0) rotate(0)",
    marginTop: "-0.5px"
  }

  const topOpen = {
    ...topClosed,
    background: 'black',
    transform: "translate3d(0px, 7.5px, 0px) rotate(45deg)",
  }

  const middleClosed = {
    ...topClosed,
    transitionTimingFunction: "easeOut",
    transitionDuration: "0.225s",
    opacity: "1",
    top: "7.5px",
  }

  const middleOpen = {
    ...middleClosed,
    background: 'black',
    opacity: "0",
  }

  const lastClosed = {
    ...topClosed,
    transform: "translate3d(0,15px,0) rotate(0)",
  }

  const lastOpen = {
    ...topOpen,
    transform: 'translate3d(0px, 7.5px, 0px) rotate(-45deg)'
  }

  return (
    <div>
      <div style={{
        width: '1.2em',
        height: '1.2em',
        position: 'fixed',
        top: '2em',
        right: '2em',
        transform: 'rotate(0deg)',
        color: isOpen ? 'black' : 'white'
      }}
        className='md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={isOpen ? topOpen : topClosed}></span>
        <span style={isOpen ? middleOpen : middleClosed}></span>
        <span style={isOpen ? lastOpen : lastClosed}></span>
      </div>
    </div>
  )
}
