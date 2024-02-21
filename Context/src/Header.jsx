import React from 'react'
import { UseContext} from './App'
const Header = () => {
  return (
    <>
        <div>
            <UseContext.Consumer>
                {
                    (context) => {
                        return (
                            <div>
                                <h1>Header</h1>
                                <h2>Welcome {context.username}</h2>
                            </div>
                        )
                    }
                }
            </UseContext.Consumer>
        </div>
    </>
  )
}

export default Header