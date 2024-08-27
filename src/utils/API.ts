import axios from "axios"

export const API ={
    description:{
        get: async(sign:string, lang:'Ru' | 'En') => {
            const res = await axios.post(`https://poker247tech.ru/get_horoscope/`,{
                "sign": sign.toLowerCase(),
                "language": lang==='Ru' ? "original" : 'translated',
                "period": "today"
            })

            return res.data
        }
    }
}