import { CardGif } from "../ui/cardGif/CardGif"
import { useAppSelector } from "../../hooks/redux"



export const GifList = () => {
  const gif = useAppSelector(state => state.gif.gif)
  
  return (
    <div className="giflist-container">
      {
        gif.map((el, index) => (
          <CardGif gif={el} key={index}></CardGif>
        ))
      }
    </div>
  )
}
