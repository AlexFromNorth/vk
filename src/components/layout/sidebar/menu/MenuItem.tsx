import { QuestionAnswer } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { FC } from 'react'

const MenuItem:FC = () => {
  return (
    <List>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <QuestionAnswer/>
                </ListItemIcon>
                <ListItemText primary='Inbox'/>
            </ListItemButton>
        </ListItem>
    </List>
  )
}

export default MenuItem