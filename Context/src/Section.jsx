import React from 'react'
import { UseContext} from './App'
const Section = () => {
  return (
    <>
        <h4>Section</h4>
        <UseContext.Consumer>
            {(context) => {
                return (
                    <div>User Name : {context.username}</div>
                )
            }}
        </UseContext.Consumer>
    </>
  )
}

export default Section