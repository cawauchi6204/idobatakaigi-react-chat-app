import React, { useRef, useEffect } from 'react'
import {
  makeStyles,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@material-ui/core'

import { gravatarPath } from '../gravatar'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null)
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLastItem])
  return (
    <ListItem divider={true} ref={ref}>
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
