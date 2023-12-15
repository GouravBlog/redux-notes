// import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increament,decreament } from '../redux/Action'
const Counting = () =>{
  // const [count,setCount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.count)
  
  return(
    <>
    <h1 className='text-yellow-600 py-4'>Counter</h1>
    <button className='bg-slate-800 text-yellow-50 w-12 '  onClick={()=>dispatch(increament())}>+</button>&nbsp;&nbsp;
    {count}&nbsp;&nbsp;
    <button className='bg-slate-800 text-yellow-50 w-12' onClick={()=>dispatch(decreament())}>-</button>
    </>
  )
}

export default Counting