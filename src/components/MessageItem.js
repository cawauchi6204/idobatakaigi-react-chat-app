import React from 'react'
import {
  makeStyles,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@material-ui/core'

import { gravatarPath } from '../gravatar'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ name, text }) => {
  const classes = useStyles()
  const avatarPath = gravatarPath(name)
  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  )
}

export default MessageItem
