import { useState } from 'react';
import ShakesData from './Datas/ShakesData';
import Shakes from './Components/Shakes';
import BreakfastData from './Datas/BreakfastData';
import Breakfast from './Components/Breakfast';
import Lunch from './Components/Lunch';
import LunchDat from './Datas/LunchDat';

function App() {

  const [brake , setBreak] = useState(true)
  const [shake , setshake] = useState(true)
  const [Lunch , setLunch] = useState(true)

   const Break = BreakfastData.map(Breaker => {
    const{image,title,text,price} = Breaker
        return(
            <Breakfast
           
            image ={image}
            title = {title}
            text = {text}
            price ={price}
            />
        )
    })

   const Shake = ShakesData.map(shaker => {
    const{image,title,text,price} = shaker
        return(
            <Shakes
           
            image ={image}
            title = {title}
            text = {text}
            price ={price}
            />
        )
    })
     
   const Lunchs = LunchDat.map(Lucher => {
    const{image,title,text,price} = Lucher
        return(
            <Shakes
           
            image ={image}
            title = {title}
            text = {text}
            price ={price}
            />
        )
    })
  return (
    <>
    <h1 className='Top-menu' >Our Menu</h1>
    <div >
      <div className='header' >

        <h3 onClick={() => {
          return(
            setBreak(true),setshake(true),setLunch(true)

          )
        }}>All</h3>
        <h3 onClick={() => {
          return(
            setBreak(true),setshake(false),setLunch(false)
          )
        }}>Break fast</h3>

        <h3 onClick={() => {
          return(
            setBreak(false),setshake(false),setLunch(true)
          )
        }}>Lunch</h3>


        <h3 onClick={() => {
          return(
            setBreak(false),setshake(true),setLunch(false)

          )
        }}>Shakes</h3>
      </div>
      <div className='menu'>
    { brake ? <div className='break '>{Break}</div> : ""}
    { shake ? <div className='break'>{Shake}</div> : ""}
    { Lunch ? <div className='break'>{Lunchs}</div> : ""}
      </div>

    </div>
    </>
  );
}

export default App;
