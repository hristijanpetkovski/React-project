import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Form, FormControl, FormGroup,
  FormLabel, Col, Button
} from 'react-bootstrap'
import { saveLoginInfo } from './../redux/login/login'

// useHistory().push(/)
const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    // save login info - dispatch action
    // and redirect to homepage
    dispatch(saveLoginInfo(username, password))
    history.push('/')
  }

  const saveInput = (e) => {
    const { name, value } = e.target

    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return <Form>
    <Col>
      <FormGroup as={Col} lg={4}>
        {/* username */}
        <FormLabel>Username</FormLabel>
        <FormControl
          type='text'
          name='username'
          value={username}
          onChange={saveInput}
        />
      </FormGroup>

      <FormGroup as={Col} lg={4}>
        {/* password */}
        <FormLabel>Password</FormLabel>
        <FormControl
          type='password'
          name='password'
          value={password}
          onChange={saveInput}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault()
              login()
            }
          }}
        />
      </FormGroup>

      <FormGroup as={Col} lg={4}>
        {/* password */}
        <Button onClick={login}>
          Sign In
        </Button>
      </FormGroup>
    </Col>
  </Form>
}

export default Login