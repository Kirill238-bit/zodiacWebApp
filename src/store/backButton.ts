import { createEvent, createStore } from "effector";


export const setBackButtonHandler = createEvent<(() => void)>()
export const $backButonHandler = createStore<(() => void) >(()=>{})
    .on(setBackButtonHandler, (state,newCallbak)=>{
        window.Telegram.WebApp.BackButton.offClick(state);
        window.Telegram.WebApp.BackButton.onClick(newCallbak);
        return newCallbak
    }
)