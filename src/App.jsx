

import {  useState } from 'react'
import './App.css'

function App() {

  const [weight, setWight] = useState(0);
  const [height, setHeight] = useState(0);
  const [final, setFinal] = useState(null);

  return (
    <>
      <div className='mx-[35%] my-[10%] rounded-lg border border-gray-500'>
        <div className='text-white bg-blue-400   w-full p-5 rounded-lg '>
          <h1 className='flex justify-center items-center  '>BMI Calculator</h1>
        </div>

        <div className='p-10 flex items-center justify-between flex-col'>

          <div className='m-5'>
          <h4 className='text-lg'>Weight: {weight} kg</h4>
          <input type="range" onChange={(e) => {
            setWight(e.target.value)
          }} className='h-0.5' defaultValue={0} value={weight}  max={200}/>
          </div>

          <div className='m-5'>
          <h4 className='text-lg'>Height: {height} cm</h4>
          <input type="range" onChange={(e) => {
            setHeight(e.target.value)
          }} className='h-0.5' defaultValue={0} value={height} max={200} />
          </div>


          <button onClick={() => {
            if (weight == 0 || height == 0) {
              alert("Enter valid input");
              setFinal(null);
            }
            setFinal((weight * 10000 / (height * height)).toFixed(2))

            setTimeout(() => {
              setFinal(null);
              setWight(0);
              setHeight(0);
            }, 8000);
          }}  className='bg-blue-400 text-white p-3 rounded-lg'>{final ? final : "Calculate"}</button>
        </div>
      </div>
    </>
  )
}

export default App
