// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161617;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AppContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImgElement = styled.img`
  height: 80px;
`

export const ParaElement = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
`

export const CustomButton = styled.button`
  background-color: #06b6d4;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 8px;
`
