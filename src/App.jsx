import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import './App.css'

function App() {
  useEffect(()=>{
    toast.error("hello world");
  },[])
  return (
  <h1 className='text-3xl font-bold underline'>Hello World!</h1>
  )
}
export default App
