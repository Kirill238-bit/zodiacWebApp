import { ErrorBlock, Popup, Skeleton } from 'antd-mobile'
import { useUnit } from 'effector-react'
import { $zodiacDescription, setZodiacDescriptionProps } from '../store/detailsStore'
import styled from 'styled-components'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { API } from '../utils/API'
import { $lang } from '../store/langStore'
import { $tgInfo } from '../store/tgStore'

export const Wrapper = styled.div`
  padding-bottom:8vh;
  width: 90%;
  padding:32px;
  z-index:100;
  background-color: ${props => props.theme.dark ? 'black' : 'white'};
`
const ZodiacDescription = () => {
    const data = useUnit($zodiacDescription)
    const {dark} =useUnit($tgInfo)
    const lang = useUnit($lang)
    const [isLoading,setIsLoading] = useState(false)
    const [description,setDescription] = useState('')
    const popupRef = useRef<any>(null);
    const [touchStartX, setTouchStartX] = useState(0);

    useLayoutEffect(() => {
      document.documentElement.setAttribute(
        'data-prefers-color-scheme',
        dark? 'dark' : 'light'
      )
    }, [dark])

    useEffect(()=>{
      if(data){
        setIsLoading(true)
        API.description.get(data.nameEn,lang).then((res)=>{
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('success')
          setDescription(res.horoscope)
          setIsLoading(false)
        }).catch(()=>setIsLoading(false))
      }
    },[data])

    const handleTouchStart = (event:any) => {
      setTouchStartX(event.touches[0].clientX);
    };
  
    const handleTouchEnd = (event:any) => {
      const touchEndX = event.changedTouches[0].clientX;
      const swipeDistance = touchEndX - touchStartX;

      console.log(swipeDistance)
      if (swipeDistance > 40) { 
        setZodiacDescriptionProps(null);
      }
    };
  

  return (
    <Popup
        visible={Boolean(data)}
        onMaskClick={() => setZodiacDescriptionProps(null)}
        onClose={() => setZodiacDescriptionProps(null)}
        bodyStyle={{borderRadius:'12px'}}
    >
        <Wrapper ref={popupRef}
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
        >
          {isLoading ? 
            <Skeleton.Paragraph lineCount={5} animated />
          : !description ? 
            <ErrorBlock 
              title='Произошла ошибка'
              description=''
              />
          :
            <h3>{description}</h3>
          }
        </Wrapper>
    </Popup>
  )
}

export default ZodiacDescription