import { createEvent, createStore } from "effector";


export const setLang = createEvent <'Ru' | 'En'>();
export const $lang = createStore <'Ru' | 'En'>('Ru')
  .on(setLang, (_, props) => props)

