import React from 'react'
import {Alert} from 'react-bootstrap'

export const Message = ({varient,children}) => {
    return (
        <Alert varient={varient}>
            {children}
        </Alert>
    )
}

Message.defaultProps={
 varient :'info'
}


export default Message