import React, { useState, useEffect } from 'react'
import '../styles/Toolbar.css'
import logo from '../images/example-logo.jpg'
import { Button } from 'react-bootstrap'
// Main navigation component

// props is an object
const Toolbar = (props) => {
  // es6 destructuring
  const { menuItems } = props

  const [itemClicked, click] = useState(null)
  const [content, renderContent] = useState(null)

  // STATE HOOK
  const [counter, setCounter] = useState(0)

  const decrement = () => {
    const newState = counter - 1
    setCounter(newState)
  }
  const increment = () => {
    const newState = counter + 1
    setCounter(newState)
  }

  useEffect(() => {
    if (itemClicked) {
      renderContent('Welcome to my page: ' + itemClicked)
    }
  }, [itemClicked])


  // conditional rendering
  if (menuItems.length < 1) {
    return <div>Error!</div>
  }
  // no render method
  return (
    <div>
      <Button variant='secondary' onClick={decrement}>-</Button>
      <span>{counter}</span>
      <Button variant='secondary' onClick={increment}>+</Button>

      <ul className='toolbar-list'>
        <li>
          <img
            alt='placeholder'
            src={logo}
            style={{ maxWidth: '5rem' }}
          />
        </li>
        {menuItems.map((element, i) =>
          <li key={i}
            className='toolbar-item'
            onClick={() => click(element)}>
            {element}
          </li>
        )}
      </ul>

      {content}
    </div>
  )
}

export default Toolbar
