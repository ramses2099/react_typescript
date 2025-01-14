import { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef<number| null> (null)
  const stopTimer =() => {
    if (interValRef.current) window.clearInterval(interValRef.current)
  }
  useEffect(()=>{
    interValRef.current = window.setInterval(()=>{
        setTimer((timer)=>timer +1)
    }, 1000)
    return () => {
        stopTimer()
    }
  },[])

  return (
    <div className='flex justify-center'>
      <div>
        HookTimer - {timer} -
        <button onClick={()=>stopTimer()}>Stop Timer</button>
      </div>
    </div>
  )
}

export default MutableRef
