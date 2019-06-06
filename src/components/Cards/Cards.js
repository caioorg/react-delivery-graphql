import React from 'react'

import { Container, Image, Title, Price } from './styles'

export default function Cards(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Image src={props.image} />
      <Price>R$ {props.price}</Price>
      {props.children}
    </Container>
  )
}
