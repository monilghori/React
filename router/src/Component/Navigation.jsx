import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/students">Students</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </>
  )
}

export default Navigation