export const zodiacs = [
    {
      name: "Овен",
      nameEn: "Aries",
      period: "21 марта — 19 апреля",
      periondEn: "March 21 — April 19",
      img: "/Aries.jpeg", 
    },
    {
      name: "Телец",
      nameEn: "Taurus",
      period: "20 апреля — 20 мая",
      periondEn: "April 20 — May 20",
      img: "/Taurus.jpeg",
    },
    {
      name: "Близнецы",
      nameEn:'Gemini',
      period: "21 мая — 21 июня",
      periondEn: "May 21 — June 21",
      img: "/Gemini.jpg",
    },
    {
      name: "Рак",
      nameEn: "Cancer",
      period: "22 июня — 22 июля",
      periondEn: "June 22 — July 22",
      img: "/Cancer.jpg",
    },
    {
      name: "Лев",
      nameEn: "Leo",
      period: "23 июля — 22 августа",
      periondEn: "July 23 — August 22",
      img: "/Leo.jpg",
    },
    {
      name: "Дева",
      nameEn: "Virgo",
      period: "23 августа — 22 сентября",
      periondEn: "August 23 — September 22",
      img: "/Virgo.jpg",
    },
    {
      name: "Весы",
      nameEn: "Libra",
      period: "23 сентября — 23 октября",
      periondEn: "September 23 — October 23",
      img: "/Libra.jpg",
    },
    {
      name: "Скорпион",
      nameEn: "Scorpio",
      period: "24 октября — 21 ноября",
      periondEn: "October 24 — November 21",
      img: "/Scorpio.jpg",
    },
    {
      name: "Стрелец",
      nameEn: "Sagittarius",
      period: "22 ноября — 21 декабря",
      periondEn: "November 22 — December 21",
      img: "/Sagittarius.jpg",
    },
    {
      name: "Козерог",
      nameEn: "Capricorn",
      period: "22 декабря — 20 января",
      periondEn: "December 22 — January 20",
      img: "/Capricorn.jpg",
    },
    {
      name: "Водолей",
      nameEn: "Aquarius",
      period: "21 января — 20 февраля",
      periondEn: "January 21 — February 20",
      img: "/Aquarius.jpg",
    },
    {
      name: "Рыбы",
      nameEn: "Pisces",
      period: "21 февраля — 20 марта",
      periondEn: "February 21 — March 20",
      img: "/Pisces.jpg",
    },
  ];
  
  export interface IZodiac {
    name: string;
    nameEn: string;
    period: string;
    periondEn: string;
    img: string;
  }

export interface IZodiac {
    name:string
    nameEn:string
    period:string
    periondEn:string
    img:string
}