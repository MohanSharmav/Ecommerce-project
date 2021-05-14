// // // // // import React,{useState,useEffect} from 'react'
// // // // // import {Link} from 'react-router-dom'
// // // // // import {From,Button,Row,Col} from 'react-bootstrap'
// // // // // import {useDipatch,useSelector} from 'react-redux' 
// // // // // import Message from '../components/Message'
// // // // // import Loader from '../components/Loader'
// // // // // import FormContainer from '../components/Loader'
// // // // // import {login} from '../actions/userActions' 


// // // // // const LoginScreen = ({location}) => {
// // // // //     cosnt [email,setEmail] = useState('')
// // // // //     cosnt [password,setPassword] = useState('')
// // // // // const redirect =location.search ?location.search.split('=')[1]:'/'

// // // // // const submitHandler=(e)=>{
// // // // //     e.preventDefault()
// // // // // }

// // // // // return (<FormContainer >
// // // // //     <h1> Sign In</h1>
// // // // //     <Form onSubmit={submitHandler}>
// // // // //         <From.Group controlId='email'>
// // // // //             <From.label >Email Address</From.label>
// // // // //             <From.Control type='email' placeHolder='Enter email' value={email}
// // // // //             onChange={(e) => setEmail(e.target.value)} ></From.Control>
// // // // //         </From.Group>

    
// // // // //         < Form.Group controlId='password'>
// // // // //             <From.label >password </From.label>
// // // // //             <From.Control 
// // // // //             type='password' 
// // // // //             placeHolder='Enter password'
// // // // //              value={password}
// // // // //             onChange={(e) => setPassword(e.target.value)} >

// // // // //             </From.Control>
// // // // //             </ Form.Group>
// // // // //         <Button type='submit' varient='primary'>
// // // // //          Sign In   
// // // // //         </Button>
// // // // //         <Row class='py-3'>
// // // // //                 <Col>
// // // // //                 New Customer /<Link to={redirect ? `/register?redict= ${redirect}` : `/register`}> Register</Link>
// // // // //             </Col>
// // // // //         </Row>
// // // // //         </FormContainer>
    
// // // // // )}


// // // // // export default LoginScreen


// // // // import React, { useState, useEffect } from 'react'
// // // // import { Link } from 'react-router-dom'
// // // // import { Form, Button, Row, Col } from 'react-bootstrap'
// // // // import { useDispatch, useSelector } from 'react-redux'
// // // // import Message from '../components/Message'
// // // // import Loader from '../components/Loader'
// // // // import FormContainer from '../components/FormContainer'
// // // // import { register } from '../actions/userActions'
// // // // imporregisterst [email, setEmail] = useState('')
// // // //   const [name, setName] = useState('')
// // // //   const [password, setPassword] = useState('')
// // // //   const [confirmPassword, setConfirmPassword] = useState('')
// // // //   const [message,setMessage]= useState(null)


// // // //   const dispatch = useDispatch()

// // // //   const userRegister = useSelector((state) => state.userLogin)
// // // //   const { loading, error, userInfo } = userRegister

// // // //   const redirect = location.search ? location.search.split('=')[1] : '/'

// // // //   useEffect(() => {
// // // //     if (userInfo) {
// // // //       history.push(redirect)
// // // //     }
// // // //   }, [history, userInfo, redirect])

// // // //   const submitHandler = (e) => {
// // // //     e.preventDefault()
// // // //     if(password !==confirmPassword)
// // // //     {
// // // //         setMessage('Password do not match')
// // // //     }else{
// // // //         dispatch(register(name,email,password))
// // // //     }
// // // //   }

// // // //   return (
// // // //     <FormContainer>
// // // //       <h1>Sign Up</h1>
// // // //       {message && <Message variant='danger'>{message    }</Message>}
// // // //       {error && <Message variant='danger'>{error}</Message>}
// // // //       {loading && <Loader />}
// // // //       <Form onSubmit={submitHandler}>
// // // //         <Form.Group controlId='name'>
// // // //           <Form.Label>Name</Form.Label>
// // // //           <Form.Control
// // // //             type='name'
// // // //             placeholder='Enter name'
// // // //             value={name}
// // // //             onChange={(e) => setName(e.target.value)}
// // // //           ></Form.Control>
// // // //         </Form.Group>
           
// // // //         <Form.Group controlId='email'>
// // // //           <Form.Label>Email Address</Form.Label>
// // // //           <Form.Control
// // // //             type='email'
// // // //             placeholder='Enter email'
// // // //             value={email}
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //           ></Form.Control>
// // // //         </Form.Group>
            
// // // //         <Form.Group controlId='password'>
// // // //           <Form.Label>Password Address</Form.Label>
// // // //           <Form.Control
// // // //             type='password'
// // // //             placeholder='Enter password'
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //           ></Form.Control>
// // // //         </Form.Group>

// // // //         <Form.Group controlId='confirmPassword'>
// // // //           <Form.Label>Confirm Password</Form.Label>
// // // //           <Form.Control
// // // //             type='password'
// // // //             placeholder='Confirm password'
// // // //             value={ConfirmPassword}
// // // //             onChange={(e) => setConfirmPassword(e.target.value)}
// // // //           ></Form.Control>
// // // //         </Form.Group>

// // // //         <Button type='submit' variant='primary'>
// // // //           Register
// // // //         </Button>
// // // //       </Form>

// // // //       <Row className='py-3'>
// // // //         <Col>
// // // //           Have an Account?{' '}
// // // //           <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
// // // //             Login
// // // //           </Link>
// // // //         </Col>
// // // //       </Row>
// // // //     </FormContainer>
// // // //   )
  

// // // // export default RegisterScreen
// // // import React, { useState, useEffect } from 'react'
// // // import { Link } from 'react-router-dom'
// // // import { Form, Button, Row, Col } from 'react-bootstrap'
// // // import { useDispatch, useSelector } from 'react-redux'
// // // import Message from '../components/Message'
// // // import Loader from '../components/Loader'

// // // import { getUserDetails } from '../actions/userActions'

// // // const ProfileScreen = ({ location, history }) => {
// // //   const [name, setName] = useState('')
// // //   const [email, setEmail] = useState('')
// // //   const [password, setPassword] = useState('')
// // //   const [confirmPassword, setConfirmPassword] = useState('')
// // //   const [message, setMessage] = useState(null)

// // //   const dispatch = useDispatch()

// // //   const userDetail = useSelector((state) => state.userDetail)
// // //   const { loading, error, userInfo } = userDetail



// // //   const userLogin= useSelector((state) => state.userLogin   )
// // //   const { userInfo } = userLogin

// // //   useEffect(() => {
// // //     if (!userInfo) {
// // //       history.push('/login')
// // //     }
// // //     else{
// // //         if(!userDetail.name)
// // //         {
// // //             dispatch(getUserDetails('profile'))
// // //         }else{
// // //             setName(user.name)
// // //             setEmail(user.email)
// // //         }
// // //     }
// // //   }, [dispatch,history, userInfo])

// // //   const submitHandler = (e) => {
// // //     e.preventDefault()
// // //     if (password !== confirmPassword) {
// // //       setMessage('Passwords do not match')
// // //     } else {
// // //      // dispatch update profile
// // //     }
// // //   }

// // //   return (
// // //     <Row>
// // //         <Col md={3}>
// // //         <h2>User Profile</h2>
// // //       {message && <Message variant='danger'>{message}</Message>}
// // //       {error && <Message variant='danger'>{error}</Message>}
// // //       {loading && <Loader />}
// // //       <Form onSubmit={submitHandler}>
// // //         <Form.Group controlId='name'>
// // //           <Form.Label>Name</Form.Label>
// // //           <Form.Control
// // //             type='name'
// // //             placeholder='Enter name'
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //           ></Form.Control>
// // //         </Form.Group>

// // //         <Form.Group controlId='email'>
// // //           <Form.Label>Email Address</Form.Label>
// // //           <Form.Control
// // //             type='email'
// // //             placeholder='Enter email'
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //           ></Form.Control>
// // //         </Form.Group>

// // //         <Form.Group controlId='password'>
// // //           <Form.Label>Password</Form.Label>
// // //           <Form.Control
// // //             type='password'
// // //             placeholder='Enter password'
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //           ></Form.Control>
// // //         </Form.Group>

// // //         <Form.Group controlId='confirmPassword'>
// // //           <Form.Label>Confirm Password</Form.Label>
// // //           <Form.Control
// // //             type='password'
// // //             placeholder='Confirm password'
// // //             value={confirmPassword}
// // //             onChange={(e) => setConfirmPassword(e.target.value)}
// // //           ></Form.Control>
// // //         </Form.Group>

// // //         <Button type='submit' variant='primary'>
// // //           Update
// // //         </Button>
// // //       </Form>

// // //         </Col>
// // //         <Col md={9}>
// // //             <h2>My orders</h2>
// // //         </Col>
// // //     </Row>
// // //   )
// // // }

// // // export default ProfileScreen
// // import React, { useState, useEffect } from 'react'
// // import { Form, Button, Row, Col } from 'react-bootstrap'
// // import { useDispatch, useSelector } from 'react-redux'
// // import Message from '../components/Message'
// // import Loader from '../components/Loader'
// // import { getUserDetails, updateUserProfile } from '../actions/userActions'

// // const ProfileScreen = ({ location, history }) => {
// //   const [name, setName] = useState('')
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [confirmPassword, setConfirmPassword] = useState('')
// //   const [message, setMessage] = useState(null)

// //   const dispatch = useDispatch()

// //   const userDetails = useSelector((state) => state.userDetails)
// //   const { loading, error, user } = userDetails

// //   const userLogin = useSelector((state) => state.userLogin)
// //   const { userInfo } = userLogin

// //   const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
// //   const { success } = userUpdateProfile

// //   useEffect(() => {
// //     if (!userInfo) {
// //       history.push('/login')
// //     } else {
// //       if (!user.name) {
// //         dispatch(getUserDetails('profile'))
// //       } else {
// //         setName(user.name)
// //         setEmail(user.email)
// //       }
// //     }
// //   }, [dispatch, history, userInfo, user])

// //   const submitHandler = (e) => {
// //     e.preventDefault()
// //     if (password !== confirmPassword) {
// //       setMessage('Passwords do not match')
// //     } else {
// //       dispatch(updateUserProfile({ id: user._id, name, email, password }))
// //     }
// //   }

// //   return (
// //     <Row>
// //       <Col md={3}>
// //         <h2>User Profile</h2>
// //         {message && <Message variant='danger'>{message}</Message>}
// //         {error && <Message variant='danger'>{error}</Message>}
// //         {success && <Message variant='success'>Profile Updated</Message>}
// //         {loading && <Loader />}
// //         <Form onSubmit={submitHandler}>
// //           <Form.Group controlId='name'>
// //             <Form.Label>Name</Form.Label>
// //             <Form.Control
// //               type='name'
// //               placeholder='Enter name'
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //             ></Form.Control>
// //           </Form.Group>

// //           <Form.Group controlId='email'>
// //             <Form.Label>Email Address</Form.Label>
// //             <Form.Control
// //               type='email'
// //               placeholder='Enter email'
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             ></Form.Control>
// //           </Form.Group>

// //           <Form.Group controlId='password'>
// //             <Form.Label>Password Address</Form.Label>
// //             <Form.Control
// //               type='password'
// //               placeholder='Enter password'
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             ></Form.Control>
// //           </Form.Group>

// //           <Form.Group controlId='confirmPassword'>
// //             <Form.Label>Confirm Password</Form.Label>
// //             <Form.Control
// //               type='password'
// //               placeholder='Confirm password'
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //             ></Form.Control>
// //           </Form.Group>

// //           <Button type='submit' variant='primary'>
// //             Update
// //           </Button>
// //         </Form>
// //       </Col>
// //       <Col md={9}>
// //         <h2>My Orders</h2>
// //       </Col>
// //     </Row>
// //   )
// // }

// // export default ProfileScreen

// import React, { useState, useEffect } from 'react'
// import { Form, Button, Row, Col } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import { getUserDetails, updateUserProfile } from '../actions/userActions'

// const ProfileScreen = ({ location, history }) => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [message, setMessage] = useState(null)

//   const dispatch = useDispatch()

//   const userDetails = useSelector((state) => state.userDetails)
//   const { loading, error, user } = userDetails

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
//   const { success } = userUpdateProfile

//   useEffect(() => {
//     if (!userInfo) {
//       history.push('/login')
//     } else {
//       if (!user.name) {
//         dispatch(getUserDetails('profile'))
//       } else {
//         setName(user.name)
//         setEmail(user.email)
//       }
//     }
//   }, [dispatch, history, userInfo, user])

//   const submitHandler = (e) => {
//     e.preventDefault()
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match')
//     } else {
//       dispatch(updateUserProfile({ id: user._id, name, email, password }))
//     }
//   }

//   return (
//     <Row>
//       <Col md={3}>
//         <h2>User Profile</h2>
//         {message && <Message variant='danger'>{message}</Message>}
//         {error && <Message variant='danger'>{error}</Message>}
//         {success && <Message variant='success'>Profile Updated</Message>}
//         {loading && <Loader />}
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId='name'>
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type='name'
//               placeholder='Enter name'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='email'>
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               type='email'
//               placeholder='Enter email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='password'>
//             <Form.Label>Password Address</Form.Label>
//             <Form.Control
//               type='password'
//               placeholder='Enter password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='confirmPassword'>
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type='password'
//               placeholder='Confirm password'
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Button type='submit' variant='primary'>
//             Update
//           </Button>
//         </Form>
//       </Col>
//       <Col md={9}>
//         <h2>My Orders</h2>
//       </Col>
//     </Row>
//   )
// }

// export default ProfileScreen

import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default ProfileScreen