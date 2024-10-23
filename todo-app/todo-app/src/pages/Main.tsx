import React from 'react'
import Header from '../components/Header'
import { Container } from '@mui/material'
import AddTodo from '../components/AddTodo'

const Main = () => {
  return (
    <Container>
      <Header/>
      <AddTodo/>
    </Container>
  )
}

export default Main