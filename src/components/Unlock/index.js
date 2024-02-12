// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  AppContentContainer,
  ImgElement,
  ParaElement,
  CustomButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setChangeLock] = useState(true)
  const onChangeLock = () => {
    setChangeLock(prevState => !prevState)
  }
  const lockImg = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const imgAlt = isLocked ? 'lock' : 'unlock'
  return (
    <AppContainer>
      <AppContentContainer>
        <ImgElement src={lockImg} alt={imgAlt} />
        <ParaElement>
          Your Device is {isLocked ? 'Locked' : 'Unlocked'}
        </ParaElement>
      </AppContentContainer>
      <CustomButton type="button" onClick={onChangeLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </CustomButton>
    </AppContainer>
  )
}

export default Unlock
