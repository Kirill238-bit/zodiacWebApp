import { createEvent, createStore } from "effector";

interface ITgInfo {
    dark: boolean;
    desktop: boolean;
    language_code:'Ru' | 'En'
  }
  
  const initialTgInfo:ITgInfo = {
    dark: false,
    desktop: false,
    language_code:'Ru',
  };

export const darkThemeEnabler = createEvent();
export const darkThemeDisabler = createEvent();
export const desktopEnabler = createEvent();
export const changeLanguage = createEvent<'Ru' | 'En'>();
export const $tgInfo = createStore<ITgInfo>(initialTgInfo)
  .on(darkThemeEnabler, (state) => ({ ...state, dark: true }))
  .on(darkThemeDisabler, (state) => ({ ...state, dark: false }))
  .on(desktopEnabler, (state) => ({ ...state, desktop: true }))
  .on(changeLanguage,(state,res)=>({...state,language_code:res}))