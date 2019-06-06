import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
export const Footer = styled.div``

export const Button = styled.button`
  background: ${props => (props.primary ? '#fcd500' : 'white')};
  border: 1px solid ${props => (props.primary ? '#FFF' : '#F71A1F')};
  cursor: pointer;
  padding: 15px 30px;
  margin: 0 30px;
  border-radius: 3px;
  font-size: 24px;
  font-weight: 200;
`
