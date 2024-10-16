import  { useState } from 'react'

const ColorGuesser = () => {
    const [red, SetRed] = useState<number>(0)
    const [green, SetGreen] = useState<number>(0)
    const [blue, SetBlue] = useState<number>(0)

    const [riddleRed] = useState( Math.floor(Math.random() *255 +1))
    const [riddleGreen] = useState(Math.floor(Math.random() *255 +1))
    const [riddleBlue] = useState(Math.floor(Math.random() *255 +1))

    const[showRiddlw, SetShowRiddle] = useState(false)
  return (
    <div style={{background:`rgb(${riddleRed},${riddleGreen},${riddleBlue})`}}>
        <div style={{
            width: "100px",
            aspectRatio:1,
            background: `rgb(${red},${green},${blue})`
        }}></div>  
      <label htmlFor="red">R-{red}</label><br/>
      <input type="range" value={red} onChange={(e)=>SetRed(Number(e.target.value))} id='red' min={0} max={255}/> <br/>
      <label htmlFor="green">G-{green}</label><br/>
      <input type="range" value={green} onChange={(e)=>SetGreen(Number(e.target.value))} id='green' min={0} max={255}/><br/>
      <label htmlFor="blue">B-{blue}</label><br/>
      <input type="range" value={blue} onChange={(e)=>SetBlue(Number(e.target.value))} id='blue' min={0} max={255}  /><br/>
      <button onClick={()=>SetShowRiddle(true)}>Guess</button> 
      {showRiddlw ? <h2>rgb({riddleRed},{riddleGreen},{riddleBlue})</h2> : <h2>rgb(???, ???, ???)</h2>}       
      
    </div>
  )
}

export default ColorGuesser
