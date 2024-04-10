import "./styles.css";
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function App() {
  const[count,setCount]=useState(0)
  
  const dispatch = useDispatch();
  const filter = useSelector((store: any) => store.tempFilter);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magjjic happen!</h2>
      {/* <ParseToken/> */}
      {count}
      <button onClick={()=>setCount((state)=>state+=1)}>+</button>
      <button onClick={()=>setCount((state)=>state-=1)}>-</button>

    </div>
  );
}
