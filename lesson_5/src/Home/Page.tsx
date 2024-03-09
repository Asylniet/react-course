import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <Link to="/user/1">ZHolbarys</Link>
      <Link to="/user/2">BEKA</Link>
    </div>
  )
}
