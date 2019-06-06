import styled, { keyframes } from 'styled-components'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 30px;
`

export const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`
export const Text = styled.span`
  font-weight: bold;
  color: #fcd500;
  margin-right: 10px;
  text-transform: uppercase;
`
