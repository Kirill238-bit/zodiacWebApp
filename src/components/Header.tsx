import { Switch, Tabs } from 'antd-mobile'
import React from 'react'
import styled from 'styled-components'
import { $lang, setLang } from '../store/langStore'
import { useUnit } from 'effector-react'

const Wrapper = styled.div`
  width: 94vw;
  z-index: 100;
  top: 0;
  position: fixed;
  padding: 10px 16px;
  display: flex;
  justify-content: flex-end;
  gap:4px;
  background-color: ${props => props.theme.dark? 'black' : `white`};
`

const Header = () => {
  const lang = useUnit($lang)
  return (
    <Wrapper>
      <Switch
        checkedText={'En'}
        uncheckedText={'Ru'}
        style={{'--checked-color':'#4d2c71'}}
        checked={Boolean(lang==='En')}
        onChange={v => {lang==='Ru'?setLang('En') : setLang("Ru")}}
      />
    </Wrapper>
  )
}

export default Header