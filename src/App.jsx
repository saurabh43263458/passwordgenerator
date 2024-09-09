import {useReducer, useState, useCallback, useEffect} from "react";

function App(){
 let len = ({"min":8,
  "max":50,"ren":9
 });
 const [length,setlen] = useState(9);
 const [numberallowed,setnumallowered] =useState(false);
 const [charallowed,setcharallowered] = useState(false);
 const [password,setpass] = useState("");
 const passwordgenerator = useCallback(() => {
  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(charallowed){
    str =str+"!@#$%^&*()_+=";
  }
  if(numberallowed){
   str=str+"1234567890";
  }
 
  for(let i=1;i<=length ; i++){
    var c = Math.floor(Math.random()*str.length +1)
    pass += str.charAt(c);
  }
  setpass(pass)
 },[setpass,length,charallowed,numberallowed]);
 useEffect(()=>{
passwordgenerator()
 },[length,numberallowed,charallowed,passwordgenerator])
 return(
  <>
<div className="w-screen  absolute top-10">
<div className="mx-36 text-orange-400 bg-slate-600 rounded-2xl  ">
    <div className="w-{20rem} flex flex-col items-center  ">
        <div className="w-full flex justify-center items-center  m-2 px-4">
          <input type="text"  value={password}
         placeholder="Password"
         className='h-11 w-full rounded-l-xl bg-white text-black pl-2 placeholder:text-gray-600' />
          <button className="rounded-none rounded-r-xl ">copy</button>
        </div>
        <div className="flex justify-between items-center w-full px-5 font-bold mb-2">
         <div className="">
         <input type="range"
         value={length}
         
         min={len.min}
         max={len.max}
         onChange={(e)=>{
          setlen(e.target.value)
         }} />
         <label className="mx-2">length({length})</label>
         </div>
        <div>
        < input type="checkbox" 
        defaultChecked={charallowed}
            id="charin"
            onChange={ ()=> {
              setcharallowered((pre) => !pre)}}
        />
        <label>Char</label>
        </div>
        <div>
        <input type="checkbox" defaultChecked={numberallowed}
        id="numberin"
        onChange={()=>{
         setnumallowered((prev) => !prev)
        }}/>
        <label>Number</label>
        </div>
        </div>
    </div>
 </div>
</div>
  </>
 )
} 
export default App;
