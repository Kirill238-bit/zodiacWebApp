import { createEvent, createStore } from "effector";
import { IZodiac } from "../consts/zodiacs";


export const setZodiacDescriptionProps = createEvent <IZodiac | null>();
export const $zodiacDescription = createStore <IZodiac | null>(null)
  .on(setZodiacDescriptionProps, (_, props) => props)
