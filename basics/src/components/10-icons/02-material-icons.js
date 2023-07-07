import React from 'react'
import { Container } from 'react-bootstrap'
import FlutterDashIcon from '@mui/icons-material/FlutterDash'
import { EmojiNature } from '@mui/icons-material'

const MaterialIcons = () => {
  return (
    <Container>
      <h2>Material Icons</h2>
      <FlutterDashIcon />
      <EmojiNature fontSize='large' color='primary' />
    </Container>
  )
}

export default MaterialIcons