import { useUnit } from 'effector-react'
import { zodiacs } from '../consts/zodiacs'
import ZodiacCard from './ZodiacCard'
import styled from 'styled-components'
import { $zodiacDescription, setZodiacDescriptionProps } from '../store/detailsStore'
import { $backButonHandler, setBackButtonHandler } from '../store/backButton'
import { useEffect } from 'react'

export const Wrapper = styled.div`
  width: 100%;
  padding:12px;
  padding-top: 56px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 8px;
  column-gap: 38px;
  row-gap: 16px;
  grid-template-columns:repeat( 2 ,minmax(0,1fr));
  justify-content: center;
  align-self: stretch;
`
const ZodiacList = () => {
  const zodiacDescription = useUnit($zodiacDescription)
  const backButton = useUnit($backButonHandler)

  useEffect(()=>{
    if(window.Telegram)
    if(zodiacDescription){
      setBackButtonHandler(()=>{setZodiacDescriptionProps(null)})
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.BackButton.onClick(backButton);
    }else{
      window.Telegram.WebApp.BackButton.hide();
      window.Telegram.WebApp.BackButton.offClick();
    }
  },[zodiacDescription])
  return (
    <Wrapper>
        {zodiacs.map((item => <ZodiacCard data={item}/>))}
    </Wrapper>
  )
}

export default ZodiacList