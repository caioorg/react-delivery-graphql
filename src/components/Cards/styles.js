import styled from 'styled-components'

export const Container = styled.div`
  flex: 0 1 calc(25% - 1em);
  text-align: center;
  border: 1px solid #d8d8d8;
  margin-bottom: 20px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
`

export const Image = styled.img`
  margin-bottom: 30px;
  height: 200px;
  width: auto;
  display: inline-block;
  text-align: center;
`

export const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  min-height: 40px;
`

export const Price = styled.div`
  color: #0a7a04;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`
