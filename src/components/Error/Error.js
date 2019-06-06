import React from 'react'

import { Container, Text, Link } from './styles'

export default function Error(props) {
  return (
    <Container>
      <Text>{props.message}</Text>
      {props.url && <Link href={props.url}>aqui</Link>}
    </Container>
  )
}
