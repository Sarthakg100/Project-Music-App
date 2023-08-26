import { Song } from "./Song"

//import { Song } from "./Song"
export const Songs = ({fn,allsongs}) => {
   return (
   <>
   {allsongs.map((currentSong,index)=><Song fn = {fn} key = {index} song = {currentSong}/>)}
   
   </>)
}

export default Songs;