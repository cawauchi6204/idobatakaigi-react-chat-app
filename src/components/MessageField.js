import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

const MessageField = ({ name, setText, text }) => {
  console.log({ text })
  const [isComposed, setIsComposed] = useState(false)

  return <TextField
    fullWidth
    onChange={(e) => setText(e.target.value)}
    onKeyDown={(e) => {
      if (isComposed) return
      const text = e.target.value
      if (text === '') return
      if (e.key === 'Enter') {
        console.log('push message to firebase')
        setText('')
        e.preventDefault()
      }
    }}
    onCompositionStart={() => setIsComposed(true)}
    onCompositionEnd={() => setIsComposed(false)}
    value={text}
  />
}

export default MessageField
