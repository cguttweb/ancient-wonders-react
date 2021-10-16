import React from 'react'
import Logo from '../images/logo.svg'

const footer = () => {
  return (
    <footer>
      <p>Built by <a href="https://github.com/cguttweb" target="_blank" rel="noopener noreferrer">Chloe</a> in {new Date().getFullYear()} using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img alt="React logo" src={Logo} /></a> and <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">Vite</a></p>
    </footer>
  )
}

export default footer
