import React, { useState, useEffect } from 'react'
import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { messagesRef } from '../firebase'
import MessageItem from './MessageItem'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overFlow: 'auto',
    width: '100%',
  }
})

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles()
  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(100)
      .on('value', (snapshot) => {
        const messages = snapshot.val()
        if (messages === null) {
          console.log('nullです')
          return
        }
        const entries = Object.entries(messages)
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry
          // 分割代入
          return { key: key, ...nameAndText }
        })
        setMessages(newMessages)
        console.log(messages)
      })
  }, [])
  return (
    <List className={classes.root}>
      {
        messages.map(({ key, name, text }) => {
          return <MessageItem key={key} name={name} text={text}></MessageItem>
        })
      }
    </List>
  )
}

export default MessageList
