import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ZodiacList from './components/ZodiacList';
import { useSearchParams } from 'react-router-dom';
import { $tgInfo, changeLanguage, darkThemeDisabler, darkThemeEnabler, desktopEnabler } from './store/tgStore';
import ZodiacDescription from './components/ZodiacDescription';
import { GlobalStyle } from './utils/GlobalStyle';
import { useUnit } from 'effector-react';
import Header from './components/Header';

declare global {
  interface Window {
    Telegram: any;
  }
}

const Wrapper = styled.div<{dark?:string, light?: string}>`
  position: absolute;
  width: 100%;
  min-height: calc(var(--tg-viewport-stable-height)+1px);
  background-color:${(props) => (props.theme.dark ? `${props.dark}` : `${props.light}`)};
  height: auto;
  overflow-x:hidden;
`;
function App() {
  const [params] = useSearchParams();  
  const { dark } = useUnit($tgInfo);


  useEffect(() => {
    const lang = params.get('language_code') || "Ru"
    lang==='ru' ? changeLanguage('Ru') : changeLanguage('En');
    
      if(window.Telegram) {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.disableVerticalSwipes();
        window.Telegram.WebApp.isClosingConfirmationEnabled = true;
        if (window.Telegram.WebApp.colorScheme === "dark") {
          darkThemeEnabler();
        }else{
          darkThemeDisabler();
        }

        window.Telegram.WebApp.onEvent('themeChanged', () => {
          if (window.Telegram.WebApp.colorScheme === "dark") {
            darkThemeEnabler();
          }else{
            darkThemeDisabler();
          }
        })
        
        if (
          !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
            navigator.userAgent
          )
        )
          desktopEnabler();
      }
  }, [])

  return (
    <ThemeProvider theme={{ dark }}>
      <GlobalStyle/>
      <Wrapper>
        <Header/>
        <ZodiacDescription/>
        <ZodiacList/>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
