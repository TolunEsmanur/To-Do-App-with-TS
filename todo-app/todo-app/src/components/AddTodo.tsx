import { Save } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const AddTodo = () => {
  return (
    <Box component="form" sx={{display:{xs:"block", sm:"flex"}, justifyContent:{xs:"flex-start",sm:"center"}, m:{xs:1, sm:"auto"}, height:{xs:"120px", sm:"80px"}}}>
        <TextField variant='outlined' color='success' sx={{minWidth:{xs:"100%", sm:"50%"}, height:"50px", m:1}}/>
        <Button variant="contained" endIcon={<Save/>} color='success' sx={{minWidth:{xs:"100%", sm:"15%"}, height:"55px", m:1}}>
           Save ToDo
        </Button>
    </Box>
  )
}

export default AddTodo