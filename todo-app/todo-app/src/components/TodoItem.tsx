import { DeleteOutline } from '@mui/icons-material'
import { IconButton, ListItem, ListItemText } from '@mui/material'
import { FC } from 'react'

interface ITodoItem {
    todo:ITodoType
    toogleTodo:ToogleFn
}

const TodoItem : FC<ITodoItem> = ({todo,toogleTodo}) => {
  return (
    <ListItem
    disableGutters
    sx={{padding:"1rem", cursor:"pointer"}}
    secondaryAction={
      <IconButton aria-label="comment">
        <DeleteOutline sx={{"&:hover":{color:"red"}}}  />
      </IconButton>
    }
  >
    <ListItemText primary={todo.task} onClick={()=>toogleTodo(todo)} />
  </ListItem>
  )
}

export default TodoItem