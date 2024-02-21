import React from 'react'
import { useParams } from 'react-router-dom'
import {students} from './Students'
import "./student.css"
const Student = () => {
    const param = useParams()
  return (
    <>
        {students.map((student) => (
            <div key={student.id} >
                {student.id === parseInt(param.id) && (
                    <div className='student-info'>
                        <h1>Name : {student.name}</h1>
                        <h2>Sem : {student.sem}</h2>
                        <h2>City : {student.city}</h2>
                        <h2>Contact : {student.contact}</h2>
                    </div>
                )}
            </div>
        ))}
    </>
  )
}

export default Student