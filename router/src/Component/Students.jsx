import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Students.css"
const students = [
    {
      id:1,
      name: "monil",
      sem: 6,
      city: "surat",
      contact : 9081153070
    },
    {
      id:2,
      name: "ayush",
      sem: 6,
      city: "junagath",
      contact : 9081153070
    }
    ,{
      id:3,
      name: "priyansh",
      sem: 6,
      city: "surat",
      contact : 9081153070
    },
    {
      id:4,
      name: "preet",
      sem: 6,
      city: "surat",
      contact : 9081153070
    }
  ]
  
const Students = () => {
  const navigate = useNavigate()
  const handleClick = (index) => {
    // <Link to={`/student/${index}`}>View Profile</Link>
    console.log(index)
    navigate(`/students/${index}`)
  }
  return (
   <>
   <div className='cards'>
    {
        students.map((student, index) => (
            <div key={index} className='card' onClick={() => handleClick(student.id)}>
                <h1>Name : {student.name}</h1>
                <h2>Sem : {student.sem}</h2>
            </div>))
    }
   </div>
    
   </>
  )
}
export {students}
export default Students