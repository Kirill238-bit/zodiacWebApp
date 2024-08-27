import React from 'react'
import styled from 'styled-components'
import { setZodiacDescriptionProps } from '../store/detailsStore'
import { useUnit } from 'effector-react'
import { $lang } from '../store/langStore'
import { IZodiac } from '../consts/zodiacs'
const Wrapper= styled.div`
  display: flex;
  width: 43vw;
  height:230px;
  max-height:230px;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 12px;
  background-color: #4d2c71;
  border-radius: 20px;

  h2{
    color:white;
    font-size:16px;
    line-height: 18px;
  }
  h3{
    color:white;
    font-size:13px;
    line-height: 15px;
  }
`

const TextWrapper = styled.div`
  padding: 12px 16px;
`

const Img = styled.img`
  position: relative;
  height:100%;
  padding:4px;
  border-radius: 20px;
  overflow: hidden;
  object-fit: fill;
`

const ZodiacCard = ({data}:{data:IZodiac}) => {
  const lang = useUnit($lang)
  return (
    <Wrapper onClick={()=> setZodiacDescriptionProps(data)}>
      <Img src={data.img} alt={lang==='Ru' ? data.name : data.nameEn}/>
        <TextWrapper>
            <h2>{lang==='Ru' ? data.name : data.nameEn}</h2>
            <h3>{lang==='Ru' ? data.period : data.periondEn}</h3>
        </TextWrapper>
    </Wrapper>
  )
}

export default ZodiacCard