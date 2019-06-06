import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  heigth: 100%;
  width: 30%;
  margin: 0 auto;
`

export const Form = styled.form`
  padding: 20px;
  width: 100%;
  text-align: right;
  border: 3px solid #fcd500;
  border-radius: 3px;
`

export const Select = styled.select`
  border: 1px solid #aaa;
  width: 100%;
  margin-bottom: 30px;
  padding: 15px 0 15px 20px;
  box-sizing: border-box;
  border-radius: 3px;
  color: #000000;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
`

export const Option = styled.option`
  text-transform: uppercase;
`

export const Button = styled.button`
  background: #fcd500;
  border: 0;
  border-radius: 5px;
  color: #000000;
  padding: 10px 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`
export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
`
